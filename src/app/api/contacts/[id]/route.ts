import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { CONTACT_STATUSES } from "@/lib/types";

const schema = z.object({ status: z.enum(CONTACT_STATUSES) });

async function loadOwned(id: string, userId: string) {
  const contact = await prisma.contact.findFirst({
    where: { id, watchlistItem: { userId } },
  });
  if (!contact) throw new NotFoundError();
  return contact;
}

// Generic manual status transition — used by the pipeline board and the
// Reply Inbox triage view (spec 6.3: replies are read and re-categorized by
// the user, never auto-classified).
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const contact = await loadOwned(params.id, user.id);
    const { status } = schema.parse(await req.json());

    if (status === "replied") {
      const latestEvent = await prisma.outreachEvent.findFirst({
        where: { contactId: contact.id, repliedAt: null },
        orderBy: { createdAt: "desc" },
      });
      if (latestEvent) {
        await prisma.outreachEvent.update({
          where: { id: latestEvent.id },
          data: { repliedAt: new Date() },
        });
      }
    }

    const updated = await prisma.contact.update({
      where: { id: contact.id },
      data: { status, lastStatusChangeAt: new Date() },
    });
    return NextResponse.json({ contact: updated });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
