import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { CONTACT_STATUSES } from "@/lib/types";

const schema = z.object({
  status: z.enum(CONTACT_STATUSES).optional(),
  // Apollo's scraped title is sometimes a raw "Talent | Recruiter | Sourcer"
  // pileup — this lets the user clean it up before it's used in {{title}}
  // in an outreach email.
  title: z.string().max(200).optional().nullable(),
});

async function loadOwned(id: string, userId: string) {
  const contact = await prisma.contact.findFirst({
    where: { id, watchlistItem: { userId } },
  });
  if (!contact) throw new NotFoundError();
  return contact;
}

// Generic manual status/title edit — used by the pipeline board and the
// Reply Inbox triage view (spec 6.3: replies are read and re-categorized by
// the user, never auto-classified).
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const contact = await loadOwned(params.id, user.id);
    const { status, title } = schema.parse(await req.json());

    const updated = await prisma.contact.update({
      where: { id: contact.id },
      data: {
        ...(status ? { status, lastStatusChangeAt: new Date() } : {}),
        ...(title !== undefined ? { title: title?.trim() || null } : {}),
      },
    });
    return NextResponse.json({ contact: updated });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

// Removes the contact from the pipeline entirely, along with its outreach
// events and coffee chats (both cascade-delete via the Contact relation).
export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    const contact = await loadOwned(params.id, user.id);
    await prisma.contact.delete({ where: { id: contact.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
