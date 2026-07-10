import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { TemplatesClient } from "./TemplatesClient";

export default async function TemplatesPage() {
  const session = await getSession();
  const templates = await prisma.template.findMany({
    where: { userId: session!.user.id },
    orderBy: { createdAt: "desc" },
  });

  const items = templates.map((t) => ({
    id: t.id,
    channel: t.channel as "email" | "linkedin",
    name: t.name,
    subject: t.subject,
    body: t.body,
    isActive: t.isActive,
  }));

  return <TemplatesClient initialTemplates={items} />;
}
