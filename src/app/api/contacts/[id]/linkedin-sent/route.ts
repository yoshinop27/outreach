import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";

const schema = z.object({ theyReplied: z.boolean().default(false) });

// Marks the one-click manual LinkedIn action as done (spec 6.3: "Manual
// LinkedIn actions are marked complete by the user clicking 'Done' in the
// Action Queue, with an optional 'they replied' toggle").
export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const contact = await prisma.contact.findFirst({
      where: { id: params.id, watchlistItem: { userId: user.id } },
    });
    if (!contact) throw new NotFoundError();

    const { theyReplied } = schema.parse(await req.json().catch(() => ({})));

    const pendingEvent = await prisma.outreachEvent.findFirst({
      where: { contactId: contact.id, channel: "linkedin", manualActionCompletedAt: null },
      orderBy: { createdAt: "desc" },
    });
    if (pendingEvent) {
      await prisma.outreachEvent.update({
        where: { id: pendingEvent.id },
        data: {
          manualActionCompletedAt: new Date(),
          ...(theyReplied ? { repliedAt: new Date() } : {}),
        },
      });
    }

    // Status stays "sent" either way — a reply here (like an email reply)
    // surfaces in the Reply Inbox rather than changing status directly.
    const updated = await prisma.contact.update({
      where: { id: contact.id },
      data: { lastStatusChangeAt: new Date() },
    });
    return NextResponse.json({ contact: updated });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
