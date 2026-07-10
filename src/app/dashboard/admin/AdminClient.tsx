"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";

interface UserView {
  id: string;
  email: string;
  displayName: string | null;
  role: "user" | "admin";
  status: "active" | "disabled" | "invited";
  dailySendCapCurrent: number;
  watchlistCount: number;
  lastLoginAt: string | null;
}

export function AdminClient({ initialUsers, currentUserId }: { initialUsers: UserView[]; currentUserId: string }) {
  const [users, setUsers] = useState(initialUsers);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function invite(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const { user } = await apiFetch<{ user: any }>("/api/admin/users", {
        method: "POST",
        body: JSON.stringify({ email, displayName: displayName || null, role }),
      });
      setUsers((prev) => [
        ...prev,
        {
          id: user.id,
          email: user.email,
          displayName: user.displayName,
          role: user.role,
          status: user.status,
          dailySendCapCurrent: user.dailySendCapCurrent,
          watchlistCount: 0,
          lastLoginAt: null,
        },
      ]);
      setEmail("");
      setDisplayName("");
      setRole("user");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to invite user");
    } finally {
      setBusy(false);
    }
  }

  async function setStatus(id: string, status: UserView["status"]) {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
    await apiFetch(`/api/admin/users/${id}`, { method: "PATCH", body: JSON.stringify({ status }) });
  }

  async function setCap(id: string, dailySendCapCurrent: number) {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, dailySendCapCurrent } : u)));
    await apiFetch(`/api/admin/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ dailySendCapCurrent }),
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Admin</h1>
        <p className="mt-1 text-sm text-slate-500">
          Invite-only account management. You can see account metadata and activity level, not another
          user&apos;s message content (spec Section 8).
        </p>
      </div>

      <form onSubmit={invite} className="flex flex-wrap items-end gap-3 rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <label className="block text-xs font-medium text-slate-500">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500">Display name</label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="mt-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "user" | "admin")}
            className="mt-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={busy}
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
        >
          Invite
        </button>
        {error && <span className="text-sm text-rose-600">{error}</span>}
      </form>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Watchlist items</th>
              <th className="px-4 py-3">Daily cap</th>
              <th className="px-4 py-3">Last login</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-900">{u.displayName ?? u.email}</p>
                  <p className="text-xs text-slate-500">{u.email}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">{u.role}</td>
                <td className="px-4 py-3 text-slate-600">{u.status}</td>
                <td className="px-4 py-3 text-slate-600">{u.watchlistCount}</td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    min={0}
                    max={500}
                    value={u.dailySendCapCurrent}
                    onChange={(e) => setCap(u.id, Number(e.target.value))}
                    className="w-20 rounded-md border border-slate-300 px-2 py-1 text-sm"
                  />
                </td>
                <td className="px-4 py-3 text-xs text-slate-500">
                  {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleDateString() : "Never"}
                </td>
                <td className="px-4 py-3 text-right">
                  {u.id === currentUserId ? (
                    <span className="text-xs text-slate-400">You</span>
                  ) : u.status === "disabled" ? (
                    <button
                      onClick={() => setStatus(u.id, "active")}
                      className="text-xs font-medium text-emerald-600 hover:underline"
                    >
                      Re-enable
                    </button>
                  ) : (
                    <button
                      onClick={() => setStatus(u.id, "disabled")}
                      className="text-xs font-medium text-rose-600 hover:underline"
                    >
                      Disable
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
