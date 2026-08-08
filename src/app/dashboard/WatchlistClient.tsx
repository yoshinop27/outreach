"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/fetcher";
import { ConfirmDialog } from "@/components/ConfirmDialog";
interface WatchlistItemView {
  id: string;
  companyName: string;
  companyDomain: string | null;
  targetTitles: string[];
  location: string | null;
  seniority: string[];
  job: string | null;
  contactCount: number;
}

const emptyForm = {
  companyName: "",
  companyDomain: "",
  targetTitles: "",
  location: "",
  seniority: "",
  job: "",
};

export function WatchlistClient({ initialItems }: { initialItems: WatchlistItemView[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; companyName: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState(emptyForm);

  // router.refresh() re-runs the server component and passes fresh
  // initialItems, but useState's initializer only applies on first mount —
  // sync explicitly so contact counts update after a discovery run.
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage(null);
    try {
      const { item } = await apiFetch<{ item: any }>("/api/watchlist", {
        method: "POST",
        body: JSON.stringify({
          companyName: form.companyName,
          companyDomain: form.companyDomain || null,
          targetTitles: form.targetTitles.split(",").map((s) => s.trim()).filter(Boolean),
          location: form.location || null,
          seniority: form.seniority.split(",").map((s) => s.trim()).filter(Boolean),
          job: form.job || null,
        }),
      });
      setItems((prev) => [
        {
          id: item.id,
          companyName: item.companyName,
          companyDomain: item.companyDomain,
          targetTitles: form.targetTitles.split(",").map((s) => s.trim()).filter(Boolean),
          location: item.location,
          seniority: form.seniority.split(",").map((s) => s.trim()).filter(Boolean),
          job: item.job,
          contactCount: 0,
        },
        ...prev,
      ]);
      setForm(emptyForm);
      setShowForm(false);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to create watchlist item");
    } finally {
      setBusy(false);
    }
  }

  function startEdit(item: WatchlistItemView) {
    setEditingId(item.id);
    setEditForm({
      companyName: item.companyName,
      companyDomain: item.companyDomain ?? "",
      targetTitles: item.targetTitles.join(", "),
      location: item.location ?? "",
      seniority: item.seniority.join(", "),
      job: item.job ?? "",
    });
  }

  async function saveEdit(id: string) {
    setBusy(true);
    setMessage(null);
    try {
      const targetTitles = editForm.targetTitles.split(",").map((s) => s.trim()).filter(Boolean);
      const seniority = editForm.seniority.split(",").map((s) => s.trim()).filter(Boolean);
      const { item } = await apiFetch<{ item: any }>(`/api/watchlist/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          companyName: editForm.companyName,
          companyDomain: editForm.companyDomain || null,
          targetTitles,
          location: editForm.location || null,
          seniority,
          job: editForm.job || null,
        }),
      });
      setItems((prev) =>
        prev.map((i) =>
          i.id === id
            ? {
                ...i,
                companyName: item.companyName,
                companyDomain: item.companyDomain,
                targetTitles,
                location: item.location,
                seniority,
                job: item.job,
              }
            : i,
        ),
      );
      setEditingId(null);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to update watchlist item");
    } finally {
      setBusy(false);
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    const { id } = deleteTarget;
    setBusy(true);
    try {
      await apiFetch(`/api/watchlist/${id}`, { method: "DELETE" });
      setItems((prev) => prev.filter((i) => i.id !== id));
      setDeleteTarget(null);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Failed to delete watchlist item");
    } finally {
      setBusy(false);
    }
  }

  async function runDiscovery(id?: string) {
    setBusy(true);
    setMessage(null);
    try {
      const { summary } = await apiFetch<{ summary: any }>("/api/discovery/run", {
        method: "POST",
        body: JSON.stringify(id ? { watchlistItemId: id } : {}),
      });
      setMessage(
        `Discovered ${summary.contactsDiscovered} new contact(s).` +
          (summary.skippedNoEmail
            ? ` ${summary.skippedNoEmail} of them have no email on file yet — send manually from the Pipeline once one's found.`
            : "") +
          ` Send emails from the Pipeline when you're ready.`,
      );
      router.refresh();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Discovery run failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Watchlist</h1>
          <p className="mt-1 text-sm text-slate-500">
            Companies, roles, and locations to discover contacts for. Job is the specific role/posting you're
            referencing in outreach for that company — available as {"{{job}}"} in templates. Discovery runs
            manually here in the MVP — a real deployment would run this on a schedule per item.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => runDiscovery()}
            disabled={busy}
            className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            Run discovery for all
          </button>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {showForm ? "Cancel" : "Add company"}
          </button>
        </div>
      </div>

      {message && <div className="rounded-md bg-blue-50 px-4 py-2 text-sm text-blue-800">{message}</div>}

      {showForm && (
        <form onSubmit={handleCreate} className="grid grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-white p-5">
          <input
            required
            placeholder="Company name"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Company domain (e.g. acme.com)"
            value={form.companyDomain}
            onChange={(e) => setForm({ ...form, companyDomain: e.target.value })}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Target titles, comma-separated"
            value={form.targetTitles}
            onChange={(e) => setForm({ ...form, targetTitles: e.target.value })}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Seniority, comma-separated (optional)"
            value={form.seniority}
            onChange={(e) => setForm({ ...form, seniority: e.target.value })}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Job (optional) — e.g. Software Engineer, New Grad"
            value={form.job}
            onChange={(e) => setForm({ ...form, job: e.target.value })}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <div className="col-span-2">
            <button
              type="submit"
              disabled={busy}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </form>
      )}

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Titles</th>
              <th className="px-4 py-3">Job</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Contacts</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) =>
              editingId === item.id ? (
                <tr key={item.id} className="border-b border-slate-100 last:border-0 bg-slate-50">
                  <td className="px-4 py-3">
                    <input
                      required
                      value={editForm.companyName}
                      onChange={(e) => setEditForm({ ...editForm, companyName: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                    <input
                      placeholder="Domain"
                      value={editForm.companyDomain}
                      onChange={(e) => setEditForm({ ...editForm, companyDomain: e.target.value })}
                      className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1 text-xs"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      placeholder="Titles, comma-separated"
                      value={editForm.targetTitles}
                      onChange={(e) => setEditForm({ ...editForm, targetTitles: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                    <input
                      placeholder="Seniority, comma-separated"
                      value={editForm.seniority}
                      onChange={(e) => setEditForm({ ...editForm, seniority: e.target.value })}
                      className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1 text-xs"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      placeholder="Job"
                      value={editForm.job}
                      onChange={(e) => setEditForm({ ...editForm, job: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      value={editForm.location}
                      onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                      className="w-full rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.contactCount}</td>
                  <td className="space-x-3 px-4 py-3 text-right">
                    <button
                      onClick={() => saveEdit(item.id)}
                      disabled={busy}
                      className="text-xs font-medium text-emerald-700 hover:underline disabled:opacity-50"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-xs font-medium text-slate-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={item.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{item.companyName}</td>
                  <td className="px-4 py-3 text-slate-600">{item.targetTitles.join(", ") || "—"}</td>
                  <td className="px-4 py-3 text-slate-600">{item.job || "—"}</td>
                  <td className="px-4 py-3 text-slate-600">{item.location || "—"}</td>
                  <td className="px-4 py-3 text-slate-600">{item.contactCount}</td>
                  <td className="space-x-3 px-4 py-3 text-right">
                    <button onClick={() => runDiscovery(item.id)} className="text-xs font-medium text-slate-700 hover:underline">
                      Run discovery
                    </button>
                    <button onClick={() => startEdit(item)} className="text-xs font-medium text-slate-700 hover:underline">
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteTarget({ id: item.id, companyName: item.companyName })}
                      className="text-xs font-medium text-rose-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ),
            )}
            {items.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-400">
                  No watchlist items yet. Add a company to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {deleteTarget && (
        <ConfirmDialog
          title={`Delete ${deleteTarget.companyName} from the watchlist?`}
          description="This also removes every contact discovered for it."
          busy={busy}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
