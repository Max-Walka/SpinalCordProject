import { Suspense } from "react";
import AuthGuard from "@/components/AuthGuard";
import AssessmentNewClient from "./new/AssessmentNewClient";

export default function AssessmentPage() {
  return (
    <AuthGuard>
      <Suspense fallback={<div>Loading...</div>}>
        <AssessmentNewClient />
      </Suspense>
    </AuthGuard>
  );
}
