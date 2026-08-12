import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { ToolLoopAgent, type InferAgentUIMessage } from "ai";
import { searchCompaniesTool } from "@/lib/tools/search-companies-tool";

const openrouter = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

export const sponsorSearchAgent = new ToolLoopAgent({
  model: openrouter("anthropic/claude-sonnet-5"),
  instructions:
    "You help find real local businesses to approach for event/team sponsorship (donations of money, gear, " +
    "or supplies). Don't ask clarifying questions before searching — call searchCompanies right away with " +
    "whatever business type and/or location the message gives you, even if one is missing or vague. Treat the " +
    "conversation as iterative: after showing results, she may reply with more filters (a different area, a " +
    "narrower type, company size) — fold those into a new search rather than asking upfront. Never invent a " +
    "business or a contact — only report what the tool actually returns. For each result, give its name, " +
    "address, and what it does (its category/summary), and its contact's name, title, and email when the " +
    "tool found one — say plainly when it didn't rather than guessing an email. Let her decide which to add " +
    "to her sponsor list.",
  tools: { searchCompanies: searchCompaniesTool },
});

export type SponsorSearchUIMessage = InferAgentUIMessage<typeof sponsorSearchAgent>;
