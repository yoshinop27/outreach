// Central source of truth for the enum-like string values stored in SQLite
// columns (see prisma/schema.prisma header comment) and for the JSON-encoded
// array columns.

export const USER_ROLES = ["user", "admin"] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const USER_STATUSES = ["active", "disabled", "invited"] as const;
export type UserStatus = (typeof USER_STATUSES)[number];

export const JOB_TYPES = ["full_time", "contract", "internship"] as const;
export type JobType = (typeof JOB_TYPES)[number];

export const EMAIL_STATUSES = ["verified", "guessed", "not_found"] as const;
export type EmailStatus = (typeof EMAIL_STATUSES)[number];

export const CHANNELS = ["email", "linkedin"] as const;
export type Channel = (typeof CHANNELS)[number];

export const CONTACT_STATUSES = [
  "discovered",
  "queued_email",
  "queued_linkedin",
  "emailed",
  "linkedin_manual_pending",
  "replied",
  "meeting_booked",
  "closed_no_response",
  "closed_declined",
] as const;
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
  queued_email: "Queued (email, cap reached)",
  queued_linkedin: "Queued (LinkedIn, cap reached)",
  emailed: "Emailed",
  linkedin_manual_pending: "Action Queue (LinkedIn)",
  replied: "Replied",
  meeting_booked: "Meeting Booked",
  closed_no_response: "Closed — No Response",
  closed_declined: "Closed — Declined",
};

// Kanban-level grouping used by the pipeline board; several granular
// contact.status values roll up into one visual column, matching the
// spec's Section 7 kanban: Discovered -> Outreach Sent -> Replied ->
// Meeting Booked -> Closed.
export const KANBAN_COLUMNS = [
  "Discovered",
  "Outreach Sent",
  "Replied",
  "Meeting Booked",
  "Closed",
] as const;
export type KanbanColumn = (typeof KANBAN_COLUMNS)[number];

export function kanbanColumnFor(status: ContactStatus): KanbanColumn {
  switch (status) {
    case "discovered":
    case "queued_email":
    case "queued_linkedin":
      return "Discovered";
    case "emailed":
    case "linkedin_manual_pending":
      return "Outreach Sent";
    case "replied":
      return "Replied";
    case "meeting_booked":
      return "Meeting Booked";
    case "closed_no_response":
    case "closed_declined":
      return "Closed";
  }
}

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
  "sender_name",
] as const;

export interface TemplateVariableContext {
  first_name: string;
  last_name: string;
  full_name: string;
  title: string;
  company: string;
  sender_name: string;
}

export function renderTemplate(template: string, ctx: TemplateVariableContext): string {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key: string) => {
    return key in ctx ? ctx[key as keyof TemplateVariableContext] : match;
  });
}
