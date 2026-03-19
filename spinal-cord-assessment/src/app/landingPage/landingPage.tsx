import RecentAssessments from "@/components/landing/recentAssessments";
import Header from "@/components/layout/Header";
import Buttons from "@/components/landing/buttons";
import UpcomingReviews from "@/components/landing/upcoming";
import Drafts from "@/components/landing/drafts";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Buttons />
      <UpcomingReviews />
      <Drafts />
      <RecentAssessments />
    </div>
  );
}