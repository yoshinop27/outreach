"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import clsx from "clsx";
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

interface GoogleEventView {
  id: string;
  summary: string;
  start: string;
  end: string;
  htmlLink: string | null;
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
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(() => startOfDay(new Date()));
  const [googleEvents, setGoogleEvents] = useState<GoogleEventView[]>([]);
  const [googleEventsError, setGoogleEventsError] = useState<string | null>(null);
  const [loadingGoogleEvents, setLoadingGoogleEvents] = useState(false);

  const upcoming = useMemo(
    () => chats.filter((c) => new Date(c.scheduledAt) >= new Date()),
    [chats],
  );

  const upcomingGoogleEvents = useMemo(
    () => googleEvents.filter((e) => new Date(e.end) >= new Date()),
    [googleEvents],
  );

  const chatsByDay = useMemo(() => {
    const map = new Map<string, ChatView[]>();
    for (const c of chats) {
      const key = format(new Date(c.scheduledAt), "yyyy-MM-dd");
      map.set(key, [...(map.get(key) ?? []), c]);
    }
    return map;
  }, [chats]);

  const googleEventsByDay = useMemo(() => {
    const map = new Map<string, GoogleEventView[]>();
    for (const e of googleEvents) {
      const key = format(new Date(e.start), "yyyy-MM-dd");
      map.set(key, [...(map.get(key) ?? []), e]);
    }
    return map;
  }, [googleEvents]);

