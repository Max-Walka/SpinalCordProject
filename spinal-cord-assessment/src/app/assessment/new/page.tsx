"use client";

import Header from "@/components/layout/Header";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentButtons from "@/components/assessment/AssessmentButtons";
export default function AssessmentPage() {
  return (
    <div>
      <Header />

      <div style={{ padding: "0px" }}>
        <AssessmentForm />
      </div>
    </div>

  );

  const exportPDF = () => {
    console.log("export");
};

const saveDraft = () => {
    console.log("draft");
};

const saveFinal = () => {
    console.log("final");
};
  <AssessmentButtons
    onExportPDF={exportPDF}
    onSaveDraft={saveDraft}
    onSaveFinal={saveFinal}
/>
}