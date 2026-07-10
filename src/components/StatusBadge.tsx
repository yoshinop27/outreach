import clsx from "clsx";
import { CONTACT_STATUS_LABELS, type ContactStatus } from "@/lib/types";

const COLORS: Record<string, string> = {
  discovered: "bg-slate-100 text-slate-700",
  queued_email: "bg-amber-100 text-amber-800",
  queued_linkedin: "bg-amber-100 text-amber-800",
  emailed: "bg-blue-100 text-blue-700",
  linkedin_manual_pending: "bg-sky-100 text-sky-700",
  replied: "bg-violet-100 text-violet-700",
  meeting_booked: "bg-emerald-100 text-emerald-700",
  closed_no_response: "bg-slate-100 text-slate-500",
  closed_declined: "bg-rose-100 text-rose-700",
};

export function StatusBadge({ status }: { status: ContactStatus }) {
  return (
    <span
      className={clsx(
        "inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium",
        COLORS[status] ?? "bg-slate-100 text-slate-700",
      )}
    >
      {CONTACT_STATUS_LABELS[status]}
    </span>
  );
}
