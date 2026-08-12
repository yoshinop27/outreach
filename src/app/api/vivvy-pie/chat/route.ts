import { createAgentUIStreamResponse } from "ai";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { sponsorSearchAgent } from "@/lib/agents/sponsor-search-agent";

export async function POST(req: Request) {
  try {
    await requireSessionUser();
  } catch (err) {
    return apiErrorResponse(err);
  }

  const { messages } = await req.json();
  return createAgentUIStreamResponse({
    agent: sponsorSearchAgent,
    uiMessages: messages,
  });
}
