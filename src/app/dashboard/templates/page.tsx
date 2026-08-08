import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { TemplatesClient } from "./TemplatesClient";

export default async function TemplatesPage() {
  const session = await getSession();
  const [templates, user] = await Promise.all([
    prisma.template.findMany({
      where: { userId: session!.user.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        channel: true,
        name: true,
        companyName: true,
        subject: true,
        body: true,
        isActive: true,
      },
    }),
    prisma.user.findUniqueOrThrow({
      where: { id: session!.user.id },
      select: { resumeName: true, resumeMimeType: true },
    }),
  ]);

  const items = templates.map((t) => ({
    id: t.id,
    channel: t.channel as "email" | "linkedin",
    name: t.name,
    companyName: t.companyName,
    subject: t.subject,
    body: t.body,
    isActive: t.isActive,
  }));

  return (
    <TemplatesClient
      initialTemplates={items}
      initialResumeName={user.resumeName}
    />
  );
}
