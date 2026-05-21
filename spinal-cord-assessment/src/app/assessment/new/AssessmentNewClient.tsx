"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import AssessmentForm, {
  type UiExam,
} from "@/components/assessment/AssessmentForm";
import PatientAssessmentBar from "@/components/assessment/PatientAssessmentBar";
import { supabase } from "@/lib/supabaseClient";
import { loadAssessmentContext } from "@/lib/assessmentExamData";
import AuthGuard from "@/components/AuthGuard";

function formatNZDate(ds: string | null | undefined): string {
  if (!ds) return "";
  const d = new Date(ds);
  if (Number.isNaN(d.getTime())) return ds;
  return d.toLocaleDateString("en-NZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function ageFromDob(dob: string | null | undefined): string {
  if (!dob) return "";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "";
  const today = new Date();
  let y = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) y--;
  return `${y} Years`;
}

async function loadPatientBar(nhi: string) {
  const { data: patient, error } = await supabase
    .from("Patient")
    .select(
      "patient_id,nhi_number,date_of_birth,gender,ethnicity,place_of_birth"
    )
    .eq("nhi_number", nhi)
    .maybeSingle();

  if (error || !patient) {
    return {
      patientId: null as number | null,
      bar: {
        name: "",
        dob: "",
        age: "",
        gender: "",
        ethnicity: "",
        nhi: "",
        address: "",
      },
    };
  }

  const pid = patient.patient_id as number;

  const [nameRes, addrRes] = await Promise.all([
    supabase
      .from("Patient Name")
      .select("given_name,family_name")
      .eq("PATIENTpatient_id", pid)
      .limit(1)
      .maybeSingle(),
    supabase
      .from("Patient Address")
      .select("line1,line2,suburb,city,postal_code,country")
      .eq("PATIENTpatient_id", pid)
      .limit(1)
      .maybeSingle(),
  ]);

  const nm = nameRes.data as {
    given_name?: string | null;
    family_name?: string | null;
  } | null;
  const fullName =
    nm && (nm.family_name || nm.given_name)
      ? `${nm.family_name ?? ""}${nm.family_name && nm.given_name ? ", " : ""}${nm.given_name ?? ""}`.trim()
      : "";

  const ad = addrRes.data as Record<string, unknown> | null;
  const addrParts = ad
    ? [
        ad.line1,
        ad.line2,
        ad.suburb,
        ad.city,
        ad.postal_code != null ? String(ad.postal_code) : null,
        ad.country,
      ].filter((x): x is string => typeof x === "string" && x.trim() !== "")
    : [];

  return {
    patientId: pid,
    bar: {
      name: fullName,
      dob: formatNZDate(patient.date_of_birth as string | null),
      age: ageFromDob(patient.date_of_birth as string | null),
      gender: String(patient.gender ?? ""),
      ethnicity: String(patient.ethnicity ?? ""),
      nhi: String(patient.nhi_number ?? ""),
      address: addrParts.length > 0 ? addrParts.join(", ") : "",
    },
  };
}

function AssessmentNewInner() {
  const searchParams = useSearchParams();
  const nhiParam = searchParams.get("nhi");
  const assessmentIdParam = searchParams.get("assessmentId");

  const parsedAssessmentId = assessmentIdParam
    ? Number(assessmentIdParam)
    : null;
  const assessmentId =
    parsedAssessmentId != null &&
    Number.isInteger(parsedAssessmentId) &&
    parsedAssessmentId > 0
      ? parsedAssessmentId
      : null;

  const [fetching, setFetching] = useState(
    Boolean(nhiParam) || assessmentId != null
  );
  const [loadError, setLoadError] = useState<string | null>(null);
  const [patientId, setPatientId] = useState<number | null>(null);
  const [resolvedNhi, setResolvedNhi] = useState<string | null>(nhiParam);
  const [initialExam, setInitialExam] = useState<UiExam | null>(null);
  const [initialComments, setInitialComments] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  const [bar, setBar] = useState({
    name: "",
    dob: "",
    age: "",
    gender: "",
    ethnicity: "",
    nhi: "",
    address: "",
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!nhiParam && assessmentId == null) {
        setPatientId(null);
        setResolvedNhi(null);
        setInitialExam(null);
        setInitialComments("");
        setReadOnly(false);
        setLoadError(null);
        setFetching(false);
        return;
      }

      setFetching(true);
      setLoadError(null);

      try {
        if (assessmentId != null) {
          const ctx = await loadAssessmentContext(assessmentId);
          if (cancelled) return;

          if (!ctx) {
            setLoadError("Assessment not found.");
            setPatientId(null);
            setResolvedNhi(null);
            setInitialExam(null);
            setInitialComments("");
            setReadOnly(false);
            setFetching(false);
            return;
          }

          const loaded = await loadPatientBar(ctx.nhi);
          if (cancelled) return;

          setPatientId(ctx.patientId);
          setResolvedNhi(ctx.nhi);
          setInitialExam(ctx.exam);
          setInitialComments(ctx.comments);
          setReadOnly(ctx.isFinalised);
          setBar(loaded.bar);
          setFetching(false);
          return;
        }

        if (nhiParam) {
          const loaded = await loadPatientBar(nhiParam);
          if (cancelled) return;

          setPatientId(loaded.patientId);
          setResolvedNhi(nhiParam);
          setInitialExam(null);
          setInitialComments("");
          setReadOnly(false);
          setBar(loaded.bar);
          setFetching(false);
        }
      } catch (e) {
        if (cancelled) return;
        setLoadError(e instanceof Error ? e.message : "Failed to load assessment.");
        setFetching(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [nhiParam, assessmentId]);

  return (
    <AuthGuard>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F6F4EC",
        }}
      >
        <Header />
        <PatientAssessmentBar
          name={bar.name}
          dob={bar.dob}
          age={bar.age}
          gender={bar.gender}
          ethnicity={bar.ethnicity}
          nhi={bar.nhi}
          address={bar.address}
          loading={fetching}
        />
        {loadError ? (
          <div
            style={{
              padding: "24px",
              color: "#DC2626",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            {loadError}
          </div>
        ) : (
          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AssessmentForm
              patientId={patientId}
              patientNhi={resolvedNhi}
              initialAssessmentId={assessmentId}
              initialExam={initialExam}
              initialComments={initialComments}
              readOnly={readOnly}
            />
          </div>
        )}
      </div>
    </AuthGuard>
  );
}

export default function AssessmentNewClient() {
  return (
    <AuthGuard>
      <Suspense
        fallback={
          <div style={{ minHeight: "100vh", backgroundColor: "#F6F4EC" }}>
            <Header />
            <PatientAssessmentBar
              name="—"
              dob="—"
              age="—"
              gender="—"
              ethnicity="—"
              nhi="—"
              address="—"
              loading
            />
          </div>
        }
      >
        <AssessmentNewInner />
      </Suspense>
    </AuthGuard>
  );
}
