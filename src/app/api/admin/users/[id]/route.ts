import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdminUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { USER_ROLES, USER_STATUSES } from "@/lib/types";

const updateSchema = z.object({
  status: z.enum(USER_STATUSES).optional(),
  role: z.enum(USER_ROLES).optional(),
  dailySendCapCurrent: z.number().int().min(0).max(500).optional(),
});

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const admin = await requireAdminUser();
    const target = await prisma.user.findUnique({ where: { id: params.id } });
    if (!target) throw new NotFoundError();

    const body = updateSchema.parse(await req.json());

    if (target.id === admin.id && body.role && body.role !== "admin") {
      return NextResponse.json({ error: "You can't remove your own admin role" }, { status: 400 });
    }
    if (target.id === admin.id && body.status && body.status !== "active") {
      return NextResponse.json({ error: "You can't disable your own account" }, { status: 400 });
    }

    const user = await prisma.user.update({ where: { id: params.id }, data: body });
    return NextResponse.json({ user });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
