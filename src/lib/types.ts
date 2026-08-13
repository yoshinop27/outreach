// Central source of truth for the enum-like string values stored in SQLite
// columns (see prisma/schema.prisma header comment) and for the JSON-encoded
// array columns.

export const USER_ROLES = ["user", "admin"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const USER_STATUSES = ["active", "disabled", "invited"] as const;
export type UserStatus = (typeof USER_STATUSES)[number];

export const EMAIL_STATUSES = ["verified", "guessed", "not_found"] as const;
export type EmailStatus = (typeof EMAIL_STATUSES)[number];

export const CHANNELS = ["email", "linkedin"] as const;
export type Channel = (typeof CHANNELS)[number];

export const CONTACT_STATUSES = ["discovered", "sent", "booked", "ignored"] as const;
export type ContactStatus = (typeof CONTACT_STATUSES)[number];

export const COFFEE_CHAT_OUTCOMES = [
  "completed",
  "no_show",
  "rescheduled",
  "cancelled",
] as const;
export type CoffeeChatOutcome = (typeof COFFEE_CHAT_OUTCOMES)[number];

export const CONTACT_STATUS_LABELS: Record<ContactStatus, string> = {
  discovered: "Discovered",
  sent: "Sent",
  booked: "Booked",
  ignored: "Ignored",
};

export const SPONSOR_STATUSES = ["not_contacted", "sent", "follow_up", "confirmed", "declined"] as const;
export type SponsorStatus = (typeof SPONSOR_STATUSES)[number];

export const SPONSOR_STATUS_LABELS: Record<SponsorStatus, string> = {
  not_contacted: "Not Contacted",
  sent: "Sent",
  follow_up: "Follow-up",
  confirmed: "Confirmed",
  declined: "Declined",
};

export const SPONSOR_STATUS_COLORS: Record<SponsorStatus, string> = {
  not_contacted: "bg-slate-100 text-slate-700",
  sent: "bg-blue-100 text-blue-700",
  follow_up: "bg-amber-100 text-amber-700",
  confirmed: "bg-emerald-100 text-emerald-700",
  declined: "bg-rose-100 text-rose-700",
};

export function parseStringArray(value: string | null | undefined): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

export function serializeStringArray(values: string[]): string {
  return JSON.stringify(values.filter((v) => v.trim().length > 0));
}

export const TEMPLATE_VARIABLES = [
  "first_name",
  "last_name",
  "full_name",
  "title",
  "company",
  "job",
  "sender_name",
] as const;

export interface TemplateVariableContext {
  first_name: string;
  last_name: string;
  full_name: string;
  title: string;
  company: string;
  job: string;
  sender_name: string;
}

export const SPONSOR_TEMPLATE_VARIABLES = ["company"] as const;

export interface SponsorTemplateVariableContext {
  company: string;
}

export function renderTemplate(template: string, ctx: Record<string, string>): string {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key: string) => {
    return key in ctx ? ctx[key] : match;
  });
}

// Traditional plain-text wrap width (matches `git log` body wrapping, `fmt`'s
// default) — comfortably under the ~78-char line SHOULD-limit in RFC 5322.
const PLAIN_TEXT_WRAP_WIDTH = 72;

function wrapParagraph(paragraph: string, width: number): string {
  const words = paragraph.split(" ").filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (line && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines.join("\n");
}

// A template body can arrive with a real line break after every wrapped
// line (pasted from Word/Docs/a PDF) or with none at all (typed straight
// through, relying on the textarea's own visual wrap, which produces one
// very long line with no break in the stored value). Either shape sends
// badly as plain text: the first shreds one paragraph into choppy
// fragments, and the second leaves a line long enough that mail transport
// ends up folding it at arbitrary points instead of a word boundary. A
// blank line is the only reliable paragraph marker a plain <textarea>
// gives us, so collapse everything else back to spaces and then do our
// own clean, word-boundary wrap rather than leaving line length to chance.
export function reflowParagraphs(text: string, width = PLAIN_TEXT_WRAP_WIDTH): string {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => wrapParagraph(paragraph.replace(/\s*\n\s*/g, " ").trim(), width))
    .join("\n\n");
}
