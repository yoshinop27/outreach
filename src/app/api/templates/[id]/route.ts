import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";

const updateSchema = z.object({
  name: z.string().min(1).optional(),
  subject: z.string().optional().nullable(),
  body: z.string().min(1).optional(),
  isActive: z.boolean().optional(),
});

async function loadOwned(id: string, userId: string) {
  const template = await prisma.template.findFirst({ where: { id, userId } });
  if (!template) throw new NotFoundError();
  return template;
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    const body = updateSchema.parse(await req.json());
    const template = await prisma.template.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json({ template });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    const user = await requireSessionUser();
    await loadOwned(params.id, user.id);
    await prisma.template.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
