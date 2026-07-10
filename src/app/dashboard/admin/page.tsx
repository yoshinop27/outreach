import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { AdminClient } from "./AdminClient";

export default async function AdminPage() {
  const session = await getSession();
  if (session?.user.role !== "admin") redirect("/dashboard");

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      email: true,
      displayName: true,
      role: true,
      status: true,
      dailySendCapCurrent: true,
      outlookAccountConnected: true,
      createdAt: true,
      lastLoginAt: true,
      _count: { select: { watchlistItems: true } },
    },
  });

  const items = users.map((u) => ({
    id: u.id,
    email: u.email,
    displayName: u.displayName,
    role: u.role as "user" | "admin",
    status: u.status as "active" | "disabled" | "invited",
    dailySendCapCurrent: u.dailySendCapCurrent,
    watchlistCount: u._count.watchlistItems,
    lastLoginAt: u.lastLoginAt?.toISOString() ?? null,
  }));

  return <AdminClient initialUsers={items} currentUserId={session.user.id} />;
}
