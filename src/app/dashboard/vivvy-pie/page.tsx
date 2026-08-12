import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import type { SponsorStatus } from "@/lib/types";
import { VivvyPieClient } from "./VivvyPieClient";

export default async function VivvyPiePage() {
  const session = await getSession();
  const [prospects, templates] = await Promise.all([
    prisma.sponsorProspect.findMany({
      where: { userId: session!.user.id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.sponsorTemplate.findMany({
      where: { userId: session!.user.id },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const prospectItems = prospects.map((p) => ({
    id: p.id,
    companyName: p.companyName,
    companyEmail: p.companyEmail,
    address: p.address,
    itemRequested: p.itemRequested,
    status: p.status as SponsorStatus,
    dateSent: p.dateSent ? p.dateSent.toISOString() : null,
  }));

  const templateItems = templates.map((t) => ({
    id: t.id,
    name: t.name,
    subject: t.subject,
    body: t.body,
    isActive: t.isActive,
  }));

  return <VivvyPieClient initialProspects={prospectItems} initialTemplates={templateItems} />;
}
