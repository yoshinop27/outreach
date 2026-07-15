// Builds a configured instance of the generated Apollo SDK (apollo-client/,
// generated via openapi-generator from Apollo's public OpenAPI spec). Each
// user supplies their own key via Settings (`User.apolloApiKey`), so this
// takes the key as a parameter rather than reading a single global env var.

import { Configuration, SearchApi } from "@/apollo-client";

// Creates an instance of the Apollo Search API using the API key from the environment.
export function createApolloSearchApi(): SearchApi {
  return new SearchApi(new Configuration({ apiKey: process.env.APPOLO_API_KEY }));
}
