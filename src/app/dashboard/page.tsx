import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { getAnalytics } from "@/lib/analytics";
import { parseStringArray } from "@/lib/types";
import { WatchlistClient } from "./WatchlistClient";

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

export default async function OverviewPage() {
  const session = await getSession();
  const userId = session!.user.id;

  const pastMonthStart = new Date();
  pastMonthStart.setDate(pastMonthStart.getDate() - 30);

  const [analytics, chatsPastMonth, nextMeeting, watchlistItems] = await Promise.all([
    getAnalytics(userId, 30),
    prisma.coffeeChat.count({
      where: {
        contact: { watchlistItem: { userId } },
        scheduledAt: { gte: pastMonthStart, lte: new Date() },
      },
    }),
    prisma.coffeeChat.findFirst({
      where: {
        scheduledAt: { gte: new Date() },
        outcome: null,
        contact: { watchlistItem: { userId } },
      },
      orderBy: { scheduledAt: "asc" },
      include: { contact: { select: { fullName: true, companyName: true } } },
    }),
    prisma.watchlistItem.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { contacts: true } } },
    }),
  ]);

  const initialWatchlistItems = watchlistItems.map((item) => ({
    id: item.id,
    companyName: item.companyName,
    companyDomain: item.companyDomain,
    targetTitles: parseStringArray(item.targetTitles),
    location: item.location,
    seniority: parseStringArray(item.seniority),
    contactCount: item._count.contacts,
  }));

  const nextMeetingLabel = nextMeeting
    ? `${nextMeeting.contact.fullName} · ${nextMeeting.contact.companyName}`
    : "None scheduled";

  const nextMeetingHint = nextMeeting
    ? new Date(nextMeeting.scheduledAt).toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : undefined;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Overview</h1>
        <p className="mt-1 text-sm text-slate-500">Last 30 days</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Meetings booked" value={analytics.meetingsBooked} />
        <StatCard label="Reply rate" value={`${(analytics.replyRate * 100).toFixed(1)}%`} />
        <StatCard label="Chats scheduled" value={chatsPastMonth} hint="Past month" />
        <StatCard label="Next meeting" value={nextMeetingLabel} hint={nextMeetingHint} />
      </div>

      <WatchlistClient initialItems={initialWatchlistItems} />
    </div>
  );
}
