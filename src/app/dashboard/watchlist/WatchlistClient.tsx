"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/fetcher";
interface WatchlistItemView {
  id: string;
  companyName: string;
  companyDomain: string | null;
  targetTitles: string[];
  location: string | null;
  seniority: string[];
  contactCount: number;
}

const emptyForm = {
  companyName: "",
  companyDomain: "",
  targetTitles: "",
  location: "",
  seniority: "",
};

export function WatchlistClient({ initialItems }: { initialItems: WatchlistItemView[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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

  async function remove(id: string) {
    if (!confirm("Delete this watchlist item and its discovered contacts?")) return;
    await apiFetch(`/api/watchlist/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((i) => i.id !== id));
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
        `Discovered ${summary.contactsDiscovered} new contact(s). Dispatched ${summary.emailsSent} email(s), queued ${summary.linkedinQueued} LinkedIn action(s) in the Action Queue.` +
          (summary.queuedForNextRun
            ? ` ${summary.queuedForNextRun} contact(s) held back by the daily or per-company cap — they'll go out on the next run.`
            : "") +
          (summary.skippedNoActiveTemplate
            ? ` ${summary.skippedNoActiveTemplate} contact(s) skipped — no active template for that channel.`
            : ""),
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
            Companies, roles, and locations to discover contacts for. Discovery runs manually here in the
            MVP — a real deployment would run this on a schedule per item.
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
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Contacts</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium text-slate-900">{item.companyName}</td>
                <td className="px-4 py-3 text-slate-600">{item.targetTitles.join(", ") || "—"}</td>
                <td className="px-4 py-3 text-slate-600">{item.location || "—"}</td>
                <td className="px-4 py-3 text-slate-600">{item.contactCount}</td>
                <td className="space-x-3 px-4 py-3 text-right">
                  <button onClick={() => runDiscovery(item.id)} className="text-xs font-medium text-slate-700 hover:underline">
                    Run discovery
                  </button>
                  <button onClick={() => remove(item.id)} className="text-xs font-medium text-rose-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-400">
                  No watchlist items yet. Add a company to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
