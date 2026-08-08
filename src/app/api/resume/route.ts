import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";

// One resume per user, attached to every outreach email regardless of which
// template sends it (see sendEmailToContact in src/lib/outreach.ts). Lives on
// its own route rather than /api/settings because Templates — where this is
// managed — is open to every signed-in user, not just admins.
const MAX_RESUME_BYTES = 8 * 1024 * 1024;

export async function GET() {
  try {
    const sessionUser = await requireSessionUser();
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: sessionUser.id },
      select: { resumeName: true, resumeMimeType: true },
    });
    return NextResponse.json({ resumeName: user.resumeName, resumeMimeType: user.resumeMimeType });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const updateSchema = z.object({
  resumeName: z.string().min(1).optional().nullable(),
  resumeMimeType: z.string().min(1).optional().nullable(),
  resumeData: z.string().optional().nullable(),
  removeResume: z.boolean().optional(),
});

export async function PATCH(req: Request) {
  try {
    const sessionUser = await requireSessionUser();
    const { resumeName, resumeMimeType, resumeData, removeResume } = updateSchema.parse(await req.json());

    const resumeBytes = resumeData ? Buffer.from(resumeData, "base64") : undefined;
    if (resumeBytes && resumeBytes.byteLength > MAX_RESUME_BYTES) {
      return NextResponse.json({ error: "Resume is too large (8MB max)." }, { status: 400 });
    }

    const user = await prisma.user.update({
      where: { id: sessionUser.id },
      data: removeResume
        ? { resumeName: null, resumeMimeType: null, resumeData: null }
        : resumeBytes
          ? { resumeName, resumeMimeType, resumeData: resumeBytes }
          : {},
      select: { resumeName: true, resumeMimeType: true },
    });
    return NextResponse.json({ resumeName: user.resumeName, resumeMimeType: user.resumeMimeType });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
