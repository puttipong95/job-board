"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import UserTypeForm from "./UserTypeForm";
import CompanyForm from "./CompanyForm";
import JobSeekerForm from "./JobSeekerForm";

type UserSelectionType = "company" | "jobSeeker" | null;

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  const handleUserTypeSelection = (type: UserSelectionType) => {
    setUserType(type);
    setStep(2);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserTypeForm onSelect={handleUserTypeSelection} />;
      case 2:
        return userType === "company" ? <CompanyForm /> : <JobSeekerForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Image src={logo} alt="JobBoard Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Job<span className="text-primary">Board</span>
        </h1>
      </div>

      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
};

export default OnboardingForm;
