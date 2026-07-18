import type { EmailStatus } from "@/lib/types";
import { createApolloSearchApi, createApolloEnrichmentApi } from "./apollo-client";
import type { BulkPeopleEnrichment200ResponseMatchesInner } from "@/apollo-client";

export interface DiscoveredContact {
  fullName: string;
  title: string;
  linkedinUrl: string;
  email: string | null;
  emailStatus: EmailStatus;
  companyName: string;
}

// Internal-only: carries the Apollo person id through the pipeline so batch
// enrichment results can be matched back to the right search candidate.
// `apolloId` never leaves this module.
interface SearchCandidate extends DiscoveredContact {
  apolloId: string;
}

// Apollo's bulk enrichment endpoint accepts at most 10 people per call.
const BULK_ENRICHMENT_BATCH_SIZE = 10;

function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

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

// a function that users the Apollo SDK to discover contacts based on a company name, domain, title
const discoverContactsNoEmail = async function (params: {
  companyName: string;
  companyDomain?: string | null;
  targetTitles: string[];
  count?: number;
}): Promise<SearchCandidate[]> {
  const { companyName, companyDomain, targetTitles, count: paramCount } = params;
  const count = paramCount ? paramCount : 10;
  const api = createApolloSearchApi();
  // get response of people from api call
  const searchResults = await api.peopleApiSearch({
    personTitles: targetTitles,
    qOrganizationDomainsList: companyDomain ? [companyDomain] : undefined,
    perPage: count,
  });
  // keep only people with a verified email on file and a usable Apollo id
  // (id is needed to match bulk enrichment results back to this candidate)
  return (searchResults.people ?? [])
    .filter((person) => person.hasEmail && person.id)
    .map((person) => ({
      apolloId: person.id!,
      fullName: `${person.firstName ?? ""} ${person.lastNameObfuscated ?? ""}`.trim(),
      companyName: person.organization?.name ?? companyName,
      title: person.title ?? "",
      email: null,
      linkedinUrl: "",
      emailStatus: "not_found" as EmailStatus,
    }));
};

// a function using the Apollo SDK to find one person's email/LinkedIn URL given their name and company
export async function discoverContactsWithEmail(params: {
  companyName: string;
  fullName: string;
}): Promise<DiscoveredContact | null> {
  const { companyName, fullName } = params;
  const api = createApolloEnrichmentApi();
  
  const result = await api.peopleEnrichment({
    name: fullName,
    organizationName: companyName,
  });

  const person = result.person;
  if (!person?.email) return null;

  return {
    fullName: person.name ?? fullName,
    title: person.title ?? "",
    linkedinUrl: person.linkedinUrl ?? "",
    email: person.email,
    emailStatus: (person.emailStatus as EmailStatus | undefined) ?? "guessed",
    companyName,
  };
}

// Searches for candidates by company/titles (no email/linkedin yet), then enriches
// them in batches of up to 10 via bulkPeopleEnrichment (one API call per batch,
// run in parallel) instead of one enrichment call per person.
export async function discoverContacts(params: {
  companyName: string;
  companyDomain?: string | null;
  targetTitles: string[];
  count?: number;
}): Promise<DiscoveredContact[]> {
  const candidates = await discoverContactsNoEmail(params);
  if (candidates.length === 0) return [];

  const api = createApolloEnrichmentApi();
  const batches = await Promise.all(
    chunk(candidates, BULK_ENRICHMENT_BATCH_SIZE).map((batch) =>
      api.bulkPeopleEnrichment({
        bulkPeopleEnrichmentRequest: {
          details: batch.map((candidate) => ({ id: candidate.apolloId })),
        },
      }),
    ),
  );

  const matchesById = new Map<string, BulkPeopleEnrichment200ResponseMatchesInner>();
  for (const batch of batches) {
    for (const match of batch.matches ?? []) {
      if (match.id) matchesById.set(match.id, match);
    }
  }

  return candidates.map((candidate) => {
    const match = matchesById.get(candidate.apolloId);
    if (!match?.email) {
      const { apolloId: _apolloId, ...unenriched } = candidate;
      return unenriched;
    }
    return {
      fullName: match.name ?? candidate.fullName,
      title: candidate.title,
      linkedinUrl: match.linkedinUrl ?? "",
      email: match.email,
      emailStatus: (match.emailStatus as EmailStatus | undefined) ?? "guessed",
      companyName: candidate.companyName,
    };
  });
}