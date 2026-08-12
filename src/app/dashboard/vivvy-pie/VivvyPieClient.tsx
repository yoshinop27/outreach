"use client";

import { useState } from "react";
import clsx from "clsx";
import { apiFetch } from "@/lib/fetcher";
import { ConfirmDialog } from "@/components/ConfirmDialog";
import {
  renderTemplate,
  SPONSOR_TEMPLATE_VARIABLES,
  SPONSOR_STATUS_LABELS,
  SPONSOR_STATUS_COLORS,
  SPONSOR_STATUSES,
  type SponsorStatus,
} from "@/lib/types";
import { SponsorChat, type AddCompanyInput } from "./SponsorChat";

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

interface ProspectView {
  id: string;
  companyName: string;
  companyEmail: string | null;
  websiteUrl: string | null;
  address: string | null;
  itemRequested: string | null;
  status: SponsorStatus;
  dateSent: string | null;
}

interface TemplateView {
  id: string;
  name: string;
  subject: string | null;
  body: string;
  isActive: boolean;
}

const SAMPLE_CONTEXT = { company: "Acme Athletics" };

const emptyProspectForm = { companyName: "", companyEmail: "", websiteUrl: "", address: "", itemRequested: "" };
const emptyTemplateForm = { name: "", subject: "", body: "" };

