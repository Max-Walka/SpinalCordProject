"use client";

import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Assessment = {
  id: number;
  nhiNumber: string;
  patientName: string;
  date: string;
  versionNumber: string;
  status: "DRAFT" | "FINALISED" | "IN PROGRESS";
};

type Props = {
  assessments?: Assessment[];
};

export default function RecentAssessments({ assessments = [] }: Props) {
  return (
    <section
      className={fira.className}
      style={{
        width: "100%",
        color: "#15284C",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: 600,
          marginBottom: "12px",
        }}
      >
        Recent Assessments
      </h2>

      <div
        style={{
          border: "2px solid #5f6f8c",
          backgroundColor: "#f7f7f4",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "2px solid #5f6f8c",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "14px 16px" }}>NHI Number</th>
              <th style={{ padding: "14px 16px" }}>Patient Name</th>
              <th style={{ padding: "14px 16px" }}>Date</th>
              <th style={{ padding: "14px 16px" }}>Version Number</th>
              <th style={{ padding: "14px 16px" }}>Status</th>
            </tr>
          </thead>

          <tbody>
            {assessments.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    padding: "24px",
                    textAlign: "center",
                    color: "#6b7280",
                  }}
                >
                  No recent assessments to display.
                </td>
              </tr>
            ) : (
              assessments.map((assessment) => (
                <tr key={assessment.id} style={{ borderBottom: "1px solid #8a97ad" }}>
                  <td style={{ padding: "14px 16px" }}>{assessment.nhiNumber}</td>
                  <td style={{ padding: "14px 16px" }}>{assessment.patientName}</td>
                  <td style={{ padding: "14px 16px" }}>{assessment.date}</td>
                  <td style={{ padding: "14px 16px" }}>{assessment.versionNumber}</td>
                  <td style={{ padding: "14px 16px", fontWeight: 500 }}>
                    {assessment.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}