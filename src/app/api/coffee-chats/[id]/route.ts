import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { COFFEE_CHAT_OUTCOMES } from "@/lib/types";

const updateSchema = z.object({
  scheduledAt: z.string().min(1).optional(),
  durationMinutes: z.number().int().positive().optional(),
  notes: z.string().optional().nullable(),
  outcome: z.enum(COFFEE_CHAT_OUTCOMES).optional().nullable(),
});

async function loadOwned(id: string, userId: string) {
  const chat = await prisma.coffeeChat.findFirst({
    where: { id, contact: { watchlistItem: { userId } } },
  });
  if (!chat) throw new NotFoundError();
  return chat;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    const body = updateSchema.parse(await req.json());
    const chat = await prisma.coffeeChat.update({
      where: { id: params.id },
      data: {
        ...(body.scheduledAt !== undefined ? { scheduledAt: new Date(body.scheduledAt) } : {}),
        ...(body.durationMinutes !== undefined ? { durationMinutes: body.durationMinutes } : {}),
        ...(body.notes !== undefined ? { notes: body.notes } : {}),
        ...(body.outcome !== undefined ? { outcome: body.outcome } : {}),
      },
    });
    return NextResponse.json({ coffeeChat: chat });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    await prisma.coffeeChat.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
