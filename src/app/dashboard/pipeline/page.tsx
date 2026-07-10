import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { PipelineClient } from "./PipelineClient";
import type { ContactStatus } from "@/lib/types";

export default async function PipelinePage() {
  const session = await getSession();
  const contacts = await prisma.contact.findMany({
    where: { watchlistItem: { userId: session!.user.id } },
    orderBy: { lastStatusChangeAt: "desc" },
    include: {
      outreachEvents: { orderBy: { createdAt: "desc" }, take: 1 },
    },
  });

  const initialContacts = contacts.map((c) => ({
    id: c.id,
    fullName: c.fullName,
    title: c.title,
    companyName: c.companyName,
    email: c.email,
    emailStatus: c.emailStatus,
    linkedinUrl: c.linkedinUrl,
    status: c.status as ContactStatus,
    lastChannel: c.outreachEvents[0]?.channel ?? null,
  }));

  return <PipelineClient initialContacts={initialContacts} />;
}
