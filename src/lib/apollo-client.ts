// Builds a configured instance of the generated Apollo SDK (apollo-client/,
// generated via openapi-generator from Apollo's public OpenAPI spec).

// Imported from specific submodules rather than the "@/apollo-client" barrel —
// that barrel re-exports all 294 generated models and 13 API classes, which
// drags the whole generated SDK into every dev-mode compile that touches it.
import { Configuration } from "@/apollo-client/runtime";
import { SearchApi } from "@/apollo-client/apis/SearchApi";
import { EnrichmentApi } from "@/apollo-client/apis/EnrichmentApi";

// Creates an instance of the Apollo Search API using the API key from the environment.
export function createApolloSearchApi(): SearchApi {
  return new SearchApi(new Configuration({ apiKey: process.env.APPOLO_API_KEY }));
}

// Creates an instance of the Apollo Enrichment API using the API key from the environment.
export function createApolloEnrichmentApi(): EnrichmentApi {
  return new EnrichmentApi(new Configuration({ apiKey: process.env.APPOLO_API_KEY }));
}

