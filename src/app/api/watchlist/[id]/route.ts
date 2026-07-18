import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { serializeStringArray } from "@/lib/types";

const updateSchema = z.object({
  companyName: z.string().min(1).optional(),
  companyDomain: z.string().optional().nullable(),
  targetTitles: z.array(z.string()).optional(),
  location: z.string().optional().nullable(),
  seniority: z.array(z.string()).optional(),
});

async function loadOwned(id: string, userId: string) {
  const item = await prisma.watchlistItem.findFirst({ where: { id, userId } });
  if (!item) throw new NotFoundError();
  return item;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    const body = updateSchema.parse(await req.json());
    const item = await prisma.watchlistItem.update({
      where: { id: params.id },
      data: {
        ...(body.companyName !== undefined ? { companyName: body.companyName } : {}),
        ...(body.companyDomain !== undefined ? { companyDomain: body.companyDomain } : {}),
        ...(body.targetTitles !== undefined ? { targetTitles: serializeStringArray(body.targetTitles) } : {}),
        ...(body.location !== undefined ? { location: body.location } : {}),
        ...(body.seniority !== undefined ? { seniority: serializeStringArray(body.seniority) } : {}),
      },
    });
    return NextResponse.json({ item });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    await prisma.watchlistItem.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
