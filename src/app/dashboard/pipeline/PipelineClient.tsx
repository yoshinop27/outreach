"use client";

import { useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/fetcher";
import { StatusBadge } from "@/components/StatusBadge";
import { CONTACT_STATUSES, type ContactStatus } from "@/lib/types";

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

function ContactInfoModal({ contact, onClose }: { contact: ContactView; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">{contact.fullName}</p>
            <p className="text-xs text-slate-500">
              {contact.title ?? "—"} · {contact.companyName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</dt>
            <dd className="mt-0.5 text-slate-700">
              {contact.email ?? "Not found"}
              {contact.email && <span className="ml-2 text-xs text-slate-400">({contact.emailStatus})</span>}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">LinkedIn</dt>
            <dd className="mt-0.5">
              {contact.linkedinUrl ? (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline"
                >
                  View profile
                </a>
              ) : (
                <span className="text-slate-700">Not found</span>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function PipelineClient({ initialContacts }: { initialContacts: ContactView[] }) {
  const [contacts, setContacts] = useState(initialContacts);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [modalContactId, setModalContactId] = useState<string | null>(null);

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
      // Status stays "sent" — the reply shows up in the Reply Inbox for triage.
      await apiFetch(`/api/contacts/${id}/simulate-reply`, { method: "POST" });
    } finally {
      setBusyId(null);
    }
  }

  const modalContact = contacts.find((c) => c.id === modalContactId) ?? null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Pipeline</h1>
        <p className="mt-1 text-sm text-slate-500">
          Every discovered contact and where they are in the outreach funnel.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Company</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {contacts.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-900">{c.fullName}</p>
                  <p className="text-xs text-slate-500">{c.title ?? "—"}</p>
                </td>
                <td className="px-4 py-3 text-slate-700">{c.companyName}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-start gap-1.5">
                    <StatusBadge status={c.status} />
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
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setModalContactId(c.id)}
                      className="text-xs font-medium text-slate-600 hover:underline"
                    >
                      Contact info
                    </button>
                    {c.status === "sent" && (
                      <button
                        onClick={() => simulateReply(c.id)}
                        disabled={busyId === c.id}
                        className="text-xs font-medium text-violet-600 hover:underline"
                        title="Demo helper standing in for a real Gmail reply notification"
                      >
                        Simulate reply
                      </button>
                    )}
                    {(c.status === "sent" || c.status === "booked") && (
                      <Link
                        href={`/dashboard/calendar?contactId=${c.id}`}
                        className="text-xs font-medium text-emerald-600 hover:underline"
                      >
                        Schedule chat
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-xs text-slate-400">
                  Nothing here yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalContact && <ContactInfoModal contact={modalContact} onClose={() => setModalContactId(null)} />}
    </div>
  );
}
