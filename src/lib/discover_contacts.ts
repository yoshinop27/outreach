import type { EmailStatus } from "@/lib/types";
import { createApolloSearchApi, createApolloEnrichmentApi } from "./apollo-client";
import { ResponseError } from "@/apollo-client/runtime";
import type { BulkPeopleEnrichment200ResponseMatchesInner } from "@/apollo-client/models/BulkPeopleEnrichment200ResponseMatchesInner";
import type { SearchApi } from "@/apollo-client/apis/SearchApi";

// Distinguishes Apollo API failures (bad key, plan doesn't include this
// endpoint, rate limit, etc.) from unexpected bugs, so apiErrorResponse can
// surface Apollo's own error message instead of a generic 500.
export class ApolloApiError extends Error {}

export async function callApollo<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (err instanceof ResponseError) {
      let message = `Apollo API request failed (${err.response.status}).`;
      try {
        const body = (await err.response.json()) as { error?: string };
        if (body?.error) message = body.error;
      } catch {
        // response wasn't JSON — keep the generic message above
      }
      throw new ApolloApiError(message);
    }
    throw err;
  }
}

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

export function chunk<T>(arr: T[], size: number): T[][] {
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

// peopleApiSearch's personLocations is applied server-side, but the search
// response only tells us whether Apollo *has* city/state/country on file for
// a person — not the values, so we can't verify the filter actually held.
// The enrichment response does include real city/state/country, so this
// double-checks the requested location against it rather than trusting
// Apollo's server-side match unverified. Missing location data on the
// enriched record isn't treated as a mismatch — there's nothing to check.
function matchesRequestedLocation(
  match: Pick<BulkPeopleEnrichment200ResponseMatchesInner, "city" | "state" | "country">,
  location: string,
): boolean {
  const needle = location.trim().toLowerCase();
  if (!needle) return true;
  const haystacks = [match.city, match.state, match.country].filter((v): v is string => !!v).map((v) => v.toLowerCase());
  if (haystacks.length === 0) return true;
  return haystacks.some((h) => h.includes(needle) || needle.includes(h));
}

// peopleApiSearch can only scope by domain or organizationId, not by name —
// so when a watchlist item has no companyDomain on file, resolve the name to
// an organizationId via organizationSearch first. Without this, an empty
// companyDomain silently drops the company filter entirely and searches
// Apollo's whole person database for the target titles.
async function resolveOrganizationId(api: SearchApi, companyName: string): Promise<string | null> {
  const result = await callApollo(() => api.organizationSearch({ qOrganizationName: companyName }));
  return result.organizations?.[0]?.id ?? null;
}

// a function that users the Apollo SDK to discover contacts based on a company name, domain, title
const discoverContactsNoEmail = async function (params: {
  companyName: string;
  companyDomain?: string | null;
  targetTitles: string[];
  location?: string | null;
  seniority?: string[];
  count?: number;
}): Promise<SearchCandidate[]> {
  const { companyName, companyDomain, targetTitles, location, seniority, count: paramCount } = params;
  const count = paramCount ? paramCount : 10;
  const api = createApolloSearchApi();

  let organizationIds: string[] | undefined;
  if (!companyDomain) {
    const organizationId = await resolveOrganizationId(api, companyName);
    if (!organizationId) return []; // can't scope to this company at all — don't return unrelated people
    organizationIds = [organizationId];
  }

  // get response of people from api call
  const searchResults = await callApollo(() =>
    api.peopleApiSearch({
      personTitles: targetTitles,
      qOrganizationDomainsList: companyDomain ? [companyDomain] : undefined,
      organizationIds,
      personLocations: location ? [location] : undefined,
      personSeniorities: seniority?.length ? seniority : undefined,
      perPage: count,
    }),
  );
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

  const result = await callApollo(() =>
    api.peopleEnrichment({
      name: fullName,
      organizationName: companyName,
    }),
  );

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
  location?: string | null;
  seniority?: string[];
  count?: number;
}): Promise<DiscoveredContact[]> {
  const { location } = params;
  const candidates = await discoverContactsNoEmail(params);
  if (candidates.length === 0) return [];

  const api = createApolloEnrichmentApi();
  const batches = await Promise.all(
    chunk(candidates, BULK_ENRICHMENT_BATCH_SIZE).map((batch) =>
      callApollo(() =>
        api.bulkPeopleEnrichment({
          bulkPeopleEnrichmentRequest: {
            details: batch.map((candidate) => ({ id: candidate.apolloId })),
          },
        }),
      ),
    ),
  );

  const matchesById = new Map<string, BulkPeopleEnrichment200ResponseMatchesInner>();
  for (const batch of batches) {
    for (const match of batch.matches ?? []) {
      if (match.id) matchesById.set(match.id, match);
    }
  }

  return candidates.flatMap((candidate): DiscoveredContact[] => {
    const match = matchesById.get(candidate.apolloId);
    if (!match?.email) {
      const { apolloId: _apolloId, ...unenriched } = candidate;
      return [unenriched];
    }
    if (location && !matchesRequestedLocation(match, location)) return [];
    return [
      {
        fullName: match.name ?? candidate.fullName,
        title: candidate.title,
        linkedinUrl: match.linkedinUrl ?? "",
        email: match.email,
        emailStatus: (match.emailStatus as EmailStatus | undefined) ?? "guessed",
        companyName: candidate.companyName,
      },
    ];
  });
}