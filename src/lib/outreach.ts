// Combines the spec's "Discovery worker" (6.1) and "Outreach dispatch"
// (6.2) into one synchronous run, triggered manually from the dashboard
// instead of on a cron/queue. A real scheduled job would call this exact
// function per watchlist item — the cap/dedupe/dispatch logic doesn't
// change, only the trigger does.

import { prisma } from "@/lib/prisma";
import { discoverContacts } from "@/lib/mock-apollo";
import { mockSendEmail } from "@/lib/mock-google";
import { parseStringArray, renderTemplate, type ContactStatus } from "@/lib/types";

// Independent of whichever cap mode is active (manual now, adaptive later —
// spec 6.2 item 4), to avoid over-contacting one org in a single run.
const PER_COMPANY_DAILY_CAP = 3;

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  return { firstName: firstName ?? fullName, lastName: rest.join(" ") };
}

export interface DiscoveryDispatchSummary {
  contactsDiscovered: number;
  emailsSent: number;
  linkedinQueued: number;
  queuedForNextRun: number;
  skippedNoActiveTemplate: number;
}

export async function runDiscoveryAndDispatch(
  userId: string,
  watchlistItemId?: string,
): Promise<DiscoveryDispatchSummary> {
  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });

  const watchlistItems = await prisma.watchlistItem.findMany({
    where: {
      userId,
      active: true,
      ...(watchlistItemId ? { id: watchlistItemId } : {}),
    },
  });

  let contactsDiscovered = 0;

  for (const item of watchlistItems) {
    const existing = await prisma.contact.findMany({
      where: { watchlistItemId: item.id },
      select: { linkedinUrl: true, email: true },
    });
    const existingLinkedin = new Set(existing.map((c) => c.linkedinUrl).filter(Boolean));
    const existingEmail = new Set(existing.map((c) => c.email).filter(Boolean));

    const discovered = discoverContacts({
      companyName: item.companyName,
      companyDomain: item.companyDomain,
      targetTitles: parseStringArray(item.targetTitles),
    });

    for (const d of discovered) {
      if (existingLinkedin.has(d.linkedinUrl) || (d.email && existingEmail.has(d.email))) continue;
      await prisma.contact.create({
        data: {
          watchlistItemId: item.id,
          fullName: d.fullName,
          title: d.title,
          companyName: item.companyName,
          linkedinUrl: d.linkedinUrl,
          email: d.email,
          emailStatus: d.emailStatus,
          source: "apollo",
          status: "discovered",
        },
      });
      contactsDiscovered++;
    }
  }

  const [emailTemplate, linkedinTemplate] = await Promise.all([
    prisma.template.findFirst({ where: { userId, channel: "email", isActive: true } }),
    prisma.template.findFirst({ where: { userId, channel: "linkedin", isActive: true } }),
  ]);

  const todayStart = startOfToday();
  const dispatchableStatuses: ContactStatus[] = ["discovered", "queued_email", "queued_linkedin"];

  const pendingContacts = await prisma.contact.findMany({
    where: {
      status: { in: dispatchableStatuses },
      watchlistItem: {
        userId,
        ...(watchlistItemId ? { id: watchlistItemId } : {}),
      },
    },
    orderBy: { discoveredAt: "asc" },
  });

  const dispatchedTodayCount = await prisma.outreachEvent.count({
    where: { createdAt: { gte: todayStart }, contact: { watchlistItem: { userId } } },
  });

  const todaysEventContacts = await prisma.outreachEvent.findMany({
    where: { createdAt: { gte: todayStart }, contact: { watchlistItem: { userId } } },
    select: { contact: { select: { companyName: true } } },
  });
  const companyCounts = new Map<string, number>();
  for (const e of todaysEventContacts) {
    companyCounts.set(e.contact.companyName, (companyCounts.get(e.contact.companyName) ?? 0) + 1);
  }

  let dailyCount = dispatchedTodayCount;
  let emailsSent = 0;
  let linkedinQueued = 0;
  let queuedForNextRun = 0;
  let skippedNoActiveTemplate = 0;

  for (const contact of pendingContacts) {
    const channel: "email" | "linkedin" = contact.emailStatus === "verified" && contact.email ? "email" : "linkedin";
    const companyCount = companyCounts.get(contact.companyName) ?? 0;
    const capOk = dailyCount < user.dailySendCapCurrent;
    const companyCapOk = companyCount < PER_COMPANY_DAILY_CAP;

    if (!capOk || !companyCapOk) {
      const nextStatus: ContactStatus = channel === "email" ? "queued_email" : "queued_linkedin";
      if (contact.status !== nextStatus) {
        await prisma.contact.update({
          where: { id: contact.id },
          data: { status: nextStatus, lastStatusChangeAt: new Date() },
        });
      }
      queuedForNextRun++;
      continue;
    }

    if (channel === "email") {
      if (!emailTemplate) {
        skippedNoActiveTemplate++;
        continue;
      }
      const { firstName, lastName } = splitName(contact.fullName);
      const ctx = {
        first_name: firstName,
        last_name: lastName,
        full_name: contact.fullName,
        title: contact.title ?? "",
        company: contact.companyName,
        sender_name: user.displayName ?? user.email,
      };
      const subject = renderTemplate(emailTemplate.subject ?? "", ctx);
      const body = renderTemplate(emailTemplate.body, ctx);
      const result = await mockSendEmail({
        fromUserEmail: user.email,
        to: contact.email!,
        subject,
        body,
      });

      await prisma.$transaction([
        prisma.outreachEvent.create({
          data: {
            contactId: contact.id,
            templateId: emailTemplate.id,
            channel: "email",
            sentAt: result.sentAt,
            bounced: result.bounced,
          },
        }),
        prisma.contact.update({
          where: { id: contact.id },
          data: { status: "emailed", lastStatusChangeAt: new Date() },
        }),
      ]);
      emailsSent++;
    } else {
      if (!linkedinTemplate) {
        skippedNoActiveTemplate++;
        continue;
      }
      await prisma.$transaction([
        prisma.outreachEvent.create({
          data: {
            contactId: contact.id,
            templateId: linkedinTemplate.id,
            channel: "linkedin",
          },
        }),
        prisma.contact.update({
          where: { id: contact.id },
          data: { status: "linkedin_manual_pending", lastStatusChangeAt: new Date() },
        }),
      ]);
      linkedinQueued++;
    }

    dailyCount++;
    companyCounts.set(contact.companyName, companyCount + 1);
  }

  return { contactsDiscovered, emailsSent, linkedinQueued, queuedForNextRun, skippedNoActiveTemplate };
}
