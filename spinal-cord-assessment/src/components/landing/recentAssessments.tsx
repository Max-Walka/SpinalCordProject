"use client";

<<<<<<< HEAD
import { useEffect, useMemo, useState } from "react";
=======
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import {
  DEFAULT_CLINICIAN_PATIENT_FILTER,
  type ClinicianPatientFilter,
} from "@/lib/clinicianPatientFilter";
import TablePagination from "@/components/landing/TablePagination";

const PAGE_SIZE = 12;

type RecentAssessmentsProps = {
  clinicianPatientFilter?: ClinicianPatientFilter;
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
  nhi_number: string;
};

type PatientNameRow = {
  PATIENTpatient_id: number;
  given_name: string;
  family_name: string;
};

type RecentAssessmentDisplay = {
  id: number;
  patientId: number;
  nhiNumber: string;
  patientName: string;
  date: string;
<<<<<<< HEAD
  dateRaw: string;
=======
  assessmentDateMs: number;
  versionNum: number;
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
  versionNumber: string;
  status: string;
};

<<<<<<< HEAD
type SortKey = "nhiNumber" | "patientName" | "date" | "status";
type SortDir = "asc" | "desc";
=======
type DateSortChoice = "date_latest_first" | "date_earliest_first";
type VersionSortChoice = "version_newest" | "version_oldest";
type StatusFilterChoice = "status_draft" | "status_finalised";

type DashboardFilterSelections = {
  date: DateSortChoice | null;
  version: VersionSortChoice | null;
  status: StatusFilterChoice | null;
};
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function StatusIndicator({ status }: { status: string }) {
  const upper = status.toUpperCase();

  if (upper === "FINALISED") {
    return (
      <span className="status-indicator status-indicator-finalised">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        Finalised
      </span>
    );
  }

  if (upper === "DRAFT") {
    return (
      <span className="status-indicator status-indicator-draft">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        Draft
      </span>
    );
  }

  if (upper === "IN PROGRESS") {
    return (
      <span className="status-indicator status-indicator-in-progress">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
        In Progress
      </span>
    );
  }

  return (
    <span className="status-indicator status-indicator-default">
      {status}
    </span>
  );
}

