import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { runDiscoveryAndDispatch } from "@/lib/outreach";

const schema = z.object({ watchlistItemId: z.string().optional() });

export async function POST(req: Request) {
  try {
    const user = await requireSessionUser();
    const body = schema.parse(await req.json().catch(() => ({})));
    const summary = await runDiscoveryAndDispatch(user.id, body.watchlistItemId);
    return NextResponse.json({ summary });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
