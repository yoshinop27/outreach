import Link from "next/link";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { getAnalytics } from "@/lib/analytics";

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

  const [analytics, watchlistCount, actionQueueCount, user] = await Promise.all([
    getAnalytics(userId, 30),
    prisma.watchlistItem.count({ where: { userId } }),
    prisma.contact.count({
      where: {
        watchlistItem: { userId },
        status: "sent",
        outreachEvents: { some: { channel: "linkedin", manualActionCompletedAt: null } },
      },
    }),
    prisma.user.findUniqueOrThrow({ where: { id: userId } }),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Overview</h1>
        <p className="mt-1 text-sm text-slate-500">Last 30 days · daily send cap {user.dailySendCapCurrent}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Contacts discovered" value={analytics.contactsDiscovered} />
        <StatCard label="Emails sent" value={analytics.emailsSent} />
        <StatCard label="LinkedIn actions in queue" value={actionQueueCount} />
        <StatCard label="Meetings booked" value={analytics.meetingsBooked} />
        <StatCard label="Reply rate" value={`${(analytics.replyRate * 100).toFixed(1)}%`} />
        <StatCard label="Bounce rate" value={`${(analytics.bounceRate * 100).toFixed(1)}%`} />
        <StatCard label="Watchlist items" value={watchlistCount} />
        <StatCard label="Ignored" value={analytics.funnel["Ignored"] ?? 0} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-slate-900">Quick actions</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/dashboard/watchlist" className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800">
            Manage watchlist
          </Link>
          <Link href="/dashboard/action-queue" className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Open Action Queue
          </Link>
          <Link href="/dashboard/analytics" className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
            View analytics
          </Link>
        </div>
      </div>
    </div>
  );
}
