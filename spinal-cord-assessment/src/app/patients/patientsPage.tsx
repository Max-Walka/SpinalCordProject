import PatientSearch from "@/components/patients/PatientSearch";
import AuthGuard from "@/components/AuthGuard";

export default function PatientsPage() {
  return (
    <AuthGuard>
    <div className="p-6">
      <h1 className="text-xl font-semibold">Patient Search</h1>

      <PatientSearch />
    </div>
    </AuthGuard>
  );
}