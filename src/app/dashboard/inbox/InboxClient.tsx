"use client";

import { useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/fetcher";
import type { ContactStatus } from "@/lib/types";

interface InboxItem {
  id: string;
  fullName: string;
  title: string | null;
  companyName: string;
  email: string | null;
  channel: string | null;
  repliedAt: string | null;
}

export function InboxClient({ initialItems }: { initialItems: InboxItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function triage(id: string, status: ContactStatus) {
    setBusyId(id);
    try {
      await apiFetch(`/api/contacts/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
      setItems((prev) => prev.filter((i) => i.id !== id));
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Reply Inbox</h1>
        <p className="mt-1 text-sm text-slate-500">
          Replies land here for you to read and triage yourself — nothing is auto-classified (spec Section
          6.3). Pick what happens next for each contact.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-slate-900">{item.fullName}</p>
                <p className="text-sm text-slate-500">
                  {item.title ?? "—"} · {item.companyName}
                  {item.channel && ` · replied via ${item.channel}`}
                </p>
                {item.email && <p className="mt-1 text-xs text-slate-400">{item.email}</p>}
              </div>
              <Link
                href={`/dashboard/calendar?contactId=${item.id}`}
                className="whitespace-nowrap rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
              >
                Schedule chat
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => triage(item.id, "booked")}
                disabled={busyId === item.id}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Mark meeting booked
              </button>
              <button
                onClick={() => triage(item.id, "ignored")}
                disabled={busyId === item.id}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Not interested — ignore
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
            No replies waiting on triage.
          </p>
        )}
      </div>
    </div>
  );
}
