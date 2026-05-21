"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLoggedInStaff } from "@/lib/auth";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const staff = getLoggedInStaff();

    if (!staff) {
      window.location.href = "/login";
      return;
    }

    setChecked(true);
  }, []);

  if (!checked) {
    return (
      <div
        style={{
          backgroundColor: "#F6F4EC",
          minHeight: "100vh",
        }}
      />
    );
  }

  return <>{children}</>;
}