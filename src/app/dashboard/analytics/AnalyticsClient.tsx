"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import clsx from "clsx";
import { apiFetch } from "@/lib/fetcher";
import { CONTACT_STATUSES, CONTACT_STATUS_LABELS } from "@/lib/types";
import type { AnalyticsResult } from "@/lib/analytics";

const BLUE = "#2a78d6";
const GRIDLINE = "#e1e0d9";
const AXIS = "#c3c2b7";
const MUTED = "#898781";
const PRIMARY_INK = "#0b0b0b";

const WINDOWS = [7, 30, 90];

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export function AnalyticsClient({ initialData }: { initialData: AnalyticsResult }) {
  const [data, setData] = useState(initialData);
  const [days, setDays] = useState(initialData.windowDays);
  const [loading, setLoading] = useState(false);

  async function selectWindow(n: number) {
    setDays(n);
    setLoading(true);
    try {
      const result = await apiFetch<AnalyticsResult>(`/api/analytics?days=${n}`);
      setData(result);
    } finally {
      setLoading(false);
    }
  }

  const funnelData = CONTACT_STATUSES.map((s) => ({
    stage: CONTACT_STATUS_LABELS[s],
    count: data.funnel[CONTACT_STATUS_LABELS[s]] ?? 0,
  }));
  const replyData = data.replySeries.map((d) => ({
    date: d.date.slice(5),
    replies: d.replies,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Analytics</h1>
          <p className="mt-1 text-sm text-slate-500">Rolling window across your own outreach only.</p>
        </div>
        <div className="flex gap-1 rounded-md border border-slate-200 bg-white p-1">
          {WINDOWS.map((n) => (
            <button
              key={n}
              onClick={() => selectWindow(n)}
              className={clsx(
                "rounded px-3 py-1 text-xs font-medium",
                days === n ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100",
              )}
            >
              {n}d
            </button>
          ))}
        </div>
      </div>

      <div className={clsx("grid grid-cols-2 gap-4 md:grid-cols-4", loading && "opacity-50")}>
        <StatCard label="Contacts discovered" value={data.contactsDiscovered} />
        <StatCard label="Emails sent" value={data.emailsSent} />
        <StatCard label="LinkedIn queued" value={data.linkedinQueuedTotal} />
        <StatCard label="LinkedIn completed" value={data.linkedinCompleted} />
        <StatCard label="Reply rate" value={`${(data.replyRate * 100).toFixed(1)}%`} />
        <StatCard label="Bounce rate" value={`${(data.bounceRate * 100).toFixed(1)}%`} />
        <StatCard label="Meetings booked" value={data.meetingsBooked} />
        <StatCard label="Open rate" value="—" />
      </div>
      <p className="text-xs text-slate-400">{data.openRateNote}</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-sm font-semibold text-slate-900">Funnel</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={funnelData} margin={{ top: 4, right: 8, left: -16, bottom: 4 }}>
              <CartesianGrid vertical={false} stroke={GRIDLINE} />
              <XAxis
                dataKey="stage"
                tick={{ fill: MUTED, fontSize: 11 }}
                axisLine={{ stroke: AXIS }}
                tickLine={false}
              />
              <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={{ stroke: AXIS }} tickLine={false} allowDecimals={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: `1px solid ${GRIDLINE}` }}
                labelStyle={{ color: PRIMARY_INK }}
              />
              <Bar dataKey="count" name="Contacts" fill={BLUE} radius={[4, 4, 0, 0]} maxBarSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-sm font-semibold text-slate-900">Replies per day</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={replyData} margin={{ top: 4, right: 8, left: -16, bottom: 4 }}>
              <CartesianGrid vertical={false} stroke={GRIDLINE} />
              <XAxis
                dataKey="date"
                tick={{ fill: MUTED, fontSize: 11 }}
                axisLine={{ stroke: AXIS }}
                tickLine={false}
                interval={Math.max(0, Math.floor(replyData.length / 8))}
              />
              <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={{ stroke: AXIS }} tickLine={false} allowDecimals={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: `1px solid ${GRIDLINE}` }}
                labelStyle={{ color: PRIMARY_INK }}
              />
              <Line type="monotone" dataKey="replies" name="Replies" stroke={BLUE} strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-sm font-semibold text-slate-900">By company</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="pb-2">Company</th>
                <th className="pb-2 text-right">Contacts</th>
              </tr>
            </thead>
            <tbody>
              {data.byCompany.map((row) => (
                <tr key={row.company} className="border-t border-slate-100">
                  <td className="py-1.5 text-slate-700">{row.company}</td>
                  <td className="py-1.5 text-right text-slate-700">{row.count}</td>
                </tr>
              ))}
              {data.byCompany.length === 0 && (
                <tr>
                  <td colSpan={2} className="py-4 text-center text-slate-400">
                    No data yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-sm font-semibold text-slate-900">By template</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="pb-2">Template</th>
                <th className="pb-2 text-right">Sent</th>
                <th className="pb-2 text-right">Replied</th>
                <th className="pb-2 text-right">Reply rate</th>
              </tr>
            </thead>
            <tbody>
              {data.templateStats.map((row) => (
                <tr key={row.id} className="border-t border-slate-100">
                  <td className="py-1.5 text-slate-700">
                    {row.name} <span className="text-xs text-slate-400">({row.channel})</span>
                  </td>
                  <td className="py-1.5 text-right text-slate-700">{row.sent}</td>
                  <td className="py-1.5 text-right text-slate-700">{row.replied}</td>
                  <td className="py-1.5 text-right text-slate-700">{(row.replyRate * 100).toFixed(0)}%</td>
                </tr>
              ))}
              {data.templateStats.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-slate-400">
                    No templates yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
