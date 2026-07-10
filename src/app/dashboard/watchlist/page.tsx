import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { parseStringArray } from "@/lib/types";
import { WatchlistClient } from "./WatchlistClient";

export default async function WatchlistPage() {
  const session = await getSession();
  const items = await prisma.watchlistItem.findMany({
    where: { userId: session!.user.id },
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { contacts: true } } },
  });

  const initialItems = items.map((item) => ({
    id: item.id,
    companyName: item.companyName,
    companyDomain: item.companyDomain,
    targetTitles: parseStringArray(item.targetTitles),
    location: item.location,
    jobType: item.jobType,
    seniority: parseStringArray(item.seniority),
    active: item.active,
    contactCount: item._count.contacts,
  }));

  return <WatchlistClient initialItems={initialItems} />;
}
