import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
  params: Promise<{ patientId: string }>;
};

type PatientRow = {
  patient_id: number;
  nhi_number: string | null;
  date_of_birth: string | null;
  gender: string | null;
  ethnicity?: string | null;
};

type PatientNameRow = {
  PATIENTpatient_id: number;
  given_name: string | null;
  family_name: string | null;
};

type PatientAddressRow = {
  PATIENTpatient_id: number;
  line1: string | null;
  line2: string | null;
  suburb: string | null;
  city: string | null;
  postal_code: number | null;
  country: string | null;
};

type AssessmentRow = {
  assessment_id: number;
  assessment_date: string | null;
  status: string | null;
  ais_grade?: string | null;
  ais?: string | null;
  clinician_name?: string | null;
};

/** Keep selects narrow — less data over the wire and faster PostgREST work. */
const SEL = {
  patient:
    "patient_id,nhi_number,date_of_birth,gender,ethnicity",
  name: "PATIENTpatient_id,given_name,family_name",
  address:
    "PATIENTpatient_id,line1,line2,suburb,city,postal_code,country",
  assessment:
    "assessment_id,assessment_date,status,ais_grade,ais,clinician_name",
} as const;

// ─── Design tokens ────────────────────────────────────────────────────────────

const NAVY        = "#15284C";
const TEAL_LOGO   = "#1FA199";
const TEAL_BORDER = "#2D9CDB";   // cyan/teal patient-card border from Figma
const BG          = "#EDE8DF";
const LABEL_COL   = "#6B7A96";
const OPEN_BG     = "#D9DDE3";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(ds: string | null | undefined): string {
  if (!ds) return "N/A";
  const d = new Date(ds);
  if (Number.isNaN(d.getTime())) return ds;
  return d.toLocaleDateString("en-NZ", { day: "2-digit", month: "long", year: "numeric" });
}

