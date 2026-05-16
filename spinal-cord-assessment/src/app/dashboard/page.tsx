import DashboardClient from "./DashboardClient";
import AuthGuard from "@/components/AuthGuard";

export default function LandingPage() {
  return (
    <AuthGuard>
      <DashboardClient />
    </AuthGuard>
  );
}