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
