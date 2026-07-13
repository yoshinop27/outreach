"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/fetcher";
import { COFFEE_CHAT_OUTCOMES } from "@/lib/types";

interface ChatView {
  id: string;
  scheduledAt: string;
  durationMinutes: number;
  notes: string | null;
  outcome: string | null;
  contactName: string;
  companyName: string;
}

interface EligibleContact {
  id: string;
  fullName: string;
  companyName: string;
}

export function CalendarClient({
  initialChats,
  eligibleContacts,
  preselectedContactId,
}: {
  initialChats: ChatView[];
  eligibleContacts: EligibleContact[];
  preselectedContactId: string | null;
}) {
  const router = useRouter();
  const [chats, setChats] = useState(initialChats);
  const [contactId, setContactId] = useState(preselectedContactId ?? eligibleContacts[0]?.id ?? "");
  const [scheduledAt, setScheduledAt] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);

  const now = new Date();
  const upcoming = chats.filter((c) => new Date(c.scheduledAt) >= now);
  const past = chats.filter((c) => new Date(c.scheduledAt) < now);

  async function handleSchedule(e: React.FormEvent) {
    e.preventDefault();
    if (!contactId || !scheduledAt) return;
    setBusy(true);
    try {
      const { coffeeChat } = await apiFetch<{ coffeeChat: any }>("/api/coffee-chats", {
        method: "POST",
        body: JSON.stringify({ contactId, scheduledAt, durationMinutes, notes: notes || null }),
      });
      const contact = eligibleContacts.find((c) => c.id === contactId);
      setChats((prev) =>
        [
          ...prev,
          {
            id: coffeeChat.id,
            scheduledAt: coffeeChat.scheduledAt,
            durationMinutes: coffeeChat.durationMinutes,
            notes: coffeeChat.notes,
            outcome: coffeeChat.outcome,
            contactName: contact?.fullName ?? "Contact",
            companyName: contact?.companyName ?? "",
          },
        ].sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime()),
      );
      setScheduledAt("");
      setNotes("");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function setOutcome(id: string, outcome: string) {
    setChats((prev) => prev.map((c) => (c.id === id ? { ...c, outcome } : c)));
    await apiFetch(`/api/coffee-chats/${id}`, { method: "PATCH", body: JSON.stringify({ outcome }) });
  }

  async function cancelChat(id: string) {
    if (!confirm("Cancel this coffee chat?")) return;
    await apiFetch(`/api/coffee-chats/${id}`, { method: "DELETE" });
    setChats((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Calendar</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manual scheduling — you pick the time, no availability matching. In a real deployment this also
          creates a Google Calendar event; here it's simulated.
        </p>
      </div>

      <form onSubmit={handleSchedule} className="grid grid-cols-2 gap-3 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-4">
        <select
          value={contactId}
          onChange={(e) => setContactId(e.target.value)}
          className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm md:col-span-1"
        >
          {eligibleContacts.length === 0 && <option value="">No eligible contacts yet</option>}
          {eligibleContacts.map((c) => (
            <option key={c.id} value={c.id}>
              {c.fullName} — {c.companyName}
            </option>
          ))}
        </select>
        <input
          required
          type="datetime-local"
          value={scheduledAt}
          onChange={(e) => setScheduledAt(e.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          type="number"
          min={15}
          step={15}
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(Number(e.target.value))}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
        <div className="col-span-2 md:col-span-4">
          <button
            type="submit"
            disabled={busy || !contactId}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
          >
            Schedule chat
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-900">Upcoming</h2>
          <div className="space-y-2">
            {upcoming.map((c) => (
              <ChatRow key={c.id} chat={c} onOutcome={setOutcome} onCancel={cancelChat} />
            ))}
            {upcoming.length === 0 && <p className="text-sm text-slate-400">No upcoming chats.</p>}
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-900">Past</h2>
          <div className="space-y-2">
            {past.map((c) => (
              <ChatRow key={c.id} chat={c} onOutcome={setOutcome} onCancel={cancelChat} />
            ))}
            {past.length === 0 && <p className="text-sm text-slate-400">No past chats.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatRow({
  chat,
  onOutcome,
  onCancel,
}: {
  chat: ChatView;
  onOutcome: (id: string, outcome: string) => void;
  onCancel: (id: string) => void;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-sm font-medium text-slate-900">
        {chat.contactName} <span className="font-normal text-slate-500">· {chat.companyName}</span>
      </p>
      <p className="text-xs text-slate-500">
        {new Date(chat.scheduledAt).toLocaleString()} · {chat.durationMinutes} min
      </p>
      {chat.notes && <p className="mt-1 text-xs text-slate-500">{chat.notes}</p>}
      <div className="mt-2 flex items-center gap-2">
        <select
          value={chat.outcome ?? ""}
          onChange={(e) => onOutcome(chat.id, e.target.value)}
          className="rounded-md border border-slate-300 px-2 py-1 text-xs"
        >
          <option value="">No outcome yet</option>
          {COFFEE_CHAT_OUTCOMES.map((o) => (
            <option key={o} value={o}>
              {o.replace("_", " ")}
            </option>
          ))}
        </select>
        <button onClick={() => onCancel(chat.id)} className="text-xs font-medium text-rose-600 hover:underline">
          Cancel
        </button>
      </div>
    </div>
  );
}
