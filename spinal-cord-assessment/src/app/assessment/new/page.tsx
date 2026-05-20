import { Suspense } from "react";
import AssessmentNewClient from "./AssessmentNewClient";

export default function AssessmentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AssessmentNewClient />
    </Suspense>
  );
}