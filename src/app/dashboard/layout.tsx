import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { Sidebar } from "@/components/Sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session?.user) redirect("/login");

  return (
    <div className="flex">
      <Sidebar
        displayName={session.user.name ?? null}
        email={session.user.email ?? ""}
        isAdmin={session.user.role === "admin"}
      />
      <main className="min-h-screen flex-1 overflow-y-auto bg-slate-50 p-8">{children}</main>
    </div>
  );
}
