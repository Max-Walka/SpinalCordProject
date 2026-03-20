import LandingPage from "./landingPage/landingPage";

/** Landing loads live Supabase data; avoid prerender/build-time fetch timeouts. */
export const dynamic = "force-dynamic";

export default function Page() {
  return <LandingPage />;
}