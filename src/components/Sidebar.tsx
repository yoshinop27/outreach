"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import clsx from "clsx";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/watchlist", label: "Watchlist" },
  { href: "/dashboard/pipeline", label: "Pipeline" },
  { href: "/dashboard/action-queue", label: "Action Queue" },
  { href: "/dashboard/inbox", label: "Reply Inbox" },
  { href: "/dashboard/templates", label: "Templates" },
  { href: "/dashboard/calendar", label: "Calendar" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function Sidebar({
  displayName,
  email,
  isAdmin,
}: {
  displayName: string | null;
  email: string;
  isAdmin: boolean;
}) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-60 flex-shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="text-sm font-semibold text-slate-900">Outreach Dashboard</p>
        <p className="mt-0.5 truncate text-xs text-slate-500">{displayName ?? email}</p>
      </div>
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100",
              )}
            >
              {item.label}
            </Link>
          );
        })}
        {isAdmin && (
          <Link
            href="/dashboard/admin"
            className={clsx(
              "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === "/dashboard/admin" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100",
            )}
          >
            Admin
          </Link>
        )}
      </nav>
      <div className="border-t border-slate-200 p-3">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-500 hover:bg-slate-100"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
