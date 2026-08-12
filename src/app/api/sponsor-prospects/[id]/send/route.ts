import { NextResponse } from "next/server";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { sendEmailToSponsorProspect } from "@/lib/sponsor-outreach";

// Manual per-prospect send, triggered directly from the Vivvy Pie table —
// a real send through the signed-in user's connected Google account.
export async function POST(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const prospect = await sendEmailToSponsorProspect(params.id, user.id);
    return NextResponse.json({ prospect });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
