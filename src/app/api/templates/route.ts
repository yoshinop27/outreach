import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { CHANNELS } from "@/lib/types";

const templateListSelect = {
  id: true,
  channel: true,
  name: true,
  companyName: true,
  subject: true,
  body: true,
  isActive: true,
} as const;

export async function GET() {
  try {
    const user = await requireSessionUser();
    const templates = await prisma.template.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      select: templateListSelect,
    });
    return NextResponse.json({ templates });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const createSchema = z.object({
  channel: z.enum(CHANNELS),
  name: z.string().min(1),
  companyName: z.string().min(1).optional().nullable(),
  subject: z.string().optional().nullable(),
  body: z.string().min(1),
  isActive: z.boolean().default(true),
});

export async function POST(req: Request) {
  try {
    const user = await requireSessionUser();
    const body = createSchema.parse(await req.json());

    const template = await prisma.template.create({
      data: {
        userId: user.id,
        channel: body.channel,
        name: body.name,
        companyName: body.companyName?.trim() || null,
        subject: body.channel === "email" ? body.subject ?? null : null,
        body: body.body,
        isActive: body.isActive,
      },
      select: templateListSelect,
    });
    return NextResponse.json({ template }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
