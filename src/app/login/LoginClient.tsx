"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

interface DevUser {
  id: string;
  email: string;
  displayName: string | null;
  status: string;
}

export function LoginClient({
  hasAzureAdConfig,
  devUsers,
  errorMessage,
}: {
  hasAzureAdConfig: boolean;
  devUsers: DevUser[];
  errorMessage: string | null;
}) {
  const [selectedEmail, setSelectedEmail] = useState(devUsers[0]?.email ?? "");
  const [submitting, setSubmitting] = useState(false);

  async function handleDevLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedEmail) return;
    setSubmitting(true);
    await signIn("dev-login", { email: selectedEmail, callbackUrl: "/dashboard" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Outreach Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Invite-only. Sign in with the Microsoft account your admin invited.
          </p>
        </div>

        {errorMessage && (
          <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })}
          disabled={!hasAzureAdConfig}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Sign in with Microsoft
        </button>
        {!hasAzureAdConfig && (
          <p className="text-xs text-slate-400">
            Azure AD isn&apos;t configured yet. Set AZURE_AD_CLIENT_ID / SECRET / TENANT_ID in
            .env to enable this (see README).
          </p>
        )}

        {devUsers.length > 0 && (
          <>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
              <div className="h-px flex-1 bg-slate-200" />
              Dev login (local only)
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <form onSubmit={handleDevLogin} className="space-y-3">
              <select
                value={selectedEmail}
                onChange={(e) => setSelectedEmail(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              >
                {devUsers.map((u) => (
                  <option key={u.id} value={u.email} disabled={u.status === "disabled"}>
                    {u.displayName ?? u.email} — {u.email} ({u.status})
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                {submitting ? "Signing in…" : "Sign in as this user"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
