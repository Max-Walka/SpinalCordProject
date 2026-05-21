"use client";

import { useRouter } from "next/navigation";

export default function Buttons() {
  const router = useRouter();

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <button
<<<<<<< HEAD
        className="btn"
        onClick={() => router.push("/patients/search")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 22px",
          backgroundColor: "#2D3E5E",
          border: "none",
          borderRadius: "8px",
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: 600,
=======
        type="button"
        onClick={() => router.push("/search")}
        style={{
          padding: "10px 16px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D6D6",
          borderRadius: "6px",
          color: "#15284C",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "inherit",
          cursor: "pointer",
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        Search Patient
      </button>
<<<<<<< HEAD

      <button
        className="btn"
        style={{
          padding: "12px 22px",
          backgroundColor: "#FFFFFF",
          border: "1.5px solid #2D3E5E",
          borderRadius: "8px",
          color: "#2D3E5E",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        + New Patient
      </button>
=======
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
    </div>
  );
}
