import { NextResponse } from "next/server";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { sendEmailToContact } from "@/lib/outreach";

// Manual per-contact send, triggered directly from the Pipeline — the
// alternative to waiting for the bulk discovery dispatch to reach them.
export async function POST(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const contact = await sendEmailToContact(params.id, user.id);
    return NextResponse.json({ contact });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
