"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PersonalDetailsSection from "./PersonalDetailsSection";
import InjuryInformationSection from "./InjuryInformationSection";
import NewPatientActions from "./NewPatientActions";

export type NewPatientFormData = {
  firstName: string;
  lastName: string;
  preferredName: string;
  prefix: string;
  dateOfBirth: string;
  ethnicity: string;
  gender: string;
  nzCitizenshipStatus: string;
  placeOfBirth: string;
  phoneNumber: string;
  homePhoneNumber: string;
  emailAddress: string;
  nhiNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  suburb: string;
  postalCode: string;
  dateOfInjury: string;
  injuryCause: string;
  notes: string;
};

const initialFormData: NewPatientFormData = {
  firstName: "",
  lastName: "",
  preferredName: "",
  prefix: "",
  dateOfBirth: "",
  ethnicity: "",
  gender: "",
  nzCitizenshipStatus: "",
  placeOfBirth: "",
  phoneNumber: "",
  homePhoneNumber: "",
  emailAddress: "",
  nhiNumber: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  suburb: "",
  postalCode: "",
  dateOfInjury: "",
  injuryCause: "",
  notes: "",
};

export default function NewPatientForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<NewPatientFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  const handleReview = () => {
    const encoded = encodeURIComponent(JSON.stringify(formData));
    router.push(`/patients/confirm?data=${encoded}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #5F6F8C",
        padding: 0,
        color: "#15284C",
      }}
    >
      <PersonalDetailsSection formData={formData} onChange={handleChange} />
      <InjuryInformationSection formData={formData} onChange={handleChange} />
      <NewPatientActions onCancel={handleCancel} onReview={handleReview} />
    </div>
  );
}