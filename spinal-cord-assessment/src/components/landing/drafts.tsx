"use client";

import { useEffect, useMemo, useState } from "react";

export type DraftStatus = "OPEN" | "DRAFT" | "FINALIZED";

export type DraftAssessment = {
  id: string;
  nhi: string;
  patientName: string;
  dateLastEditedISO: string;
  versionNumber: number;
  status: DraftStatus;
};

const STORAGE_KEY = "spinal_cord_assessment_drafts_v1";

const seedDrafts: DraftAssessment[] = [
  {
    id: "draft-aca31fm",
    nhi: "ACA31FM",
    patientName: "Sarah Collins",
    dateLastEditedISO: "2026-03-12T09:10:00.000Z",
    versionNumber: 1,
    status: "OPEN",
  },
  {
    id: "draft-bgj06as",
    nhi: "BGJ06AS",
    patientName: "Noah Mitchell",
    dateLastEditedISO: "2026-02-22T14:40:00.000Z",
    versionNumber: 1,
    status: "OPEN",
  },
  {
    id: "draft-cqy36ab",
    nhi: "CQY36AB",
    patientName: "Daniel Walker",
    dateLastEditedISO: "2026-02-21T08:20:00.000Z",
    versionNumber: 3,
    status: "OPEN",
  },
  {
    id: "draft-kaq92yg",
    nhi: "KAQ92YG",
    patientName: "Lauren Hayes",
    dateLastEditedISO: "2026-02-20T13:15:00.000Z",
    versionNumber: 1,
    status: "DRAFT",
  },
  {
    id: "draft-bhd21se",
    nhi: "BHD21SE",
    patientName: "Michael Turner",
    dateLastEditedISO: "2026-01-28T11:05:00.000Z",
    versionNumber: 2,
    status: "OPEN",
  },
];

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-NZ").format(new Date(iso));
}

function labelStatus(status: DraftStatus) {
  switch (status) {
    case "OPEN":
      return "Open";
    case "FINALIZED":
      return "Finalized";
    case "DRAFT":
    default:
      return "Draft";
  }
}

export default function Drafts() {
  const [drafts, setDrafts] = useState<DraftAssessment[]>(seedDrafts);
  const [openDraftId, setOpenDraftId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw) as DraftAssessment[];
      if (!Array.isArray(parsed)) return;

      setDrafts(parsed);
    } catch {
      setDrafts(seedDrafts);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
    } catch {}
  }, [drafts]);

  const sortedDrafts = useMemo(() => {
    return [...drafts].sort(
      (a, b) =>
        new Date(b.dateLastEditedISO).getTime() -
        new Date(a.dateLastEditedISO).getTime()
    );
  }, [drafts]);

  const selectedDraft =
    openDraftId !== null
      ? sortedDrafts.find((draft) => draft.id === openDraftId) ?? null
      : null;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D6D6D6",
        padding: "18px",
        width: "100%",
        color: "#15284C",
      }}
    >
      <div
        style={{
          marginBottom: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Pending Drafts
        </h2>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
            color: "#15284C",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #D6D6D6",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "12px 10px", fontWeight: 600 }}>NHI</th>
              <th style={{ padding: "12px 10px", fontWeight: 600 }}>Patient Name</th>
              <th style={{ padding: "12px 10px", fontWeight: 600 }}>Date</th>
              <th style={{ padding: "12px 10px", fontWeight: 600 }}>Version</th>
              <th style={{ padding: "12px 10px", fontWeight: 600 }}>Status</th>
              <th style={{ padding: "12px 10px", fontWeight: 600 }}>Open</th>
            </tr>
          </thead>

          <tbody>
            {sortedDrafts.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: "24px 12px",
                    textAlign: "center",
                    color: "#6B7280",
                  }}
                >
                  No drafts yet
                </td>
              </tr>
            ) : (
              sortedDrafts.map((draft) => (
                <tr
                  key={draft.id}
                  style={{
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <td style={{ padding: "14px 10px" }}>{draft.nhi}</td>
                  <td style={{ padding: "14px 10px" }}>{draft.patientName}</td>
                  <td style={{ padding: "14px 10px" }}>
                    {formatDate(draft.dateLastEditedISO)}
                  </td>
                  <td style={{ padding: "14px 10px" }}>v{draft.versionNumber}</td>
                  <td style={{ padding: "14px 10px" }}>{labelStatus(draft.status)}</td>
                  <td style={{ padding: "14px 10px" }}>
                    <button
                      type="button"
                      onClick={() => setOpenDraftId(draft.id)}
                      aria-label={`Open draft ${draft.nhi}`}
                      style={{
                        border: "1px solid #D6D6D6",
                        backgroundColor: "#F3F4F6",
                        color: "#15284C",
                        padding: "6px 12px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedDraft ? (
        <div
          style={{
            marginTop: "16px",
            border: "1px solid #E5E7EB",
            backgroundColor: "#F8FAFC",
            padding: "14px",
            color: "#15284C",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div>
              <div style={{ marginBottom: "6px", fontWeight: 400 }}>
                Selected draft: {selectedDraft.patientName} ({selectedDraft.nhi})
              </div>
              <div style={{ color: "#6B7280", fontSize: "14px", fontWeight: 400 }}>
                Version v{selectedDraft.versionNumber} • Last edited{" "}
                {formatDate(selectedDraft.dateLastEditedISO)}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpenDraftId(null)}
              style={{
                border: "1px solid #D6D6D6",
                backgroundColor: "#FFFFFF",
                color: "#15284C",
                padding: "6px 12px",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}