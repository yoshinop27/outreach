import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";

// Demo-only stand-in for the Gmail push notification (watch/history) that
// would normally detect a reply (spec 6.3). Lets you exercise the Reply
// Inbox / triage flow locally without a real connected mailbox.
export async function POST(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const contact = await prisma.contact.findFirst({
      where: { id: params.id, watchlistItem: { userId: user.id } },
    });
    if (!contact) throw new NotFoundError();

    const latestEvent = await prisma.outreachEvent.findFirst({
      where: { contactId: contact.id },
      orderBy: { createdAt: "desc" },
    });
    if (latestEvent) {
      await prisma.outreachEvent.update({
        where: { id: latestEvent.id },
        data: { repliedAt: new Date() },
      });
    }

    // Status stays "sent" — a reply doesn't change the contact's pipeline
    // stage on its own; it shows up in the Reply Inbox for the user to
    // triage into "booked" or "ignored".
    return NextResponse.json({ contact });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