function SkeletonRows({ count, cols }: { count: number; cols: number }) {
  const widths = ["skeleton-bar-medium", "skeleton-bar-full", "skeleton-bar-short", "skeleton-bar-short", "skeleton-bar-short", "skeleton-bar-short"];
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <tr key={i} className="skeleton-row">
          {Array.from({ length: cols }).map((_, j) => (
            <td key={j}>
              <div className={`skeleton-bar ${widths[j] ?? "skeleton-bar-medium"}`} />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default function RecentAssessments({
  clinicianPatientFilter = DEFAULT_CLINICIAN_PATIENT_FILTER,
}: RecentAssessmentsProps) {
  const router = useRouter();

  const [rows, setRows] = useState<RecentAssessmentDisplay[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
=======
  const requestSeqRef = useRef(0);

  const [filterSelections, setFilterSelections] = useState<DashboardFilterSelections>({
    date: "date_latest_first",
    version: null,
    status: null,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filterSections: {
    heading: string;
    sectionKey: keyof DashboardFilterSelections;
    options: {
      value: NonNullable<DashboardFilterSelections[keyof DashboardFilterSelections]>;
      label: string;
    }[];
  }[] = [
    {
      heading: "Date",
      sectionKey: "date",
      options: [
        { value: "date_earliest_first", label: "Earliest" },
        { value: "date_latest_first", label: "Latest" },
      ],
    },
    {
      heading: "Version",
      sectionKey: "version",
      options: [
        { value: "version_oldest", label: "Oldest" },
        { value: "version_newest", label: "Newest" },
      ],
    },
    {
      heading: "Status",
      sectionKey: "status",
      options: [
        { value: "status_draft", label: "Draft" },
        { value: "status_finalised", label: "Finalised" },
      ],
    },
  ];
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownOpen]);

  function toggleFilterOption(
    sectionKey: keyof DashboardFilterSelections,
    value: DateSortChoice | VersionSortChoice | StatusFilterChoice
  ) {
    setFilterSelections((prev) => {
      if (sectionKey === "date") {
        const v = value as DateSortChoice;
        return { ...prev, date: prev.date === v ? null : v };
      }
      if (sectionKey === "version") {
        const v = value as VersionSortChoice;
        return { ...prev, version: prev.version === v ? null : v };
      }
      const v = value as StatusFilterChoice;
      return { ...prev, status: prev.status === v ? null : v };
    });
  }

  const clinicianFilterKey = useMemo(() => {
    if (clinicianPatientFilter.status === "all") return "all";
    if (clinicianPatientFilter.status === "loading") return "loading";
    return `ready:${[...clinicianPatientFilter.patientIds].sort((a, b) => a - b).join(",")}`;
  }, [clinicianPatientFilter]);

  const uiFilterKey = useMemo(
    () => `${filterSelections.date ?? "none"}|${filterSelections.version ?? "none"}|${filterSelections.status ?? "none"}`,
    [filterSelections]
  );

  const prevFilterKeyRef = useRef<string | null>(null);
  useEffect(() => {
    const combinedKey = `${clinicianFilterKey}::${uiFilterKey}`;
    const filterChanged =
      prevFilterKeyRef.current !== null && prevFilterKeyRef.current !== combinedKey;
    prevFilterKeyRef.current = combinedKey;

    if (filterChanged && page !== 1) {
      setPage(1);
      return;
    }

    async function fetchRecentAssessments() {
<<<<<<< HEAD
      if (!supabase) {
        setError("Supabase is not configured.");
        setLoading(false);
=======
      const reqId = ++requestSeqRef.current;

      if (clinicianPatientFilter.status === "loading") {
        if (reqId !== requestSeqRef.current) return;
        setLoading(true);
        setRows([]);
        setTotalCount(0);
        setError(null);
        return;
      }

      if (clinicianPatientFilter.status === "ready" && clinicianPatientFilter.patientIds.size === 0) {
        if (reqId !== requestSeqRef.current) return;
        setRows([]);
        setTotalCount(0);
        setLoading(false);
        setError(null);
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
        return;
      }

      setLoading(true);
      setError(null);

      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      let assessmentQuery = supabase
        .from("Assessment")
        .select(
          "assessment_id, assessment_date, status, current_version, PATIENTpatient_id",
          { count: "exact" }
        )
        .range(from, to);

      if (filterSelections.status === "status_draft") {
        assessmentQuery = assessmentQuery.eq("status", "DRAFT");
      } else if (filterSelections.status === "status_finalised") {
        assessmentQuery = assessmentQuery.in("status", ["FINALISED", "FINALIZED", "FINAL"]);
      }

      if (filterSelections.date) {
        assessmentQuery = assessmentQuery.order("assessment_date", {
          ascending: filterSelections.date === "date_earliest_first",
        });
        if (filterSelections.version) {
          assessmentQuery = assessmentQuery.order("current_version", {
            ascending: filterSelections.version === "version_oldest",
          });
        }
      } else if (filterSelections.version) {
        assessmentQuery = assessmentQuery
          .order("current_version", {
            ascending: filterSelections.version === "version_oldest",
          })
          .order("assessment_date", { ascending: false });
      } else {
        assessmentQuery = assessmentQuery.order("assessment_date", { ascending: false });
      }

      if (
        clinicianPatientFilter.status === "ready" &&
        clinicianPatientFilter.patientIds.size > 0
      ) {
        assessmentQuery = assessmentQuery.in(
          "PATIENTpatient_id",
          Array.from(clinicianPatientFilter.patientIds)
        );
      }

      const { data: assessmentData, error: assessmentError, count } = await assessmentQuery;

      if (reqId !== requestSeqRef.current) return;

      if (assessmentError) {
        setError(`Assessment query failed: ${assessmentError.message}`);
        setLoading(false);
        return;
      }

      setTotalCount(count ?? 0);

      const assessments = (assessmentData ?? []) as AssessmentRow[];
      const totalMatching = count ?? 0;

      if (assessments.length === 0 && page > 1 && totalMatching > 0) {
        setPage(1);
        setLoading(false);
        return;
      }

      if (assessments.length === 0) {
        setRows([]);
        setLoading(false);
        return;
      }

      const patientIds = [...new Set(assessments.map((a) => a.PATIENTpatient_id))];

      const { data: patientData, error: patientError } = await supabase
        .from("Patient")
        .select("patient_id, nhi_number")
        .in("patient_id", patientIds);

      if (reqId !== requestSeqRef.current) return;

      if (patientError) {
        setError(`Patient query failed: ${patientError.message}`);
        setLoading(false);
        return;
      }

      const { data: patientNameData, error: patientNameError } = await supabase
        .from("Patient Name")
        .select("PATIENTpatient_id, given_name, family_name")
        .in("PATIENTpatient_id", patientIds);

      if (reqId !== requestSeqRef.current) return;

      if (patientNameError) {
        setError(`Patient Name query failed: ${patientNameError.message}`);
        setLoading(false);
        return;
      }

      const patients = (patientData ?? []) as PatientRow[];
      const patientNames = (patientNameData ?? []) as PatientNameRow[];

      const patientMap = new Map<number, PatientRow>();
      patients.forEach((p) => patientMap.set(p.patient_id, p));

      const nameMap = new Map<number, PatientNameRow>();
      patientNames.forEach((n) => nameMap.set(n.PATIENTpatient_id, n));

      const mappedRows: RecentAssessmentDisplay[] = assessments.map((a) => {
        const patient = patientMap.get(a.PATIENTpatient_id);
        const name = nameMap.get(a.PATIENTpatient_id);
        const parsed = new Date(a.assessment_date).getTime();

        return {
          id: a.assessment_id,
          patientId: a.PATIENTpatient_id,
          nhiNumber: patient?.nhi_number ?? "N/A",
          patientName: name
            ? `${name.given_name} ${name.family_name}`
            : `Patient #${a.PATIENTpatient_id}`,
          date: formatDate(a.assessment_date),
<<<<<<< HEAD
          dateRaw: a.assessment_date,
=======
          assessmentDateMs: Number.isNaN(parsed) ? 0 : parsed,
          versionNum: a.current_version,
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
          versionNumber: `v${a.current_version}`,
          status: a.status,
        };
      });

      setRows(mappedRows);
      setLoading(false);
    }

    fetchRecentAssessments();
  }, [clinicianFilterKey, uiFilterKey, page, clinicianPatientFilter, filterSelections]);

<<<<<<< HEAD
  const filteredAndSorted = useMemo(() => {
    let result = rows;

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (r) =>
          r.nhiNumber.toLowerCase().includes(term) ||
          r.patientName.toLowerCase().includes(term)
      );
    }

    result = [...result].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "nhiNumber":
          cmp = a.nhiNumber.localeCompare(b.nhiNumber);
          break;
        case "patientName":
          cmp = a.patientName.localeCompare(b.patientName);
          break;
        case "date":
          cmp = a.dateRaw.localeCompare(b.dateRaw);
          break;
        case "status":
          cmp = a.status.localeCompare(b.status);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [rows, searchTerm, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function sortIndicator(key: SortKey) {
    if (sortKey !== key) return <span className="sort-arrow">&darr;</span>;
    return (
      <span className="sort-arrow sort-arrow-active">
        {sortDir === "asc" ? "\u2191" : "\u2193"}
      </span>
    );
  }

  const headerCellStyle: React.CSSProperties = {
=======
  const headerCellStyle: CSSProperties = {
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
    padding: "14px 12px",
    minHeight: "48px",
    fontWeight: 600,
    position: "sticky",
    top: 0,
    backgroundColor: "#FFFFFF",
    zIndex: 2,
    textAlign: "left",
    borderBottom: "1px solid #D6D6D6",
  };

  const headerVersionCellStyle: CSSProperties = {
    ...headerCellStyle,
    textAlign: "center",
  };

  const bodyCellStyle: CSSProperties = {
    padding: "14px 12px",
    minHeight: "48px",
    verticalAlign: "middle",
    textAlign: "left",
  };

  const bodyVersionCellStyle: CSSProperties = {
    ...bodyCellStyle,
    textAlign: "center",
  };

  const colSpan = 6;

  function handleRowKeyDown(e: React.KeyboardEvent, patientId: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(`/history/${patientId}`);
    }
  }

  function handleActionClick(e: React.MouseEvent, row: RecentAssessmentDisplay) {
    e.stopPropagation();
    if (row.status.toUpperCase() === "DRAFT") {
      router.push(`/assessment?assessmentId=${row.id}`);
    } else {
      router.push(`/history/${row.patientId}`);
    }
  }

  return (
    <div
      className="dashboard-card"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D6D6D6",
        borderRadius: "8px",
        padding: "18px",
        color: "#15284C",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          margin: "0 0 14px 0",
          flexShrink: 0,
<<<<<<< HEAD
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Recent Assessments
        {!loading && rows.length > 0 && (
          <span style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#6B7280",
            backgroundColor: "#F3F4F6",
            borderRadius: "10px",
            padding: "1px 8px",
          }}>
            {rows.length}
          </span>
        )}
      </h2>
=======
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Recent Assessments
        </h2>
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((o) => !o)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #D6D6D6",
              borderRadius: "6px",
              padding: "8px 12px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#15284C",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Filter
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              style={{
                transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.15s ease",
              }}
            >
              <path d="M2 4L6 8L10 4" stroke="#15284C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {dropdownOpen && (
            <div
              role="menu"
              aria-label="Filter and sort recent assessments"
              style={{
                position: "absolute",
                top: "calc(100% + 4px)",
                right: 0,
                backgroundColor: "#FFFFFF",
                border: "1px solid #D6D6D6",
                borderRadius: "6px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                zIndex: 10,
                minWidth: "200px",
                overflow: "hidden",
                padding: "6px 0",
              }}
            >
              {filterSections.map((section, i) => (
                <div key={section.heading} role="group" aria-label={section.heading}>
                  {i > 0 && (
                    <div style={{ height: "1px", backgroundColor: "#E5E7EB", margin: "6px 0" }} />
                  )}
                  <div
                    style={{
                      padding: "6px 14px 4px",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#15284C",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {section.heading}
                  </div>
                  {section.options.map((opt) => {
                    const selected = filterSelections[section.sectionKey] === opt.value;
                    return (
                      <button
                        key={String(opt.value)}
                        type="button"
                        role="menuitemcheckbox"
                        aria-checked={selected}
                        onClick={() => toggleFilterOption(section.sectionKey, opt.value)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 14px 8px 14px",
                          fontSize: "14px",
                          fontWeight: 400,
                          fontFamily: "inherit",
                          color: "#15284C",
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#F3F4F6";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: `2px solid ${selected ? "#15284C" : "#D1D5DB"}`,
                            backgroundColor: selected ? "#15284C" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxSizing: "border-box",
                          }}
                        >
                          {selected ? (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : null}
                        </span>
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806

      <div style={{ position: "relative", marginBottom: "14px", flexShrink: 0 }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search by NHI or name..."
          aria-label="Search patients"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
            className="btn"
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              padding: "4px",
              fontSize: "18px",
              lineHeight: 1,
              color: "#6B7280",
            }}
          >
            &times;
          </button>
        )}
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            fontSize: "14px",
            color: "#15284C",
          }}
        >
          <thead>
            <tr>
<<<<<<< HEAD
              <th scope="col" style={headerCellStyle} className="sortable-header" onClick={() => toggleSort("nhiNumber")}>
                NHI Number {sortIndicator("nhiNumber")}
              </th>
              <th scope="col" style={headerCellStyle} className="sortable-header" onClick={() => toggleSort("patientName")}>
                Patient Name {sortIndicator("patientName")}
              </th>
              <th scope="col" style={headerCellStyle} className="sortable-header" onClick={() => toggleSort("date")}>
                Date {sortIndicator("date")}
              </th>
              <th scope="col" style={headerCellStyle}>Version</th>
              <th scope="col" style={headerCellStyle} className="sortable-header" onClick={() => toggleSort("status")}>
                Status {sortIndicator("status")}
              </th>
              <th scope="col" style={{ ...headerCellStyle, textAlign: "right" }}>Action</th>
=======
              <th style={headerCellStyle}>NHI Number</th>
              <th style={headerCellStyle}>Patient Name</th>
              <th style={headerCellStyle}>Date</th>
              <th style={headerVersionCellStyle}>Version Number</th>
              <th style={headerCellStyle}>Status</th>
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <SkeletonRows count={6} cols={colSpan} />
            ) : error ? (
              <tr>
                <td colSpan={colSpan} style={{ padding: "24px", textAlign: "center", color: "red" }}>
                  {error}
                </td>
              </tr>
<<<<<<< HEAD
            ) : filteredAndSorted.length === 0 ? (
=======
            ) : rows.length === 0 && totalCount === 0 ? (
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
              <tr>
                <td colSpan={colSpan}>
                  <div className="empty-state">
                    <svg className="empty-state-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <div className="empty-state-text">
                      {searchTerm
                        ? `No patients match "${searchTerm}"`
                        : "No assessments yet"}
                    </div>
                    {!searchTerm && (
                      <button className="empty-state-cta">
                        + New Patient
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: "24px", textAlign: "center", color: "#6B7280" }}>
                  No assessments match this filter.
                </td>
              </tr>
            ) : (
<<<<<<< HEAD
              filteredAndSorted.map((row) => {
                const isDraft = row.status.toUpperCase() === "DRAFT";
                return (
                  <tr
                    key={row.id}
                    className="clickable-row"
                    role="link"
                    tabIndex={0}
                    aria-label={`View patient ${row.patientName}`}
                    onClick={() => router.push(`/history/${row.patientId}`)}
                    onKeyDown={(e) => handleRowKeyDown(e, row.patientId)}
                  >
                    <td className="nhi-cell" style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.nhiNumber}</td>
                    <td
                      style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB", maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      title={row.patientName}
                    >
                      {row.patientName}
                    </td>
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.date}</td>
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.versionNumber}</td>
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>
                      <StatusIndicator status={row.status} />
                    </td>
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB", textAlign: "right" }}>
                      <button
                        className="row-action-btn"
                        onClick={(e) => handleActionClick(e, row)}
                        aria-label={isDraft ? `Continue draft for ${row.patientName}` : `View ${row.patientName}`}
                      >
                        {isDraft ? "Continue Draft" : "View"}
                      </button>
                    </td>
                  </tr>
                );
              })
=======
              <>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => router.push(`/history/${row.patientId}`)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F8FAFC";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.nhiNumber}</td>
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.patientName}</td>
                    <td style={{ ...bodyCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.date}</td>
                    <td style={{ ...bodyVersionCellStyle, borderBottom: "1px solid #E5E7EB" }}>{row.versionNumber}</td>
                    <td
                      style={{
                        ...bodyCellStyle,
                        borderBottom: "1px solid #E5E7EB",
                        color: getStatusColor(row.status),
                      }}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </>
>>>>>>> f3e83f65b8bd27a194e1f88bad6d30304196e806
            )}
          </tbody>
        </table>
      </div>

      {!loading && !error && totalCount > 0 && (
        <TablePagination
          page={page}
          totalCount={totalCount}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
