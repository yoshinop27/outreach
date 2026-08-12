import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { SPONSOR_STATUSES } from "@/lib/types";

const updateSchema = z.object({
  companyName: z.string().min(1).optional(),
  companyEmail: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  itemRequested: z.string().optional().nullable(),
  status: z.enum(SPONSOR_STATUSES).optional(),
  dateSent: z.string().datetime().optional().nullable(),
});

async function loadOwned(id: string, userId: string) {
  const prospect = await prisma.sponsorProspect.findFirst({ where: { id, userId } });
  if (!prospect) throw new NotFoundError();
  return prospect;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    const body = updateSchema.parse(await req.json());
    const prospect = await prisma.sponsorProspect.update({
      where: { id: params.id },
      data: {
        ...body,
        dateSent: body.dateSent === undefined ? undefined : body.dateSent ? new Date(body.dateSent) : null,
      },
    });
    return NextResponse.json({ prospect });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    await prisma.sponsorProspect.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
