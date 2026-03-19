import Header from "@/components/layout/Header";
import Buttons from "@/components/landing/buttons";
import RecentAssessments from "@/components/landing/recentAssessments";
import UpcomingReviews from "@/components/landing/upcoming";
import Drafts from "@/components/landing/drafts";

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px 32px",
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Header />

        <div style={{ marginTop: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                fontWeight: 700,
                margin: 0,
              }}
            >
              ISNCSCI / ASRU
            </h1>

            <Buttons />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "28px",
            }}
          >
            <RecentAssessments />

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <UpcomingReviews />
              <Drafts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}