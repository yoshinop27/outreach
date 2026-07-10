import { getSession } from "@/lib/session";
import { getAnalytics } from "@/lib/analytics";
import { AnalyticsClient } from "./AnalyticsClient";

export default async function AnalyticsPage() {
  const session = await getSession();
  const initialData = await getAnalytics(session!.user.id, 30);
  return <AnalyticsClient initialData={initialData} />;
}