export function VivvyPieClient({
  initialProspects,
  initialTemplates,
}: {
  initialProspects: ProspectView[];
  initialTemplates: TemplateView[];
}) {
  const [prospects, setProspects] = useState(initialProspects);
  const [templates, setTemplates] = useState(initialTemplates);
  const [message, setMessage] = useState<string | null>(null);

  // Prospect form/edit state
  const [showProspectForm, setShowProspectForm] = useState(false);
  const [prospectForm, setProspectForm] = useState(emptyProspectForm);
  const [editingProspectId, setEditingProspectId] = useState<string | null>(null);
  const [editProspectForm, setEditProspectForm] = useState(emptyProspectForm);
  const [deleteProspectTarget, setDeleteProspectTarget] = useState<{ id: string; companyName: string } | null>(null);
  const [sendingId, setSendingId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // Template form/edit state
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [templateForm, setTemplateForm] = useState(emptyTemplateForm);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [editTemplateForm, setEditTemplateForm] = useState(emptyTemplateForm);

  async function addProspect(companyName: string, extra?: Partial<typeof emptyProspectForm>) {
    setBusy(true);
    setMessage(null);
    try {
      const { prospect } = await apiFetch<{ prospect: ProspectView }>("/api/sponsor-prospects", {
        method: "POST",
        body: JSON.stringify({
          companyName,
          companyEmail: extra?.companyEmail || null,
          websiteUrl: extra?.websiteUrl || null,
          address: extra?.address || null,
          itemRequested: extra?.itemRequested || null,
        }),
      });
      setProspects((prev) => [prospect, ...prev]);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to add company");
    } finally {
      setBusy(false);
    }
  }

  async function handleCreateProspect(e: React.FormEvent) {
    e.preventDefault();
    if (!prospectForm.companyName.trim()) return;
    await addProspect(prospectForm.companyName, prospectForm);
    setProspectForm(emptyProspectForm);
    setShowProspectForm(false);
  }

  function startEditProspect(p: ProspectView) {
    setEditingProspectId(p.id);
    setEditProspectForm({
      companyName: p.companyName,
      companyEmail: p.companyEmail ?? "",
      websiteUrl: p.websiteUrl ?? "",
      address: p.address ?? "",
      itemRequested: p.itemRequested ?? "",
    });
  }

  async function saveEditProspect(id: string) {
    setBusy(true);
    setMessage(null);
    try {
      const { prospect } = await apiFetch<{ prospect: ProspectView }>(`/api/sponsor-prospects/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          companyName: editProspectForm.companyName,
          companyEmail: editProspectForm.companyEmail || null,
          websiteUrl: editProspectForm.websiteUrl || null,
          address: editProspectForm.address || null,
          itemRequested: editProspectForm.itemRequested || null,
        }),
      });
      setProspects((prev) => prev.map((p) => (p.id === id ? prospect : p)));
      setEditingProspectId(null);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to update company");
    } finally {
      setBusy(false);
    }
  }

  async function updateStatus(id: string, status: SponsorStatus) {
    setProspects((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
    try {
      await apiFetch(`/api/sponsor-prospects/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to update status");
    }
  }

  async function confirmDeleteProspect() {
    if (!deleteProspectTarget) return;
    const { id } = deleteProspectTarget;
    setBusy(true);
    try {
      await apiFetch(`/api/sponsor-prospects/${id}`, { method: "DELETE" });
      setProspects((prev) => prev.filter((p) => p.id !== id));
      setDeleteProspectTarget(null);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to delete company");
    } finally {
      setBusy(false);
    }
  }

  async function sendToProspect(id: string) {
    setSendingId(id);
    setMessage(null);
    try {
      const { prospect } = await apiFetch<{ prospect: ProspectView }>(`/api/sponsor-prospects/${id}/send`, {
        method: "POST",
      });
      setProspects((prev) => prev.map((p) => (p.id === id ? prospect : p)));
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to send email");
    } finally {
      setSendingId(null);
    }
  }

  async function handleCreateTemplate(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const { template } = await apiFetch<{ template: TemplateView }>("/api/sponsor-templates", {
        method: "POST",
        body: JSON.stringify({
          name: templateForm.name,
          subject: templateForm.subject || null,
          body: templateForm.body,
          isActive: true,
        }),
      });
      setTemplates((prev) => [template, ...prev]);
      setTemplateForm(emptyTemplateForm);
      setShowTemplateForm(false);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to create template");
    } finally {
      setBusy(false);
    }
  }

  async function toggleTemplateActive(id: string, isActive: boolean) {
    setTemplates((prev) => prev.map((t) => (t.id === id ? { ...t, isActive } : t)));
    await apiFetch(`/api/sponsor-templates/${id}`, { method: "PATCH", body: JSON.stringify({ isActive }) });
  }

  function startEditTemplate(t: TemplateView) {
    setPreviewId(null);
    setEditingTemplateId(t.id);
    setEditTemplateForm({ name: t.name, subject: t.subject ?? "", body: t.body });
  }

  async function saveEditTemplate(id: string) {
    setBusy(true);
    try {
      const { template } = await apiFetch<{ template: TemplateView }>(`/api/sponsor-templates/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: editTemplateForm.name,
          subject: editTemplateForm.subject || null,
          body: editTemplateForm.body,
        }),
      });
      setTemplates((prev) => prev.map((t) => (t.id === id ? template : t)));
      setEditingTemplateId(null);
    } finally {
      setBusy(false);
    }
  }

  async function removeTemplate(id: string) {
    if (!confirm("Delete this template?")) return;
    await apiFetch(`/api/sponsor-templates/${id}`, { method: "DELETE" });
    setTemplates((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Vivvy Pie</h1>
        <p className="mt-1 text-sm text-slate-500">
          Find and track sponsorship prospects — search for companies, keep a pitch template, and follow up.
        </p>
      </div>

      {message && (
        <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{message}</div>
      )}

      <SponsorChat
        onAddCompany={(company: AddCompanyInput) =>
          addProspect(company.companyName, {
            companyEmail: company.companyEmail ?? "",
            websiteUrl: company.websiteUrl ?? "",
            address: company.address ?? "",
          })
        }
      />

      {/* Prospects table */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Sponsor prospects</h2>
            <p className="mt-0.5 text-sm text-slate-500">
              Add companies from chat above, or add one directly. Clicking Send emails the company's email
              address using the active template.
            </p>
          </div>
          <button
            onClick={() => setShowProspectForm((v) => !v)}
            className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            {showProspectForm ? "Cancel" : "Add company"}
          </button>
        </div>

        {showProspectForm && (
          <form onSubmit={handleCreateProspect} className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
            <input
              required
              placeholder="Company name"
              value={prospectForm.companyName}
              onChange={(e) => setProspectForm({ ...prospectForm, companyName: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Company email (where the ask is sent)"
              value={prospectForm.companyEmail}
              onChange={(e) => setProspectForm({ ...prospectForm, companyEmail: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Website"
              value={prospectForm.websiteUrl}
              onChange={(e) => setProspectForm({ ...prospectForm, websiteUrl: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Address"
              value={prospectForm.address}
              onChange={(e) => setProspectForm({ ...prospectForm, address: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Item requested"
              value={prospectForm.itemRequested}
              onChange={(e) => setProspectForm({ ...prospectForm, itemRequested: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              disabled={busy}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
            >
              Add company
            </button>
          </form>
        )}

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-2 font-medium">Company</th>
                <th className="px-4 py-2 font-medium">Email</th>
                <th className="px-4 py-2 font-medium">Address</th>
                <th className="px-4 py-2 font-medium">Item requested</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Site</th>
                <th className="px-4 py-2 font-medium">Actions</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {prospects.map((p) =>
                editingProspectId === p.id ? (
                  <tr key={p.id} className="border-b border-slate-100">
                    <td className="px-4 py-2">
                      <input
                        value={editProspectForm.companyName}
                        onChange={(e) => setEditProspectForm({ ...editProspectForm, companyName: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        value={editProspectForm.companyEmail}
                        onChange={(e) => setEditProspectForm({ ...editProspectForm, companyEmail: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        value={editProspectForm.address}
                        onChange={(e) => setEditProspectForm({ ...editProspectForm, address: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        value={editProspectForm.itemRequested}
                        onChange={(e) => setEditProspectForm({ ...editProspectForm, itemRequested: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-4 py-2 text-slate-400">{SPONSOR_STATUS_LABELS[p.status]}</td>
                    <td className="px-4 py-2">
                      <input
                        placeholder="Website"
                        value={editProspectForm.websiteUrl}
                        onChange={(e) => setEditProspectForm({ ...editProspectForm, websiteUrl: e.target.value })}
                        className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => saveEditProspect(p.id)}
                          disabled={busy}
                          className="text-xs font-medium text-slate-700 hover:underline disabled:opacity-50"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProspectId(null)}
                          className="text-xs font-medium text-slate-500 hover:underline"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ) : (
                  <tr key={p.id} className="border-b border-slate-100">
                    <td className="px-4 py-2 font-medium text-slate-900">{p.companyName}</td>
                    <td className="px-4 py-2 text-slate-600">{p.companyEmail ?? "—"}</td>
                    <td className="px-4 py-2 text-slate-600">{p.address ?? "—"}</td>
                    <td className="px-4 py-2 text-slate-600">{p.itemRequested ?? "—"}</td>
                    <td className="px-4 py-2">
                      <select
                        value={p.status}
                        disabled={busy}
                        onChange={(e) => updateStatus(p.id, e.target.value as SponsorStatus)}
                        className={clsx(
                          "cursor-pointer rounded-full border-0 px-2.5 py-0.5 text-xs font-medium disabled:opacity-50",
                          SPONSOR_STATUS_COLORS[p.status],
                        )}
                      >
                        {SPONSOR_STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {SPONSOR_STATUS_LABELS[s]}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      {p.websiteUrl ? (
                        <a
                          href={p.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-600 hover:underline"
                        >
                          Site
                        </a>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex flex-wrap items-center gap-3">
                        {p.companyEmail && (
                          <button
                            onClick={() => sendToProspect(p.id)}
                            disabled={sendingId === p.id}
                            className="text-xs font-medium text-emerald-600 hover:underline disabled:opacity-50"
                          >
                            {sendingId === p.id ? "Sending…" : "Send"}
                          </button>
                        )}
                        <button
                          onClick={() => startEditProspect(p)}
                          className="text-xs font-medium text-slate-600 hover:underline"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-right">
                      <button
                        onClick={() => setDeleteProspectTarget({ id: p.id, companyName: p.companyName })}
                        aria-label={`Delete ${p.companyName}`}
                        title="Delete company"
                        className="text-slate-400 hover:text-rose-600"
                      >
                        <TrashIcon />
                      </button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
          {prospects.length === 0 && (
            <p className="p-6 text-center text-sm text-slate-400">No companies yet — search above or add one.</p>
          )}
        </div>
      </div>

      {/* Template */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Sponsor template</h2>
            <p className="mt-0.5 text-sm text-slate-500">
              The active template is used when you click Send on a company below.
            </p>
          </div>
          <button
            onClick={() => setShowTemplateForm((v) => !v)}
            className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            {showTemplateForm ? "Cancel" : "New template"}
          </button>
        </div>

        {showTemplateForm && (
          <form onSubmit={handleCreateTemplate} className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
            <input
              required
              placeholder="Template name"
              value={templateForm.name}
              onChange={(e) => setTemplateForm({ ...templateForm, name: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Subject line"
              value={templateForm.subject}
              onChange={(e) => setTemplateForm({ ...templateForm, subject: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <textarea
              required
              rows={6}
              placeholder="Body — use {{company}}"
              value={templateForm.body}
              onChange={(e) => setTemplateForm({ ...templateForm, body: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <p className="text-xs text-slate-400">
              Available variables: {SPONSOR_TEMPLATE_VARIABLES.map((v) => `{{${v}}}`).join(", ")}
            </p>
            <button
              type="submit"
              disabled={busy}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
            >
              Save template
            </button>
          </form>
        )}

        <div className="space-y-3">
          {templates.map((t) =>
            editingTemplateId === t.id ? (
              <div key={t.id} className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
                <input
                  required
                  placeholder="Template name"
                  value={editTemplateForm.name}
                  onChange={(e) => setEditTemplateForm({ ...editTemplateForm, name: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                <input
                  placeholder="Subject line"
                  value={editTemplateForm.subject}
                  onChange={(e) => setEditTemplateForm({ ...editTemplateForm, subject: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                <textarea
                  required
                  rows={6}
                  value={editTemplateForm.body}
                  onChange={(e) => setEditTemplateForm({ ...editTemplateForm, body: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => saveEditTemplate(t.id)}
                    disabled={busy}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
                  >
                    Save changes
                  </button>
                  <button
                    onClick={() => setEditingTemplateId(null)}
                    className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-900">{t.name}</p>
                    {t.subject && <p className="mt-1 text-sm text-slate-500">Subject: {t.subject}</p>}
                  </div>
                  <label className="flex items-center gap-2 text-xs text-slate-500">
                    <input
                      type="checkbox"
                      checked={t.isActive}
                      onChange={(e) => toggleTemplateActive(t.id, e.target.checked)}
                    />
                    Active
                  </label>
                </div>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() => setPreviewId(previewId === t.id ? null : t.id)}
                    className="text-xs font-medium text-slate-700 hover:underline"
                  >
                    {previewId === t.id ? "Hide preview" : "Preview with sample data"}
                  </button>
                  <button onClick={() => startEditTemplate(t)} className="text-xs font-medium text-slate-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => removeTemplate(t.id)} className="text-xs font-medium text-rose-600 hover:underline">
                    Delete
                  </button>
                </div>
                {previewId === t.id && (
                  <div className="mt-3 whitespace-pre-wrap rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                    {t.subject && <p className="mb-2 font-medium">{renderTemplate(t.subject, SAMPLE_CONTEXT)}</p>}
                    {renderTemplate(t.body, SAMPLE_CONTEXT)}
                  </div>
                )}
              </div>
            ),
          )}
          {templates.length === 0 && (
            <p className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
              No sponsor template yet.
            </p>
          )}
        </div>
      </div>

      {deleteProspectTarget && (
        <ConfirmDialog
          title={`Delete ${deleteProspectTarget.companyName}?`}
          busy={busy}
          onConfirm={confirmDeleteProspect}
          onCancel={() => setDeleteProspectTarget(null)}
        />
      )}
    </div>
  );
}
