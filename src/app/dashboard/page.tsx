import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { getAnalytics } from "@/lib/analytics";
import { parseStringArray } from "@/lib/types";
import { WatchlistClient } from "./WatchlistClient";
import { AnalyticsClient } from "./AnalyticsClient";

interface WeekMeeting {
  id: string;
  contactName: string;
  companyName: string;
  scheduledAt: string;
}

function MeetingsThisWeek({ meetings }: { meetings: WeekMeeting[] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">This week's meetings</h2>
      {meetings.length === 0 ? (
        <p className="text-sm text-slate-400">Nothing scheduled in the next 7 days.</p>
      ) : (
        <ul className="divide-y divide-slate-100">
          {meetings.map((m) => (
            <li key={m.id} className="flex items-center justify-between py-2 text-sm">
              <div>
                <p className="font-medium text-slate-900">{m.contactName}</p>
                <p className="text-xs text-slate-500">{m.companyName}</p>
              </div>
              <p className="whitespace-nowrap text-xs text-slate-500">
                {new Date(m.scheduledAt).toLocaleString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function OverviewPage() {
  const session = await getSession();
  const userId = session!.user.id;

  const now = new Date();
  const weekFromNow = new Date();
  weekFromNow.setDate(weekFromNow.getDate() + 7);

  const [analytics, weekChats, watchlistItems] = await Promise.all([
    getAnalytics(userId, 30),
    prisma.coffeeChat.findMany({
      where: {
        contact: { watchlistItem: { userId } },
        scheduledAt: { gte: now, lte: weekFromNow },
        outcome: null,
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

  const weekMeetings: WeekMeeting[] = weekChats.map((c) => ({
    id: c.id,
    contactName: c.contact.fullName,
    companyName: c.contact.companyName,
    scheduledAt: c.scheduledAt.toISOString(),
  }));

  const initialWatchlistItems = watchlistItems.map((item) => ({
    id: item.id,
    companyName: item.companyName,
    companyDomain: item.companyDomain,
    targetTitles: parseStringArray(item.targetTitles),
    location: item.location,
    seniority: parseStringArray(item.seniority),
    contactCount: item._count.contacts,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Overview</h1>
      </div>

      <WatchlistClient initialItems={initialWatchlistItems} />

      <MeetingsThisWeek meetings={weekMeetings} />

      <AnalyticsClient initialData={analytics} />
    </div>
  );
}