  const gridDays = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(startOfMonth(viewMonth)),
        end: endOfWeek(endOfMonth(viewMonth)),
      }),
    [viewMonth],
  );

  const weekDays = useMemo(
    () => eachDayOfInterval({ start: startOfWeek(selectedDate), end: endOfWeek(selectedDate) }),
    [selectedDate],
  );

  const visibleRange = useMemo(
    () =>
      viewMode === "month"
        ? { start: startOfWeek(startOfMonth(viewMonth)), end: endOfWeek(endOfMonth(viewMonth)) }
        : { start: startOfWeek(selectedDate), end: endOfWeek(selectedDate) },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewMode, viewMonth.getTime(), selectedDate.getTime()],
  );

  // Fetch real Google Calendar events for whichever range is visible (month
  // grid or week grid) — separate from the app's own CoffeeChat records.
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoadingGoogleEvents(true);
      setGoogleEventsError(null);
      try {
        const { events } = await apiFetch<{ events: GoogleEventView[] }>(
          `/api/calendar/events?start=${encodeURIComponent(visibleRange.start.toISOString())}&end=${encodeURIComponent(visibleRange.end.toISOString())}`,
        );
        if (!cancelled) setGoogleEvents(events);
      } catch (err) {
        if (!cancelled) {
          setGoogleEvents([]);
          setGoogleEventsError(err instanceof Error ? err.message : "Couldn't load Google Calendar events.");
        }
      } finally {
        if (!cancelled) setLoadingGoogleEvents(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleRange.start.getTime(), visibleRange.end.getTime()]);

  const selectedDayChats = chatsByDay.get(format(selectedDate, "yyyy-MM-dd")) ?? [];
  const selectedDayGoogleEvents = googleEventsByDay.get(format(selectedDate, "yyyy-MM-dd")) ?? [];

  function jumpToToday() {
    const today = startOfDay(new Date());
    setViewMonth(startOfMonth(today));
    setSelectedDate(today);
  }

  function goToPrevious() {
    if (viewMode === "month") setViewMonth((m) => subMonths(m, 1));
    else setSelectedDate((d) => addDays(d, -7));
  }

  function goToNext() {
    if (viewMode === "month") setViewMonth((m) => addMonths(m, 1));
    else setSelectedDate((d) => addDays(d, 7));
  }

  function switchMode(mode: "month" | "week") {
    setViewMode(mode);
    if (mode === "month") setViewMonth(startOfMonth(selectedDate));
  }

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
      const newDate = new Date(scheduledAt);
      setViewMonth(startOfMonth(newDate));
      setSelectedDate(startOfDay(newDate));
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
          Manual scheduling — you pick the time, no availability matching. Scheduling a chat creates a real
          event on your Google Calendar; your existing Google Calendar events show up here too.
        </p>
      </div>

      {googleEventsError && (
        <div className="flex items-center justify-between gap-3 rounded-md bg-amber-50 px-4 py-2 text-sm text-amber-800">
          <span>{googleEventsError}</span>
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard/calendar" })}
            className="whitespace-nowrap rounded-md border border-amber-300 px-3 py-1 text-xs font-medium text-amber-900 hover:bg-amber-100"
          >
            Reconnect Google
          </button>
        </div>
      )}

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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              {viewMode === "month"
                ? format(viewMonth, "MMMM yyyy")
                : `${format(weekDays[0], "MMM d")} – ${format(weekDays[6], "MMM d, yyyy")}`}
              {loadingGoogleEvents && <span className="ml-2 text-xs font-normal text-slate-400">Loading…</span>}
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex rounded-md border border-slate-300 p-0.5">
                <button
                  onClick={() => switchMode("month")}
                  className={clsx(
                    "rounded px-2 py-1 text-xs font-medium",
                    viewMode === "month" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50",
                  )}
                >
                  Month
                </button>
                <button
                  onClick={() => switchMode("week")}
                  className={clsx(
                    "rounded px-2 py-1 text-xs font-medium",
                    viewMode === "week" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50",
                  )}
                >
                  Week
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={goToPrevious}
                  className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50"
                  aria-label={viewMode === "month" ? "Previous month" : "Previous week"}
                >
                  ‹
                </button>
                <button
                  onClick={jumpToToday}
                  className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50"
                >
                  Today
                </button>
                <button
                  onClick={goToNext}
                  className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-600 hover:bg-slate-50"
                  aria-label={viewMode === "month" ? "Next month" : "Next week"}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {viewMode === "week" && (
            <WeekGrid
              weekDays={weekDays}
              chatsByDay={chatsByDay}
              googleEventsByDay={googleEventsByDay}
              selectedDate={selectedDate}
              onSelectDay={setSelectedDate}
            />
          )}

          {viewMode === "month" && (
          <>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium uppercase tracking-wide text-slate-400">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="py-1">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {gridDays.map((day) => {
              const key = format(day, "yyyy-MM-dd");
              const dayChats = chatsByDay.get(key) ?? [];
              const dayGoogleEvents = googleEventsByDay.get(key) ?? [];
              const totalCount = dayChats.length + dayGoogleEvents.length;
              const inMonth = isSameMonth(day, viewMonth);
              const selected = isSameDay(day, selectedDate);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDate(day)}
                  className={clsx(
                    "min-h-[84px] rounded-md border p-1.5 text-left align-top transition",
                    inMonth ? "bg-white" : "bg-slate-50",
                    selected ? "border-slate-900 ring-1 ring-slate-900" : "border-slate-200 hover:border-slate-300",
                  )}
                >
                  <span
                    className={clsx(
                      "inline-flex h-5 w-5 items-center justify-center rounded-full text-xs",
                      isToday(day) ? "bg-slate-900 font-medium text-white" : inMonth ? "text-slate-700" : "text-slate-300",
                    )}
                  >
                    {format(day, "d")}
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {dayChats.slice(0, 2).map((c) => (
                      <div key={c.id} className="truncate rounded bg-blue-50 px-1 py-0.5 text-[10px] text-blue-700">
                        {c.contactName}
                      </div>
                    ))}
                    {dayGoogleEvents.slice(0, Math.max(0, 2 - dayChats.length)).map((e) => (
                      <div key={e.id} className="truncate rounded bg-amber-50 px-1 py-0.5 text-[10px] text-amber-800">
                        {e.summary}
                      </div>
                    ))}
                    {totalCount > 2 && <div className="px-1 text-[10px] text-slate-400">+{totalCount - 2} more</div>}
                  </div>
                </button>
              );
            })}
          </div>
          </>
          )}

          <div className="mt-4 border-t border-slate-100 pt-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">{format(selectedDate, "EEEE, MMMM d")}</h3>
            <div className="space-y-2">
              {selectedDayChats.map((c) => (
                <ChatRow key={c.id} chat={c} onOutcome={setOutcome} onCancel={cancelChat} />
              ))}
              {selectedDayGoogleEvents.map((e) => (
                <GoogleEventRow key={e.id} event={e} />
              ))}
              {selectedDayChats.length === 0 && selectedDayGoogleEvents.length === 0 && (
                <p className="text-sm text-slate-400">Nothing on this day.</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Upcoming</h2>
            <div className="space-y-2">
              {upcoming.map((c) => (
                <ChatRow key={c.id} chat={c} onOutcome={setOutcome} onCancel={cancelChat} />
              ))}
              {upcoming.length === 0 && <p className="text-sm text-slate-400">No upcoming chats.</p>}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Google Calendar</h2>
            <div className="space-y-2">
              {upcomingGoogleEvents.map((e) => (
                <GoogleEventRow key={e.id} event={e} />
              ))}
              {upcomingGoogleEvents.length === 0 && !googleEventsError && (
                <p className="text-sm text-slate-400">No upcoming events found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const WEEK_HOUR_START = 7;
const WEEK_HOUR_END = 21;
const WEEK_ROW_HEIGHT_PX = 48;
const WEEK_GRID_HEIGHT_PX = (WEEK_HOUR_END - WEEK_HOUR_START) * WEEK_ROW_HEIGHT_PX;

function minutesFromGridStart(date: Date): number {
  return (date.getHours() - WEEK_HOUR_START) * 60 + date.getMinutes();
}

function WeekGrid({
  weekDays,
  chatsByDay,
  googleEventsByDay,
  selectedDate,
  onSelectDay,
}: {
  weekDays: Date[];
  chatsByDay: Map<string, ChatView[]>;
  googleEventsByDay: Map<string, GoogleEventView[]>;
  selectedDate: Date;
  onSelectDay: (day: Date) => void;
}) {
  const hourMarks = Array.from({ length: WEEK_HOUR_END - WEEK_HOUR_START + 1 }, (_, i) => WEEK_HOUR_START + i);

  return (
    <div className="mb-2 grid grid-cols-[44px_repeat(7,1fr)] gap-1">
      <div />
      {weekDays.map((day) => (
        <button
          key={day.toISOString()}
          type="button"
          onClick={() => onSelectDay(day)}
          className={clsx(
            "flex flex-col items-center rounded-md py-1 text-xs",
            isSameDay(day, selectedDate) && "bg-slate-100",
          )}
        >
          <span className="text-slate-400 uppercase">{format(day, "EEE")}</span>
          <span
            className={clsx(
              "mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full font-medium",
              isToday(day) ? "bg-slate-900 text-white" : "text-slate-700",
            )}
          >
            {format(day, "d")}
          </span>
        </button>
      ))}

      <div className="relative" style={{ height: WEEK_GRID_HEIGHT_PX }}>
        {hourMarks.map((h) => (
          <div
            key={h}
            className="absolute right-1 -translate-y-1/2 text-[10px] text-slate-400"
            style={{ top: (h - WEEK_HOUR_START) * WEEK_ROW_HEIGHT_PX }}
          >
            {format(new Date(2000, 0, 1, h), "h a")}
          </div>
        ))}
      </div>

      {weekDays.map((day) => {
        const key = format(day, "yyyy-MM-dd");
        const dayChats = chatsByDay.get(key) ?? [];
        const dayGoogleEvents = googleEventsByDay.get(key) ?? [];
        return (
          <div
            key={key}
            className="relative rounded-md border border-slate-100"
            style={{ height: WEEK_GRID_HEIGHT_PX }}
          >
            {hourMarks.map((h) => (
              <div
                key={h}
                className="absolute left-0 right-0 border-t border-slate-100"
                style={{ top: (h - WEEK_HOUR_START) * WEEK_ROW_HEIGHT_PX }}
              />
            ))}
            {dayChats.map((c) => {
              const start = new Date(c.scheduledAt);
              const top = Math.max(0, (minutesFromGridStart(start) / 60) * WEEK_ROW_HEIGHT_PX);
              const height = Math.max(18, (c.durationMinutes / 60) * WEEK_ROW_HEIGHT_PX);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => onSelectDay(day)}
                  className="absolute left-0.5 right-0.5 truncate rounded bg-blue-100 px-1 text-left text-[10px] text-blue-800 hover:bg-blue-200"
                  style={{ top, height }}
                  title={`${c.contactName} · ${format(start, "h:mm a")}`}
                >
                  {c.contactName}
                </button>
              );
            })}
            {dayGoogleEvents.map((e) => {
              const start = new Date(e.start);
              const end = new Date(e.end);
              const top = Math.max(0, (minutesFromGridStart(start) / 60) * WEEK_ROW_HEIGHT_PX);
              const height = Math.max(18, ((end.getTime() - start.getTime()) / 60000 / 60) * WEEK_ROW_HEIGHT_PX);
              return (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => onSelectDay(day)}
                  className="absolute left-0.5 right-0.5 truncate rounded bg-amber-100 px-1 text-left text-[10px] text-amber-900 hover:bg-amber-200"
                  style={{ top, height }}
                  title={`${e.summary} · ${format(start, "h:mm a")}`}
                >
                  {e.summary}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function GoogleEventRow({ event }: { event: GoogleEventView }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-sm font-medium text-slate-900">{event.summary}</p>
      <p className="text-xs text-slate-500">
        {new Date(event.start).toLocaleString()} – {new Date(event.end).toLocaleTimeString()}
      </p>
      {event.htmlLink && (
        <a
          href={event.htmlLink}
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block text-xs font-medium text-sky-600 hover:underline"
        >
          Open in Google Calendar ↗
        </a>
      )}
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
