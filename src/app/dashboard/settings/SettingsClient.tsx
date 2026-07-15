"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";

interface SettingsData {
  email: string;
  displayName: string | null;
  dailySendCapCurrent: number;
  apolloApiKey: string | null;
  googleAccountConnected: boolean;
}

export function SettingsClient({ initial }: { initial: SettingsData }) {
  const [cap, setCap] = useState(initial.dailySendCapCurrent);
  const [apolloKey, setApolloKey] = useState(initial.apolloApiKey ?? "");
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  async function save() {
    setBusy(true);
    setSaved(false);
    try {
      await apiFetch("/api/settings", {
        method: "PATCH",
        body: JSON.stringify({ dailySendCapCurrent: cap, apolloApiKey: apolloKey || null }),
      });
      setSaved(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">
          {initial.displayName ?? initial.email} · {initial.email}
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
        <div>
          <label className="block text-sm font-medium text-slate-700">Daily send cap</label>
          <p className="mb-1.5 text-xs text-slate-400">
            Manually set for now (spec Phase 1–3). Adaptive volume based on your reply rate is a later
            phase.
          </p>
          <input
            type="number"
            min={0}
            max={500}
            value={cap}
            onChange={(e) => setCap(Number(e.target.value))}
            className="w-32 rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Apollo.io API key</label>
          <p className="mb-1.5 text-xs text-slate-400">
            Stored but not used yet — discovery is mocked in this build. Wire up a real Apollo call in{" "}
            <code className="rounded bg-slate-100 px-1">src/lib/mock-apollo.ts</code> to use it.
          </p>
          <input
            type="password"
            value={apolloKey}
            onChange={(e) => setApolloKey(e.target.value)}
            placeholder="sk_live_..."
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm font-medium text-slate-700">Google Workspace</label>
            <p className="text-xs text-slate-400">
              Gmail send uses your real Google OAuth connection. Re-auth with Google if this shows not connected.
            </p>
          </div>
          <span
            className={
              initial.googleAccountConnected
                ? "rounded-md bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700"
                : "rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700"
            }
          >
            {initial.googleAccountConnected ? "Connected" : "Not connected"}
          </span>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={save}
            disabled={busy}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            Save
          </button>
          {saved && <span className="text-xs text-emerald-600">Saved.</span>}
        </div>
      </div>
    </div>
  );
}
