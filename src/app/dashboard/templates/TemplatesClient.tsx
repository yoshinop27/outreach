"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";
import { renderTemplate, TEMPLATE_VARIABLES, type Channel } from "@/lib/types";

interface TemplateView {
  id: string;
  channel: Channel;
  name: string;
  companyName: string | null;
  subject: string | null;
  body: string;
  isActive: boolean;
}

const SAMPLE_CONTEXT = {
  first_name: "Ava",
  last_name: "Chen",
  full_name: "Ava Chen",
  title: "Software Engineer",
  company: "Acme Corp",
  job: "Software Engineer, New Grad",
  sender_name: "You",
};

const emptyForm = { channel: "email" as Channel, name: "", companyName: "", subject: "", body: "" };

const MAX_RESUME_BYTES = 8 * 1024 * 1024;

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // dataURL looks like "data:application/pdf;base64,JVBERi0x..." — only
      // the part after the comma is the base64 payload the API expects.
      const result = reader.result as string;
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function TemplatesClient({
  initialTemplates,
  initialResumeName,
}: {
  initialTemplates: TemplateView[];
  initialResumeName: string | null;
}) {
  const [templates, setTemplates] = useState(initialTemplates);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ name: "", companyName: "", subject: "", body: "" });
  const [resumeName, setResumeName] = useState(initialResumeName);
  const [resumeBusy, setResumeBusy] = useState(false);
  const [resumeError, setResumeError] = useState<string | null>(null);

  async function uploadResume(file: File) {
    setResumeError(null);
    if (file.size > MAX_RESUME_BYTES) {
      setResumeError("Resume is too large (8MB max).");
      return;
    }
    setResumeBusy(true);
    try {
      await apiFetch("/api/resume", {
        method: "PATCH",
        body: JSON.stringify({
          resumeName: file.name,
          resumeMimeType: file.type || "application/octet-stream",
          resumeData: await readFileAsBase64(file),
        }),
      });
      setResumeName(file.name);
    } finally {
      setResumeBusy(false);
    }
  }

  async function removeResume() {
    setResumeBusy(true);
    try {
      await apiFetch("/api/resume", { method: "PATCH", body: JSON.stringify({ removeResume: true }) });
      setResumeName(null);
    } finally {
      setResumeBusy(false);
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const { template } = await apiFetch<{ template: TemplateView }>("/api/templates", {
        method: "POST",
        body: JSON.stringify({
          channel: form.channel,
          name: form.name,
          companyName: form.companyName || null,
          subject: form.channel === "email" ? form.subject : null,
          body: form.body,
          isActive: true,
        }),
      });
      setTemplates((prev) => [template, ...prev]);
      setForm(emptyForm);
      setShowForm(false);
    } finally {
      setBusy(false);
    }
  }

  async function toggleActive(id: string, isActive: boolean) {
    setTemplates((prev) => prev.map((t) => (t.id === id ? { ...t, isActive } : t)));
    await apiFetch(`/api/templates/${id}`, { method: "PATCH", body: JSON.stringify({ isActive }) });
  }

  async function remove(id: string) {
    if (!confirm("Delete this template?")) return;
    await apiFetch(`/api/templates/${id}`, { method: "DELETE" });
    setTemplates((prev) => prev.filter((t) => t.id !== id));
  }

  function startEdit(t: TemplateView) {
    setPreviewId(null);
    setEditingId(t.id);
    setEditForm({ name: t.name, companyName: t.companyName ?? "", subject: t.subject ?? "", body: t.body });
  }

  async function saveEdit(id: string, channel: Channel) {
    setBusy(true);
    try {
      const { template } = await apiFetch<{ template: TemplateView }>(`/api/templates/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: editForm.name,
          companyName: editForm.companyName || null,
          subject: channel === "email" ? editForm.subject : null,
          body: editForm.body,
        }),
      });
      setTemplates((prev) => prev.map((t) => (t.id === id ? template : t)));
      setEditingId(null);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Templates</h1>
          <p className="mt-1 text-sm text-slate-500">
            Email and LinkedIn templates with variables. When sending to a contact, the active template whose
            company matches theirs is used; otherwise the active template with no company set is the default.
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          {showForm ? "Cancel" : "New template"}
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <label className="block text-sm font-medium text-slate-700">Resume</label>
        <p className="mb-1.5 text-xs text-slate-400">
          One resume for your account — attached automatically to every outreach email, regardless of which
          template sends it.
        </p>
        {resumeName ? (
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-700">📎 {resumeName}</span>
            <label className="cursor-pointer font-medium text-slate-700 hover:underline">
              Replace
              <input
                type="file"
                disabled={resumeBusy}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadResume(file);
                  e.target.value = "";
                }}
              />
            </label>
            <button
              onClick={removeResume}
              disabled={resumeBusy}
              className="font-medium text-rose-600 hover:underline disabled:opacity-50"
            >
              Remove
            </button>
          </div>
        ) : (
          <input
            type="file"
            disabled={resumeBusy}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadResume(file);
            }}
            className="text-sm text-slate-600"
          />
        )}
        {resumeError && <p className="mt-1 text-xs text-rose-600">{resumeError}</p>}
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex gap-3">
            <select
              value={form.channel}
              onChange={(e) => setForm({ ...form, channel: e.target.value as Channel })}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="email">Email</option>
              <option value="linkedin">LinkedIn</option>
            </select>
            <input
              required
              placeholder="Template name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <input
            placeholder="Company (optional) — leave blank for the default template"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          {form.channel === "email" && (
            <input
              placeholder="Subject line"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          )}
          <textarea
            required
            rows={6}
            placeholder="Body — use {{first_name}}, {{company}}, {{title}}, {{job}}, {{sender_name}}, etc."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <p className="text-xs text-slate-400">
            Available variables: {TEMPLATE_VARIABLES.map((v) => `{{${v}}}`).join(", ")}
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
        {templates.map((t) => (
          <div key={t.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-slate-900">
                  {t.name}{" "}
                  <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">
                    {t.channel}
                  </span>
                  {t.companyName ? (
                    <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-normal text-blue-700">
                      {t.companyName}
                    </span>
                  ) : (
                    <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">
                      default
                    </span>
                  )}
                </p>
                {t.subject && editingId !== t.id && <p className="mt-1 text-sm text-slate-500">Subject: {t.subject}</p>}
              </div>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" checked={t.isActive} onChange={(e) => toggleActive(t.id, e.target.checked)} />
                Active
              </label>
            </div>
            {editingId === t.id ? (
              <div className="mt-3 space-y-3">
                <input
                  required
                  placeholder="Template name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                <input
                  placeholder="Company (optional) — leave blank for the default template"
                  value={editForm.companyName}
                  onChange={(e) => setEditForm({ ...editForm, companyName: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                {t.channel === "email" && (
                  <input
                    placeholder="Subject line"
                    value={editForm.subject}
                    onChange={(e) => setEditForm({ ...editForm, subject: e.target.value })}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                  />
                )}
                <textarea
                  required
                  rows={6}
                  value={editForm.body}
                  onChange={(e) => setEditForm({ ...editForm, body: e.target.value })}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                <p className="text-xs text-slate-400">
                  Available variables: {TEMPLATE_VARIABLES.map((v) => `{{${v}}}`).join(", ")}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => saveEdit(t.id, t.channel)}
                    disabled={busy}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-3 flex gap-3">
                  <button onClick={() => startEdit(t)} className="text-xs font-medium text-slate-700 hover:underline">
                    Edit
                  </button>
                  <button
                    onClick={() => setPreviewId(previewId === t.id ? null : t.id)}
                    className="text-xs font-medium text-slate-700 hover:underline"
                  >
                    {previewId === t.id ? "Hide preview" : "Preview with sample data"}
                  </button>
                  <button onClick={() => remove(t.id)} className="text-xs font-medium text-rose-600 hover:underline">
                    Delete
                  </button>
                </div>
                {previewId === t.id && (
                  <div className="mt-3 whitespace-pre-wrap rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                    {t.subject && <p className="mb-2 font-medium">{renderTemplate(t.subject, SAMPLE_CONTEXT)}</p>}
                    {renderTemplate(t.body, SAMPLE_CONTEXT)}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        {templates.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-400">
            No templates yet.
          </p>
        )}
      </div>
    </div>
  );
}
