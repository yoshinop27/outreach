"use client";

import { useState } from "react";
import clsx from "clsx";
import { apiFetch } from "@/lib/fetcher";
import { STATUS_COLORS } from "@/components/StatusBadge";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import { CONTACT_STATUSES, CONTACT_STATUS_LABELS, type ContactStatus } from "@/lib/types";

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

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.8 12.2a2 2 0 0 1-2 1.8H9.8a2 2 0 0 1-2-1.8L7 7h10Z"
      />
    </svg>
  );
}

export function PipelineClient({ initialContacts }: { initialContacts: ContactView[] }) {
  const [contacts, setContacts] = useState(initialContacts);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [modalContactId, setModalContactId] = useState<string | null>(null);
  const [showNoEmail, setShowNoEmail] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; fullName: string } | null>(null);

  async function updateStatus(id: string, status: ContactStatus) {
    setBusyId(id);
    try {
      await apiFetch(`/api/contacts/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
      setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
    } finally {
      setBusyId(null);
    }
  }

  async function sendEmail(id: string) {
    setBusyId(id);
    setMessage(null);
    try {
      const { contact } = await apiFetch<{ contact: { status: ContactStatus } }>(
        `/api/contacts/${id}/send-email`,
        { method: "POST" },
      );
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: contact.status, lastChannel: "email" } : c)),
      );
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to send email");
    } finally {
      setBusyId(null);
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    const { id } = deleteTarget;
    setBusyId(id);
    setMessage(null);
    try {
      await apiFetch(`/api/contacts/${id}`, { method: "DELETE" });
      setContacts((prev) => prev.filter((c) => c.id !== id));
      setDeleteTarget(null);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to delete contact");
    } finally {
      setBusyId(null);
    }
  }

  const modalContact = contacts.find((c) => c.id === modalContactId) ?? null;
  const hiddenCount = contacts.filter((c) => !c.email).length;
  const visibleContacts = contacts.filter((c) => showNoEmail || c.email);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Pipeline</h1>
          <p className="mt-1 text-sm text-slate-500">
            Every discovered contact and where they are in the outreach funnel.
          </p>
        </div>
        <button
          onClick={() => setShowNoEmail((v) => !v)}
          className="whitespace-nowrap rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          {showNoEmail ? "Hide contacts without email" : `Show contacts without email${hiddenCount ? ` (${hiddenCount})` : ""}`}
        </button>
      </div>

      {message && <div className="rounded-md bg-rose-50 px-4 py-2 text-sm text-rose-800">{message}</div>}

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Name</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Company</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Actions</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visibleContacts.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-900">{c.fullName}</p>
                  <p className="text-xs text-slate-500">{c.title ?? "—"}</p>
                </td>
                <td className="px-4 py-3 text-slate-700">{c.companyName}</td>
                <td className="px-4 py-3">
                  <select
                    value={c.status}
                    disabled={busyId === c.id}
                    onChange={(e) => updateStatus(c.id, e.target.value as ContactStatus)}
                    className={clsx(
                      "cursor-pointer rounded-full border-0 px-2.5 py-0.5 text-xs font-medium disabled:opacity-50",
                      STATUS_COLORS[c.status] ?? "bg-slate-100 text-slate-700",
                    )}
                  >
                    {CONTACT_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {CONTACT_STATUS_LABELS[s]}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setModalContactId(c.id)}
                      className="text-xs font-medium text-slate-600 hover:underline"
                    >
                      Contact info
                    </button>
                    {c.status === "discovered" && c.email && (
                      <button
                        onClick={() => sendEmail(c.id)}
                        disabled={busyId === c.id}
                        className="text-xs font-medium text-emerald-600 hover:underline disabled:opacity-50"
                      >
                        Send email
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => setDeleteTarget({ id: c.id, fullName: c.fullName })}
                    disabled={busyId === c.id}
                    aria-label={`Delete ${c.fullName}`}
                    title="Delete contact"
                    className="text-slate-400 hover:text-rose-600 disabled:opacity-40"
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
            {visibleContacts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-xs text-slate-400">
                  {contacts.length === 0
                    ? "Nothing here yet."
                    : "No contacts with an email on file. Toggle the filter above to see the rest."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {modalContact && <ContactInfoModal contact={modalContact} onClose={() => setModalContactId(null)} />}

      {deleteTarget && (
        <ConfirmDialog
          title={`Delete ${deleteTarget.fullName} from the pipeline?`}
          description="This can't be undone."
          busy={busyId === deleteTarget.id}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
