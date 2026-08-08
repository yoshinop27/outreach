import { prisma } from "@/lib/prisma";
import { CONTACT_STATUSES, CONTACT_STATUS_LABELS, type ContactStatus } from "@/lib/types";

export interface AnalyticsResult {
  windowDays: number;
  contactsDiscovered: number;
  emailsSent: number;
  meetingsBooked: number;
  replyRate: number;
  bounceRate: number;
  funnel: Record<string, number>;
  byCompany: { company: string; count: number }[];
  templateStats: { id: string; name: string; channel: string; sent: number; replied: number; replyRate: number }[];
  replySeries: { date: string; replies: number }[];
}

export async function getAnalytics(userId: string, days: number): Promise<AnalyticsResult> {
  const windowStart = new Date();
  windowStart.setDate(windowStart.getDate() - days);
  windowStart.setHours(0, 0, 0, 0);

  const userScope = { watchlistItem: { userId } };

  const [contactsDiscovered, emailEvents, repliedEvents, coffeeChats, allContacts, templates] = await Promise.all([
    prisma.contact.count({ where: { watchlistItem: { userId }, discoveredAt: { gte: windowStart } } }),
    prisma.outreachEvent.findMany({
      where: { contact: userScope, channel: "email", sentAt: { gte: windowStart } },
      select: { id: true, bounced: true, sentAt: true, repliedAt: true },
    }),
    prisma.outreachEvent.findMany({
      where: { contact: userScope, channel: "email", repliedAt: { gte: windowStart } },
      select: { id: true, repliedAt: true },
    }),
    prisma.coffeeChat.count({
      where: { contact: userScope, createdAt: { gte: windowStart } },
    }),
    prisma.contact.findMany({
      where: { watchlistItem: { userId } },
      select: { status: true, companyName: true },
    }),
    prisma.template.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        channel: true,
        outreachEvents: { select: { repliedAt: true, sentAt: true, manualActionCompletedAt: true } },
      },
    }),
  ]);

  const emailsSent = emailEvents.length;
  const repliedCount = repliedEvents.length;
  const replyRate = emailsSent > 0 ? repliedCount / emailsSent : 0;
  const bounceCount = emailEvents.filter((e) => e.bounced).length;
  const bounceRate = emailsSent > 0 ? bounceCount / emailsSent : 0;

  const funnel: Record<string, number> = Object.fromEntries(CONTACT_STATUSES.map((s) => [CONTACT_STATUS_LABELS[s], 0]));
  const byCompany = new Map<string, number>();
  for (const c of allContacts) {
    funnel[CONTACT_STATUS_LABELS[c.status as ContactStatus]]++;
    byCompany.set(c.companyName, (byCompany.get(c.companyName) ?? 0) + 1);
  }

  const templateStats = templates.map((t) => {
    const sent = t.outreachEvents.filter((e) => e.sentAt || e.manualActionCompletedAt).length;
    const replied = t.outreachEvents.filter((e) => e.repliedAt).length;
    return {
      id: t.id,
      name: t.name,
      channel: t.channel,
      sent,
      replied,
      replyRate: sent > 0 ? replied / sent : 0,
    };
  });

  const dayBuckets: { date: string; replies: number }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    dayBuckets.push({ date: d.toISOString().slice(0, 10), replies: 0 });
  }
  const bucketIndex = new Map(dayBuckets.map((b, i) => [b.date, i]));
  for (const e of repliedEvents) {
    if (!e.repliedAt) continue;
    const key = new Date(e.repliedAt).toISOString().slice(0, 10);
    const idx = bucketIndex.get(key);
    if (idx !== undefined) dayBuckets[idx].replies++;
  }

  return {
    windowDays: days,
    contactsDiscovered,
    emailsSent,
    meetingsBooked: coffeeChats,
    replyRate,
    bounceRate,
    funnel,
    byCompany: Array.from(byCompany.entries()).map(([company, count]) => ({ company, count })),
    templateStats,
    replySeries: dayBuckets,
  };
}
