// Thin REST wrapper around Google Places API (New) — Text Search.
// Plain fetch rather than the `googleapis` package's generated client: the
// endpoint needs a Places-specific `X-Goog-FieldMask` header to select which
// (billed) fields come back, which is simpler to get right against Google's
// documented REST shape directly than through the generic client wrapper.

// Distinguishes Places API failures (bad key, field mask, quota) from
// unexpected bugs, so apiErrorResponse can surface the message instead of a
// generic 500 — mirrors ApolloApiError/GoogleApiError.
export class GooglePlacesApiError extends Error {}

export interface BusinessSearchResult {
  name: string;
  address: string | null;
  websiteUrl: string | null;
  phone: string | null;
  category: string | null;
}

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.websiteUri",
  "places.nationalPhoneNumber",
  "places.primaryTypeDisplayName",
  "places.editorialSummary",
].join(",");

export async function searchBusinesses(params: { query: string; count?: number }): Promise<BusinessSearchResult[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    throw new GooglePlacesApiError("Google Places API is not configured on the server (GOOGLE_PLACES_API_KEY).");
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify({
      textQuery: params.query,
      pageSize: params.count ?? 10,
    }),
  });

  if (!res.ok) {
    let message = `Google Places request failed (${res.status}).`;
    try {
      const body = (await res.json()) as { error?: { message?: string } };
      if (body?.error?.message) message = body.error.message;
    } catch {
      // response wasn't JSON — keep the generic message above
    }
    throw new GooglePlacesApiError(message);
  }

  const data = (await res.json()) as {
    places?: Array<{
      displayName?: { text?: string };
      formattedAddress?: string;
      websiteUri?: string;
      nationalPhoneNumber?: string;
      primaryTypeDisplayName?: { text?: string };
      editorialSummary?: { text?: string };
    }>;
  };

  return (data.places ?? []).map((p) => ({
    name: p.displayName?.text ?? "Unknown business",
    address: p.formattedAddress ?? null,
    websiteUrl: p.websiteUri ?? null,
    phone: p.nationalPhoneNumber ?? null,
    category: p.editorialSummary?.text ?? p.primaryTypeDisplayName?.text ?? null,
  }));
}
