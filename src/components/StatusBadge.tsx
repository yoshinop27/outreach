import clsx from "clsx";
import { CONTACT_STATUS_LABELS, type ContactStatus } from "@/lib/types";

const COLORS: Record<string, string> = {
  discovered: "bg-slate-100 text-slate-700",
  sent: "bg-blue-100 text-blue-700",
  booked: "bg-emerald-100 text-emerald-700",
  ignored: "bg-slate-100 text-slate-500",
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
