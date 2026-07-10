"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";

interface QueueItem {
  id: string;
  fullName: string;
  title: string | null;
  companyName: string;
  linkedinUrl: string | null;
  note: string | null;
}

export function ActionQueueClient({ initialItems, hasTemplate }: { initialItems: QueueItem[]; hasTemplate: boolean }) {
  const [items, setItems] = useState(initialItems);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function copyNote(item: QueueItem) {
    if (!item.note) return;
    await navigator.clipboard.writeText(item.note);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId((id) => (id === item.id ? null : id)), 1500);
  }

  async function markSent(id: string, theyReplied: boolean) {
    setBusyId(id);
    try {
      await apiFetch(`/api/contacts/${id}/linkedin-sent`, {
        method: "POST",
        body: JSON.stringify({ theyReplied }),
      });
      setItems((prev) => prev.filter((i) => i.id !== id));
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Action Queue</h1>
        <p className="mt-1 text-sm text-slate-500">
          LinkedIn fallback for contacts without a verified email. Every action here is a manual, one-click
          step you take yourself — nothing is sent automatically (see spec Section 8, compliance notes).
        </p>
      </div>

      {!hasTemplate && (
        <div className="rounded-md bg-amber-50 px-4 py-2 text-sm text-amber-800">
          No active LinkedIn template — connection notes can&apos;t be pre-filled until you add one in{" "}
          <a href="/dashboard/templates" className="underline">
            Templates
          </a>
          .
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-slate-900">{item.fullName}</p>
                <p className="text-sm text-slate-500">
                  {item.title ?? "—"} · {item.companyName}
                </p>
              </div>
              {item.linkedinUrl && (
                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Open profile ↗
                </a>
              )}
            </div>

            {item.note && (
              <div className="mt-3 rounded-md bg-slate-50 p-3 text-sm text-slate-700">{item.note}</div>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => copyNote(item)}
                disabled={!item.note}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
              >
                {copiedId === item.id ? "Copied!" : "Copy note"}
              </button>
              <button
                onClick={() => markSent(item.id, false)}
                disabled={busyId === item.id}
                className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 disabled:opacity-50"
              >
                Mark sent
              </button>
              <button
                onClick={() => markSent(item.id, true)}
                disabled={busyId === item.id}
                className="text-xs font-medium text-violet-600 hover:underline disabled:opacity-50"
              >
                Mark sent — they already replied
              </button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
            Nothing in the queue. Run discovery from the Watchlist page to find more contacts.
          </p>
        )}
      </div>
    </div>
  );
}
