"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";
import { renderTemplate, TEMPLATE_VARIABLES, type Channel } from "@/lib/types";

interface TemplateView {
  id: string;
  channel: Channel;
  name: string;
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
  sender_name: "You",
};

const emptyForm = { channel: "email" as Channel, name: "", subject: "", body: "" };

export function TemplatesClient({ initialTemplates }: { initialTemplates: TemplateView[] }) {
  const [templates, setTemplates] = useState(initialTemplates);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [previewId, setPreviewId] = useState<string | null>(null);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const { template } = await apiFetch<{ template: TemplateView }>("/api/templates", {
        method: "POST",
        body: JSON.stringify({
          channel: form.channel,
          name: form.name,
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Templates</h1>
          <p className="mt-1 text-sm text-slate-500">
            Email and LinkedIn templates with variables. Only one active template per channel is used by
            discovery dispatch at a time — toggle which one is active below.
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          {showForm ? "Cancel" : "New template"}
        </button>
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
            placeholder="Body — use {{first_name}}, {{company}}, {{title}}, {{sender_name}}, etc."
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
                </p>
                {t.subject && <p className="mt-1 text-sm text-slate-500">Subject: {t.subject}</p>}
              </div>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input type="checkbox" checked={t.isActive} onChange={(e) => toggleActive(t.id, e.target.checked)} />
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
              <button onClick={() => remove(t.id)} className="text-xs font-medium text-rose-600 hover:underline">
                Delete
              </button>
            </div>
            {previewId === t.id && (
              <div className="mt-3 whitespace-pre-wrap rounded-md bg-slate-50 p-3 text-sm text-slate-700">
                {t.subject && (
                  <p className="mb-2 font-medium">{renderTemplate(t.subject, SAMPLE_CONTEXT)}</p>
                )}
                {renderTemplate(t.body, SAMPLE_CONTEXT)}
              </div>
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
