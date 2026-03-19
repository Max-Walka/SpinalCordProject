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
        backgroundColor: "#F6F4EC",
      }}
    >
      {/* 🔥 FULL WIDTH HEADER */}
      <Header />

      {/* 🔒 CONSTRAINED CONTENT */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        {/* TITLE + BUTTONS */}
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
              color: "#15284C",
            }}
          >
            ISNCSCI / ASRU
          </h1>

          <Buttons />
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <RecentAssessments />
          </div>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <UpcomingReviews />
            <Drafts />
          </div>
        </div>
      </div>
    </main>
  );
}