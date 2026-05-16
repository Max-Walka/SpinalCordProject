import { Suspense } from "react";
import Header from "@/components/layout/Header";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AuthGuard from "@/components/AuthGuard";

export default function AssessmentPage() {
  return (
    <AuthGuard>
      <div>
        <Header />

        <Suspense fallback={<div>Loading...</div>}>
          <AssessmentForm />
        </Suspense>
      </div>
    </AuthGuard>
  );
}