function calculateAge(dob: string | null | undefined): string {
  if (!dob) return "N/A";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "N/A";
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return `${age} Years`;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav style={{
      backgroundColor: NAVY,
      padding: "0 40px",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
    }}>
      <div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 22, lineHeight: 1.2 }}>
          Health New Zealand
        </div>
        <div style={{ color: TEAL_LOGO, fontWeight: 600, fontSize: 15 }}>Te Whatu Ora</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#CBD5E1" }}>
        <span style={{ fontSize: 15 }}>Dr. J. Doe</span>
        <div style={{
          width: 40, height: 40,
          borderRadius: "50%",
          border: "2px solid #CBD5E1",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function Page({ params }: Props) {
  const { patientId } = await params;

  const numericId = Number(patientId);
  const isNumeric = Number.isInteger(numericId) && !Number.isNaN(numericId);

  let patient: PatientRow;
  let name: PatientNameRow | null;
  let address: PatientAddressRow | null;
  let assessments: AssessmentRow[];
  let assessmentRes: { error: { message: string } | null };

  if (isNumeric) {
    // One round-trip batch: previously patient completed before the other 3 started.
    const [patientRes, nameRes, addressRes, assessRes] = await Promise.all([
      supabase.from("Patient").select(SEL.patient).eq("patient_id", numericId).maybeSingle(),
      supabase.from("Patient Name").select(SEL.name)
        .eq("PATIENTpatient_id", numericId).limit(1).maybeSingle(),
      supabase.from("Patient Address").select(SEL.address)
        .eq("PATIENTpatient_id", numericId).limit(1).maybeSingle(),
      supabase.from("Assessment").select(SEL.assessment)
        .eq("PATIENTpatient_id", numericId)
        .order("assessment_date", { ascending: false }),
    ]);

    if (patientRes.error || !patientRes.data) {
      return (
        <div style={{ minHeight: "100vh", backgroundColor: BG, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          <Navbar />
          <div style={{ padding: "40px", fontSize: 15, color: patientRes.error ? "#DC2626" : NAVY }}>
            {patientRes.error
              ? `Failed to load patient: ${patientRes.error.message}`
              : `No patient found for: ${patientId}`}
          </div>
        </div>
      );
    }

    patient = patientRes.data as PatientRow;
    name = nameRes.data as PatientNameRow | null;
    address = addressRes.data as PatientAddressRow | null;
    assessments = (assessRes.data ?? []) as AssessmentRow[];
    assessmentRes = { error: assessRes.error };
  } else {
    const { data: patientData, error: patientError } = await supabase
      .from("Patient")
      .select(SEL.patient)
      .eq("nhi_number", patientId)
      .maybeSingle();

    if (patientError || !patientData) {
      return (
        <div style={{ minHeight: "100vh", backgroundColor: BG, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
          <Navbar />
          <div style={{ padding: "40px", fontSize: 15, color: patientError ? "#DC2626" : NAVY }}>
            {patientError
              ? `Failed to load patient: ${patientError.message}`
              : `No patient found for: ${patientId}`}
          </div>
        </div>
      );
    }

    patient = patientData as PatientRow;
    const pid = patient.patient_id;

    const [nameRes, addressRes, assessRes] = await Promise.all([
      supabase.from("Patient Name").select(SEL.name)
        .eq("PATIENTpatient_id", pid).limit(1).maybeSingle(),
      supabase.from("Patient Address").select(SEL.address)
        .eq("PATIENTpatient_id", pid).limit(1).maybeSingle(),
      supabase.from("Assessment").select(SEL.assessment)
        .eq("PATIENTpatient_id", pid)
        .order("assessment_date", { ascending: false }),
    ]);

    name = nameRes.data as PatientNameRow | null;
    address = addressRes.data as PatientAddressRow | null;
    assessments = (assessRes.data ?? []) as AssessmentRow[];
    assessmentRes = { error: assessRes.error };
  }

  // ── Derived values ──
  const fullName = name && (name.family_name || name.given_name)
    ? `${name.family_name ?? ""}${name.family_name && name.given_name ? ", " : ""}${name.given_name ?? ""}`
    : "Unknown";

  const addressLines: string[] = address
    ? [address.line1, address.line2, address.suburb, address.city, address.country,
       address.postal_code != null ? String(address.postal_code) : null]
        .filter((v): v is string => v != null && v.trim() !== "")
    : [];

  type DetailRow = { label: string; value: React.ReactNode };

  const detailRows: DetailRow[] = [
    { label: "Date of Birth", value: formatDate(patient.date_of_birth) },
    { label: "Age",           value: calculateAge(patient.date_of_birth) },
    { label: "Gender",        value: patient.gender    ?? "Unknown" },
    { label: "Ethnicity",     value: patient.ethnicity ?? "N/A" },
    {
      label: "Address",
      value: addressLines.length > 0
        ? (<>{addressLines.map((l, i) => (
            <span key={i}>{l}{i < addressLines.length - 1 && <br />}</span>
          ))}</>)
        : "N/A",
    },
  ];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: BG,
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: NAVY,
    }}>
      <Navbar />

      <div style={{ padding: "36px 40px", display: "flex", gap: 44, alignItems: "flex-start" }}>

        {/* ════ LEFT PANEL ════ */}
        <div style={{ width: 340, flexShrink: 0 }}>

          <p style={{ fontWeight: 700, fontSize: 15, margin: "0 0 12px 0" }}>Patient Details</p>

          {/* Patient card — teal border matches Figma */}
          <div style={{
            border: `2px solid ${TEAL_BORDER}`,
            backgroundColor: "#FFFFFF",
            padding: "20px 22px 24px",
          }}>
            <h1 style={{ fontSize: 30, fontWeight: 400, margin: "0 0 3px 0", lineHeight: 1.2 }}>
              {fullName}
            </h1>
            <p style={{ fontSize: 13, margin: "0 0 20px 0", color: NAVY }}>
              NHI: {patient.nhi_number ?? "N/A"}
            </p>

            <div style={{ display: "grid", rowGap: 9 }}>
              {detailRows.map(({ label, value }) => (
                <div key={label} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: 8,
                  alignItems: "start",
                }}>
                  <span style={{ fontSize: 13, color: LABEL_COL }}>{label}</span>
                  <span style={{ fontSize: 13, color: NAVY, textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer pushes buttons toward bottom of panel */}
          <div style={{ height: 120 }} />

          {/* + New Assessment */}
          <Link href={`/assessment/new?patientId=${patient.patient_id}`} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor: NAVY,
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: 15,
            padding: "16px 24px",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}>
            <span style={{ fontSize: 22, lineHeight: 1, marginTop: -1 }}>+</span>
            New Assessment
          </Link>

          {/* ← Back */}
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 10,
            backgroundColor: "transparent",
            color: NAVY,
            fontWeight: 500,
            fontSize: 15,
            padding: "14px 24px",
            textDecoration: "none",
            border: `2px solid ${NAVY}`,
          }}>
            ← Back
          </Link>
        </div>

        {/* ════ RIGHT PANEL ════ */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Heading row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Assessment History</h2>

            <div style={{ display: "flex", gap: 10 }}>
              {/* Filter */}
              <button style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 16px",
                backgroundColor: "#FFFFFF",
                border: `2px solid ${NAVY}`,
                color: NAVY,
                fontWeight: 500, fontSize: 14,
                cursor: "pointer",
              }}>
                Filter
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Export */}
              <button style={{
                padding: "8px 18px",
                backgroundColor: "#FFFFFF",
                border: `2px solid ${NAVY}`,
                color: NAVY,
                fontWeight: 500, fontSize: 14,
                cursor: "pointer",
              }}>
                Export All PDFs
              </button>
            </div>
          </div>

          {/* Table container */}
          <div style={{ border: `2px solid ${NAVY}`, backgroundColor: "#FFFFFF" }}>

            {/* Column headers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 2fr 1.2fr 1.2fr 90px",
              padding: "13px 20px",
              borderBottom: `2px solid ${NAVY}`,
            }}>
              {(["DATE", "CLINICIAN NAME", "AIS", "STATUS", ""] as const).map((col) => (
                <div key={col} style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em" }}>
                  {col}
                </div>
              ))}
            </div>

            {/* Error state */}
            {assessmentRes.error && (
              <div style={{ padding: "16px 20px", color: "#DC2626", fontSize: 14 }}>
                Failed to load assessments: {assessmentRes.error.message}
              </div>
            )}

            {/* Empty state */}
            {!assessmentRes.error && assessments.length === 0 && (
              <div style={{ padding: "24px 20px", color: "#6B7280", fontSize: 14 }}>
                No assessments found.
              </div>
            )}

            {/* Data rows */}
            {assessments.map((a, i) => {
              const rawGrade  = a.ais_grade ?? a.ais;
              const gradeLabel = rawGrade ? `GRADE ${rawGrade.toUpperCase()}` : "N/A";
              const isLast    = i === assessments.length - 1;

              return (
                <div key={a.assessment_id} style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 2fr 1.2fr 1.2fr 90px",
                  padding: "15px 20px",
                  borderBottom: isLast ? "none" : "1px solid #E5E7EB",
                  alignItems: "center",
                }}>
                  <div style={{ fontSize: 14 }}>{formatDate(a.assessment_date)}</div>
                  <div style={{ fontSize: 14 }}>{a.clinician_name ?? "Unassigned"}</div>
                  <div style={{ fontSize: 14 }}>{gradeLabel}</div>
                  <div style={{ fontSize: 14 }}>{a.status ?? "Unknown"}</div>
                  <div>
                    <Link href={`/assessment?assessmentId=${a.assessment_id}`} style={{
                      display: "inline-block",
                      padding: "6px 18px",
                      backgroundColor: OPEN_BG,
                      color: NAVY,
                      fontSize: 13,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}>
                      Open
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}