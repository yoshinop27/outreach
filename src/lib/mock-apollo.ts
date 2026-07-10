// Stand-in for Apollo.io's People Search API (see spec Section 4, item 4 —
// "Discovery worker"). Swap `discoverContacts` for a real Apollo API call
// later; callers only depend on this function's return shape, so nothing
// else needs to change.

import type { EmailStatus } from "@/lib/types";

export interface MockDiscoveredContact {
  fullName: string;
  title: string;
  linkedinUrl: string;
  email: string | null;
  emailStatus: EmailStatus;
}

const FIRST_NAMES = [
  "Ava", "Liam", "Maya", "Noah", "Priya", "Ethan", "Sofia", "Mateo",
  "Chloe", "Jordan", "Amara", "Lucas", "Nina", "Owen", "Ines", "Kai",
];
const LAST_NAMES = [
  "Chen", "Patel", "Garcia", "Nguyen", "Okafor", "Kim", "Rossi", "Novak",
  "Silva", "Andersen", "Haddad", "Fischer", "Costa", "Ivanov", "Reyes",
];
const DEFAULT_TITLES = ["Technical Recruiter", "Talent Acquisition Partner"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function weightedEmailStatus(): EmailStatus {
  const r = Math.random();
  if (r < 0.55) return "verified";
  if (r < 0.8) return "guessed";
  return "not_found";
}

export function discoverContacts(params: {
  companyName: string;
  companyDomain?: string | null;
  targetTitles: string[];
  count?: number;
}): MockDiscoveredContact[] {
  const { companyName, companyDomain, targetTitles } = params;
  const titles = targetTitles.length > 0 ? targetTitles : DEFAULT_TITLES;
  const count = params.count ?? 2 + Math.floor(Math.random() * 3); // 2-4

  const results: MockDiscoveredContact[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = pick(FIRST_NAMES);
    const lastName = pick(LAST_NAMES);
    const fullName = `${firstName} ${lastName}`;
    const title = pick(titles);
    const emailStatus = weightedEmailStatus();
    const domain = companyDomain || `${slugify(companyName)}.com`;
    const email =
      emailStatus === "not_found" ? null : `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    const linkedinUrl = `https://www.linkedin.com/in/${slugify(fullName)}-${Math.floor(
      Math.random() * 9000 + 1000,
    )}`;

    results.push({ fullName, title, linkedinUrl, email, emailStatus });
  }
  return results;
}
