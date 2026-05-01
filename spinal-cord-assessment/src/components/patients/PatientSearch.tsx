"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Patient = {
  id: number;
  name: string;
  nhi: string;
  dob: string;
  gender: string;
  gp: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export default function PatientSearch() {
  const [nhi, setNhi] = useState("");

  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setPatient(null);

    try {
      // ✅ REQUIRE NHI
      if (!nhi) {
        setError("Enter an NHI number");
        setLoading(false);
        return;
      }

      // 🔹 SEARCH BY NHI ONLY
      const { data, error } = await supabase
        .from("Patient")
        .select("*")
        .eq("nhi_number", nhi.toUpperCase())
        .limit(1);

      if (error) throw error;

      if (!data || data.length === 0) {
        setError("No patient found");
        setLoading(false);
        return;
      }

      const patientRow = data[0];

      // 🔹 GET NAME
      const { data: nameData } = await supabase
        .from("Patient Name")
        .select("given_name, family_name")
        .eq("PATIENTpatient_id", patientRow.patient_id)
        .limit(1);

      // 🔹 GET GP
      const { data: gpData } = await supabase
        .from("GP Enrollment")
        .select("hpi_practitioner_id")
        .eq("PATIENTpatient_id", patientRow.patient_id)
        .limit(1);

      const fullName = nameData?.[0]
        ? `${nameData[0].given_name} ${nameData[0].family_name}`
        : "Unknown";

      const gp = gpData?.[0]?.hpi_practitioner_id || "Not assigned";

      setPatient({
        id: patientRow.patient_id,
        name: fullName,
        nhi: patientRow.nhi_number,
        dob: formatDate(patientRow.date_of_birth),
        gender: patientRow.gender,
        gp: gp,
      });
    } catch (err: any) {
      setError(err.message || "Search failed");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "0 16px",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "20px" }}>
        Patient Search
      </h1>

      {/* Card */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D6D6",
          padding: "24px",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Patient Lookup</h2>

        {/* NHI Input */}
        <div style={{ marginBottom: "16px" }}>
          <label>NHI Number</label>
          <input
            value={nhi}
            onChange={(e) => setNhi(e.target.value)}
            placeholder="e.g. ABC1234"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #D6D6D6",
            }}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSearch}
          style={{
            width: "100%",
            backgroundColor: "#2D3E5E",
            color: "white",
            padding: "12px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Searching..." : "Search Patient"}
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}
      </div>

      {/* Result */}
      {patient && (
        <div
          style={{
            marginTop: "24px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #D6D6D6",
            padding: "20px",
          }}
        >
          <div style={{ color: "green", marginBottom: "10px" }}>
            ✔ Patient Found
          </div>

          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>NHI:</strong> {patient.nhi}</p>
          <p><strong>DOB:</strong> {patient.dob}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>GP:</strong> {patient.gp}</p>
        </div>
      )}
    </div>
  );
}