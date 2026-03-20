import { supabase } from "@/lib/supabaseClient";

export type RecentAssessmentDisplay = {
  id: number;
  patientId: number;
  nhiNumber: string;
  patientName: string;
  date: string;
  versionNumber: string;
  status: string;
};

type AssessmentRow = {
  assessment_id: number;
  assessment_date: string;
  status: string;
  current_version: number;
  PATIENTpatient_id: number;
};

type PatientRow = {
  patient_id: number;
  nhi_number: string | null;
};

type PatientNameRow = {
  PATIENTpatient_id: number;
  given_name: string | null;
  family_name: string | null;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Loads recent assessments for the landing table (server-side).
 * One assessment query, then Patient + Patient Name in parallel.
 */
export async function getRecentAssessmentsForLanding(): Promise<{
  rows: RecentAssessmentDisplay[];
  error: string | null;
}> {
  const { data: assessmentData, error: assessmentError } = await supabase
    .from("Assessment")
    .select(
      "assessment_id, assessment_date, status, current_version, PATIENTpatient_id"
    )
    .order("assessment_date", { ascending: false })
    .limit(50);

  if (assessmentError) {
    return {
      rows: [],
      error: `Assessment query failed: ${assessmentError.message}`,
    };
  }

  const assessments = (assessmentData ?? []) as AssessmentRow[];
  if (assessments.length === 0) {
    return { rows: [], error: null };
  }

  const patientIds = [...new Set(assessments.map((a) => a.PATIENTpatient_id))];

  const [patientRes, patientNameRes] = await Promise.all([
    supabase.from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds),
    supabase
      .from("Patient Name")
      .select("PATIENTpatient_id, given_name, family_name")
      .in("PATIENTpatient_id", patientIds),
  ]);

  if (patientRes.error) {
    return {
      rows: [],
      error: `Patient query failed: ${patientRes.error.message}`,
    };
  }
  if (patientNameRes.error) {
    return {
      rows: [],
      error: `Patient Name query failed: ${patientNameRes.error.message}`,
    };
  }

  const patients = (patientRes.data ?? []) as PatientRow[];
  const patientNames = (patientNameRes.data ?? []) as PatientNameRow[];

  const patientMap = new Map<number, PatientRow>();
  patients.forEach((p) => patientMap.set(p.patient_id, p));

  const nameMap = new Map<number, PatientNameRow>();
  patientNames.forEach((n) => nameMap.set(n.PATIENTpatient_id, n));

  const rows: RecentAssessmentDisplay[] = assessments.map((a) => {
    const patient = patientMap.get(a.PATIENTpatient_id);
    const name = nameMap.get(a.PATIENTpatient_id);

    return {
      id: a.assessment_id,
      patientId: a.PATIENTpatient_id,
      nhiNumber: patient?.nhi_number ?? "N/A",
      patientName: name
        ? `${name.given_name ?? ""} ${name.family_name ?? ""}`.trim() || `Patient #${a.PATIENTpatient_id}`
        : `Patient #${a.PATIENTpatient_id}`,
      date: formatDate(a.assessment_date),
      versionNumber: `v${a.current_version}`,
      status: a.status,
    };
  });

  return { rows, error: null };
}
