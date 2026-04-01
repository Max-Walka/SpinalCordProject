"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hasValidStaffSession } from "@/lib/staffSession";
import LandingPage from "./landingPage/landingPage";

export default function Page() {
  const router = useRouter();
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    if (!hasValidStaffSession()) {
      router.replace("/login");
    } else {
      setAuthed(true);
    }
  }, [router]);

  if (!authed) {
    return null;
  }

  return <LandingPage />;
}
