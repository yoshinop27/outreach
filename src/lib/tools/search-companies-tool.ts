import { tool } from "ai";
import { z } from "zod";
import { searchCompanies } from "@/lib/sponsor-search";

// Read-only — looks businesses up via Google Places and, where possible, a
// real contact via Apollo, and returns them to the chat. It never writes to
// the database; adding a result to the sponsor prospect table is a separate,
// explicit click in the UI.
export const searchCompaniesTool = tool({
  description:
    "Search for real local businesses that could be approached for sponsorship (money, gear, or supplies), " +
    "using Google's business database — returns real name, address, website, and phone. For each result, also " +
    "tries to find a real contact (name, title, and verified email) likely to own a sponsorship inbox — not " +
    "every business will have one.",
  inputSchema: z.object({
    query: z
      .string()
      .describe(
        "A natural search phrase combining whatever business type and/or location is known so far, e.g. " +
          "'sporting goods stores in Austin, TX' or just 'auto dealerships' if no location was given yet.",
      ),
  }),
  execute: async ({ query }) => {
    const companies = await searchCompanies({ query, count: 10 });
    return { companies };
  },
});
