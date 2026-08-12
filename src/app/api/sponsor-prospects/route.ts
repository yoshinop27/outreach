import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { SPONSOR_STATUSES } from "@/lib/types";

export async function GET() {
  try {
    const user = await requireSessionUser();
    const prospects = await prisma.sponsorProspect.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ prospects });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const createSchema = z.object({
  companyName: z.string().min(1),
  companyEmail: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  itemRequested: z.string().optional().nullable(),
  status: z.enum(SPONSOR_STATUSES).default("not_contacted"),
});

export async function POST(req: Request) {
  try {
    const user = await requireSessionUser();
    const body = createSchema.parse(await req.json());
    const prospect = await prisma.sponsorProspect.create({
      data: {
        userId: user.id,
        companyName: body.companyName,
        companyEmail: body.companyEmail ?? null,
        address: body.address ?? null,
        itemRequested: body.itemRequested ?? null,
        status: body.status,
      },
    });
    return NextResponse.json({ prospect }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
