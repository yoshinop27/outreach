// Spec's "Discovery worker" (6.1) — finds and stores new contacts for a
// user's watchlist. Triggered manually from the dashboard instead of on a
// cron/queue; a real scheduled job would call this exact function per
// watchlist item. Does NOT send anything — sending is a deliberate,
// per-contact action from the Pipeline (see sendEmailToContact below).

import { prisma } from "@/lib/prisma";
import { discoverContacts } from "@/lib/discover_contacts";
import { mockSendEmail, checkThreadForReply } from "@/lib/mock-google";
import { parseStringArray, renderTemplate } from "@/lib/types";
import { NotFoundError, BadRequestError } from "@/lib/api-helpers";

function splitName(fullName: string): { firstName: string; lastName: string } {
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  return { firstName: firstName ?? fullName, lastName: rest.join(" ") };
}

export interface DiscoverySummary {
  contactsDiscovered: number;
  skippedNoEmail: number;
}

export async function runDiscovery(userId: string, watchlistItemId?: string): Promise<DiscoverySummary> {
  const watchlistItems = await prisma.watchlistItem.findMany({
    where: {
      userId,
      ...(watchlistItemId ? { id: watchlistItemId } : {}),
    },
  });

  let contactsDiscovered = 0;
  let skippedNoEmail = 0;

  for (const item of watchlistItems) {
    const existing = await prisma.contact.findMany({
      where: { watchlistItemId: item.id },
      select: { linkedinUrl: true, email: true },
    });
    const existingLinkedin = new Set(existing.map((c) => c.linkedinUrl).filter(Boolean));
    const existingEmail = new Set(existing.map((c) => c.email).filter(Boolean));

    const discovered = await discoverContacts({
      companyName: item.companyName,
      companyDomain: item.companyDomain,
      targetTitles: parseStringArray(item.targetTitles),
      location: item.location,
      seniority: parseStringArray(item.seniority),
    });

    for (const d of discovered) {
      if (existingLinkedin.has(d.linkedinUrl) || (d.email && existingEmail.has(d.email))) continue;
      await prisma.contact.create({
        data: {
          watchlistItemId: item.id,
          fullName: d.fullName,
          title: d.title,
          companyName: item.companyName,
          job: item.job,
          linkedinUrl: d.linkedinUrl,
          email: d.email,
          emailStatus: d.emailStatus,
          source: "apollo",
          status: "discovered",
        },
      });
      contactsDiscovered++;
      // No email on file — stays "discovered", hidden from the Pipeline by
      // default until one is found; there's no other outreach channel now.
      if (!d.email) skippedNoEmail++;
    }
  }

  return { contactsDiscovered, skippedNoEmail };
}

// Manual, single-contact send triggered from the Pipeline "Send email"
// button — the only way an email goes out; discovery never sends on its own.
export async function sendEmailToContact(contactId: string, userId: string) {
  const contact = await prisma.contact.findFirst({
    where: { id: contactId, watchlistItem: { userId } },
  });
  if (!contact) throw new NotFoundError();
  if (!contact.email) {
    throw new BadRequestError("This contact has no email on file.");
  }

  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });

  // SQLite has no case-insensitive query mode in Prisma, and the candidate
  // set (active email templates for one user) is small — so match in JS: a
  // template whose companyName matches the contact's company (case-insensitive)
  // wins; otherwise fall back to the default template (companyName is null).
  const activeEmailTemplates = await prisma.template.findMany({
    where: { userId, channel: "email", isActive: true },
  });
  const companyKey = contact.companyName.trim().toLowerCase();
  const emailTemplate =
    activeEmailTemplates.find((t) => t.companyName?.trim().toLowerCase() === companyKey) ??
    activeEmailTemplates.find((t) => !t.companyName);
  if (!emailTemplate) {
    throw new BadRequestError(
      `No active email template for ${contact.companyName} and no default template. Add one in Templates.`,
    );
  }

  const { firstName, lastName } = splitName(contact.fullName);
  const ctx = {
    first_name: firstName,
    last_name: lastName,
    full_name: contact.fullName,
    title: contact.title ?? "",
    company: contact.companyName,
    job: contact.job ?? "",
    sender_name: user.displayName ?? user.email,
  };
  const subject = renderTemplate(emailTemplate.subject ?? "", ctx);
  const body = renderTemplate(emailTemplate.body, ctx);
  const result = await mockSendEmail({
    userId: user.id,
    fromUserEmail: user.email,
    to: contact.email,
    subject,
    body,
    attachment:
      user.resumeData && user.resumeName && user.resumeMimeType
        ? {
            filename: user.resumeName,
            mimeType: user.resumeMimeType,
            data: Buffer.from(user.resumeData),
          }
        : null,
  });

  const [, updated] = await prisma.$transaction([
    prisma.outreachEvent.create({
      data: {
        contactId: contact.id,
        templateId: emailTemplate.id,
        channel: "email",
        threadId: result.threadId,
        sentAt: result.sentAt,
        bounced: result.bounced,
      },
    }),
    prisma.contact.update({
      where: { id: contact.id },
      data: { status: "sent", lastStatusChangeAt: new Date() },
    }),
  ]);

  return updated;
}

export interface ReplyPollSummary {
  usersChecked: number;
  threadsChecked: number;
  repliesFound: number;
  errors: number;
}

// Reply detection has no push/webhook hook (see the Reply Inbox note) — this
// polls every OutreachEvent still waiting on a reply, one Gmail thread read
// each, and records the reply's timestamp the moment a thread grows a
// message that isn't from us. Triggered on a schedule (see
// /api/cron/poll-replies), not per-user session, so it runs across every
// connected account in one pass rather than being scoped to a request.
export async function pollRepliesForAllUsers(): Promise<ReplyPollSummary> {
  const users = await prisma.user.findMany({
    where: { googleAccountConnected: true },
    select: { id: true, email: true },
  });

  const summary: ReplyPollSummary = { usersChecked: 0, threadsChecked: 0, repliesFound: 0, errors: 0 };

  for (const user of users) {
    summary.usersChecked++;

    const pendingEvents = await prisma.outreachEvent.findMany({
      where: {
        channel: "email",
        threadId: { not: null },
        repliedAt: null,
        contact: { watchlistItem: { userId: user.id } },
      },
      select: { id: true, threadId: true },
    });

    for (const event of pendingEvents) {
      summary.threadsChecked++;
      try {
        const repliedAt = await checkThreadForReply({
          userId: user.id,
          fromUserEmail: user.email,
          threadId: event.threadId!,
        });
        if (repliedAt) {
          await prisma.outreachEvent.update({ where: { id: event.id }, data: { repliedAt } });
          summary.repliesFound++;
        }
      } catch (err) {
        console.error(`Reply poll failed for outreachEvent ${event.id}:`, err);
        summary.errors++;
      }
    }
  }

  return summary;
}
