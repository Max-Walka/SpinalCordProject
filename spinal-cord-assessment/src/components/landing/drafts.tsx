"use client";

import { useEffect, useState, useMemo, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Fira_Sans } from "next/font/google";
import { supabase } from "@/lib/supabaseClient";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// --- Types ---
type AssessmentRow = {
  assessment_id: number;
  assessment_date: string;
  status: string;
  current_version: number;
  PATIENTpatient_id: number;
};

type PatientRow = {
  patient_id: number;
  nhi_number: string;
};

type PatientNameRow = {
  PATIENTpatient_id: number;
  given_name: string;
  family_name: string;
};

type DraftDisplay = {
  id: number;
  patientId: number;
  nhiNumber: string;
  patientName: string;
  date: string;
  versionNumber: string;
  status: string;
};

// --- Helpers ---
function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function getStatusBadge(status: string) {
  const s = status.toUpperCase();
  let colors = { text: "#15284C", bg: "#F1F5F9", border: "#CBD5E1" };

  if (s === "DRAFT" || s === "OPEN") {
    colors = { text: "#92400E", bg: "#FEF3C7", border: "#F59E0B" };
  } else if (s === "IN PROGRESS") {
    colors = { text: "#1E40AF", bg: "#DBEAFE", border: "#3B82F6" };
  }

  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: "12px",
      fontSize: "11px",
      fontWeight: 700,
      textTransform: "uppercase",
      backgroundColor: colors.bg,
      color: colors.text,
      border: `1px solid ${colors.border}`
    }}>
      {status}
    </span>
  );
}

export default function Drafts() {
  const router = useRouter();
  const [rows, setRows] = useState<DraftDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchDrafts() {
      setLoading(true);
      setError(null);

      // Fetch assessments that are NOT finalized
      const { data: assessmentData, error: assessmentError } = await supabase
        .from("Assessment")
        .select("assessment_id, assessment_date, status, current_version, PATIENTpatient_id")
        .neq("status", "FINALISED") 
        .order("assessment_date", { ascending: false });

      if (assessmentError) {
        setError(`Fetch failed: ${assessmentError.message}`);
        setLoading(false);
        return;
      }

      const assessments = (assessmentData ?? []) as AssessmentRow[];
      if (assessments.length === 0) {
        setRows([]);
        setLoading(false);
        return;
      }

      const patientIds = [...new Set(assessments.map((a) => a.PATIENTpatient_id))];

      const [pRes, nRes] = await Promise.all([
        supabase.from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds),
        supabase.from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds),
      ]);

      const patientMap = new Map(pRes.data?.map(p => [p.patient_id, p]));
      const nameMap = new Map(nRes.data?.map(n => [n.PATIENTpatient_id, n]));

      const mappedRows: DraftDisplay[] = assessments.map((a) => {
        const p = patientMap.get(a.PATIENTpatient_id);
        const n = nameMap.get(a.PATIENTpatient_id);
        return {
          id: a.assessment_id,
          patientId: a.PATIENTpatient_id,
          nhiNumber: p?.nhi_number ?? "N/A",
          patientName: n ? `${n.given_name} ${n.family_name}` : `Patient #${a.PATIENTpatient_id}`,
          date: formatDate(a.assessment_date),
          versionNumber: `v${a.current_version}`,
          status: a.status,
        };
      });

      setRows(mappedRows);
      setLoading(false);
    }
    fetchDrafts();
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter(r => 
      r.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      r.nhiNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [rows, searchTerm]);

  return (
    <section className={fira.className} style={{ width: "100%", padding: "20px", color: "#15284C" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 700 }}>Pending Drafts</h2>
        
        <input 
          type="text" 
          placeholder="Search Drafts..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "6px",
            border: "2px solid #5F6F8C",
            width: "300px",
            outline: "none"
          }}
        />
      </div>

      <div style={{ border: "2px solid #5F6F8C", borderRadius: "8px", overflow: "hidden", backgroundColor: "#F7F7F4" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #5F6F8C", textAlign: "left", backgroundColor: "#EEF2F7" }}>
              <th style={{ padding: "14px 16px" }}>NHI Number</th>
              <th style={{ padding: "14px 16px" }}>Patient Name</th>
              <th style={{ padding: "14px 16px" }}>Date</th>
              <th style={{ padding: "14px 16px" }}>Version</th>
              <th style={{ padding: "14px 16px" }}>Status</th>
              <th style={{ padding: "14px 16px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr><td colSpan={6} style={{ padding: "30px", textAlign: "center" }}>Loading drafts...</td></tr>
            ) : filteredRows.length === 0 ? (
              <tr><td colSpan={6} style={{ padding: "30px", textAlign: "center" }}>No pending drafts found.</td></tr>
            ) : (
              filteredRows.map((row, index) => (
                <Fragment key={row.id}>
                  <tr
                    style={{
                      borderBottom: "1px solid #8A97AD",
                      backgroundColor: expandedId === row.id ? "#E2E8F0" : index % 2 === 0 ? "transparent" : "#FFFFFF",
                      transition: "0.2s"
                    }}
                  >
                    <td style={{ padding: "14px 16px", fontWeight: 600 }}>{row.nhiNumber}</td>
                    <td style={{ padding: "14px 16px" }}>{row.patientName}</td>
                    <td style={{ padding: "14px 16px" }}>{row.date}</td>
                    <td style={{ padding: "14px 16px" }}>{row.versionNumber}</td>
                    <td style={{ padding: "14px 16px" }}>{getStatusBadge(row.status)}</td>
                    <td style={{ padding: "14px 16px" }}>
                      <button 
                        onClick={() => setExpandedId(expandedId === row.id ? null : row.id)}
                        style={{
                          backgroundColor: "#15284C",
                          color: "#FFF",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "12px",
                          fontWeight: 600
                        }}
                      >
                        {expandedId === row.id ? "Close" : "Open"}
                      </button>
                    </td>
                  </tr>
                  
                  {expandedId === row.id && (
                    <tr style={{ backgroundColor: "#F1F5F9" }}>
                      <td colSpan={6} style={{ padding: "20px", borderBottom: "1px solid #8A97AD" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: "15px", borderRadius: "6px", border: "1px solid #CBD5E1" }}>
                          <div>
                            <p style={{ margin: 0, fontWeight: 700 }}>Continue Assessment for {row.patientName}</p>
                            <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#5F6F8C" }}>NHI: {row.nhiNumber} | Last Edited: {row.date}</p>
                          </div>
                          <button 
                            onClick={() => router.push(`/assessment/${row.id}`)}
                            style={{
                              backgroundColor: "#3E8E41",
                              color: "#FFF",
                              border: "none",
                              padding: "10px 20px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              fontWeight: 700
                            }}
                          >
                            Resume Work &rarr;
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}