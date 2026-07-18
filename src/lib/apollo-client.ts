// Builds a configured instance of the generated Apollo SDK (apollo-client/,
// generated via openapi-generator from Apollo's public OpenAPI spec).

import { Configuration, SearchApi, EnrichmentApi } from "@/apollo-client";

// Creates an instance of the Apollo Search API using the API key from the environment.
export function createApolloSearchApi(): SearchApi {
  return new SearchApi(new Configuration({ apiKey: process.env.APPOLO_API_KEY }));
}

// Creates an instance of the Apollo Enrichment API using the API key from the environment.
export function createApolloEnrichmentApi(): EnrichmentApi {
  return new EnrichmentApi(new Configuration({ apiKey: process.env.APPOLO_API_KEY }));
}

