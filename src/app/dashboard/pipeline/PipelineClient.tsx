"use client";

import { useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/fetcher";
import { StatusBadge } from "@/components/StatusBadge";
import { CONTACT_STATUSES, KANBAN_COLUMNS, kanbanColumnFor, type ContactStatus } from "@/lib/types";

interface ContactView {
  id: string;
  fullName: string;
  title: string | null;
  companyName: string;
  email: string | null;
  emailStatus: string;
  linkedinUrl: string | null;
  status: ContactStatus;
  lastChannel: string | null;
}

export function PipelineClient({ initialContacts }: { initialContacts: ContactView[] }) {
  const [contacts, setContacts] = useState(initialContacts);
  const [busyId, setBusyId] = useState<string | null>(null);

  async function updateStatus(id: string, status: ContactStatus) {
    setBusyId(id);
    try {
      await apiFetch(`/api/contacts/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
      setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
    } finally {
      setBusyId(null);
    }
  }

  async function simulateReply(id: string) {
    setBusyId(id);
    try {
      await apiFetch(`/api/contacts/${id}/simulate-reply`, { method: "POST" });
      setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status: "replied" } : c)));
    } finally {
      setBusyId(null);
    }
  }

  const grouped = KANBAN_COLUMNS.map((col) => ({
    col,
    contacts: contacts.filter((c) => kanbanColumnFor(c.status) === col),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Pipeline</h1>
        <p className="mt-1 text-sm text-slate-500">
          Every discovered contact and where they are in the outreach funnel.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {grouped.map(({ col, contacts: colContacts }) => (
          <div key={col} className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {col} <span className="text-slate-400">({colContacts.length})</span>
            </h2>
            <div className="space-y-3">
              {colContacts.map((c) => (
                <div key={c.id} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-sm font-medium text-slate-900">{c.fullName}</p>
                  <p className="text-xs text-slate-500">
                    {c.title ?? "—"} · {c.companyName}
                  </p>
                  <div className="mt-2">
                    <StatusBadge status={c.status} />
                  </div>
                  <div className="mt-2 space-y-1 text-xs text-slate-500">
                    {c.email && <p>✉ {c.email}</p>}
                    {c.linkedinUrl && (
                      <a href={c.linkedinUrl} target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">
                        LinkedIn profile
                      </a>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <select
                      value={c.status}
                      disabled={busyId === c.id}
                      onChange={(e) => updateStatus(c.id, e.target.value as ContactStatus)}
                      className="rounded-md border border-slate-300 px-2 py-1 text-xs"
                    >
                      {CONTACT_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {c.status === "emailed" && (
                      <button
                        onClick={() => simulateReply(c.id)}
                        disabled={busyId === c.id}
                        className="text-xs font-medium text-violet-600 hover:underline"
                        title="Demo helper standing in for a real Gmail reply notification"
                      >
                        Simulate reply
                      </button>
                    )}
                    {(c.status === "replied" || c.status === "meeting_booked") && (
                      <Link
                        href={`/dashboard/calendar?contactId=${c.id}`}
                        className="text-xs font-medium text-emerald-600 hover:underline"
                      >
                        Schedule chat
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              {colContacts.length === 0 && (
                <p className="rounded-lg border border-dashed border-slate-200 p-3 text-xs text-slate-400">
                  Nothing here yet.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
