<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hasValidStaffSession } from "@/lib/staffSession";
import LandingPage from "./landingPage/landingPage";

export default function Page() {
  const router = useRouter();
  const [authed, setAuthed] = useState<boolean | null>(null);

  // Run once on mount only. Including `router` in deps can re-fire the effect when the
  // router object identity changes, causing repeated replace() → infinite refresh in dev.
  useEffect(() => {
    if (!hasValidStaffSession()) {
      router.replace("/login");
      return;
    }
    setAuthed(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: session gate runs once
  }, []);

  if (authed !== true) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6F4EC",
          color: "#15284C",
          fontSize: 14,
        }}
      >
        Loading…
      </div>
    );
  }

  return <LandingPage />;
}
=======
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
