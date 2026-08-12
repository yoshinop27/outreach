// Company search for sponsorship prospecting, for the Vivvy Pie chatbot.
//
// Google Places (Text Search) finds real local businesses — name, address,
// website, phone — which Apollo's org-level data never provided (no street
// address, no general company email). Apollo has no company-search
// equivalent to Places, but it does have real person-level data, so each
// business found via Places is then run through discoverContacts (the same
// function the job-search flow uses) scoped to titles likely to own a
// sponsorship inbox, to attach a real, verified contact email.

import { searchBusinesses } from "./google-places";
import { discoverContacts } from "./discover_contacts";

export interface CompanySearchResult {
  name: string;
  address: string | null;
  websiteUrl: string | null;
  phone: string | null;
  category: string | null;
  contactName: string | null;
  contactTitle: string | null;
  email: string | null;
}

// Titles most likely to actually own a sponsorship request at a small/mid-size
// business — favors owners/GMs (who handle everything at small companies) and
// marketing/community/partnerships roles (who handle it at larger ones).
const SPONSORSHIP_CONTACT_TITLES = [
  "Owner",
  "General Manager",
  "President",
  "Marketing Manager",
  "Marketing Director",
  "Director of Marketing",
  "Community Relations Manager",
  "Partnerships Manager",
];

function domainFromUrl(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

async function findContact(companyName: string, domain: string) {
  try {
    // count is how many candidates Apollo searches, not how many we keep —
    // ask for more than 1 so a candidate without an email on file doesn't
    // blank out the whole company when a different titled contact would work.
    const contacts = await discoverContacts({
      companyName,
      companyDomain: domain,
      targetTitles: SPONSORSHIP_CONTACT_TITLES,
      count: 10,
    });
    return contacts.find((person) => person.email) ?? null;
  } catch {
    // One business's Apollo error (rate limit, no match) shouldn't blank out
    // the business result itself — it's still a valid, real result from Places.
    return null;
  }
}

export async function searchCompanies(params: { query: string; count?: number }): Promise<CompanySearchResult[]> {
  const businesses = await searchBusinesses({ query: params.query, count: params.count ?? 10 });

  return Promise.all(
    businesses.map(async (b) => {
      const domain = b.websiteUrl ? domainFromUrl(b.websiteUrl) : null;
      const contact = domain ? await findContact(b.name, domain) : null;

      return {
        name: b.name,
        address: b.address,
        websiteUrl: b.websiteUrl,
        phone: b.phone,
        category: b.category,
        contactName: contact?.fullName ?? null,
        contactTitle: contact?.title || null,
        email: contact?.email ?? null,
      };
    }),
  );
}
