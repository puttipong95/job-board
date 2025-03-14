import OnboardingForm from "@/components/form/onboarding/OnboardingForm";
import React from "react";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";
import requireUser from "../utils/requireUser";

const OnboardingPage = async () => {
  const checkIfUserHasFinishedOnboarding = async (userId: string) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        onboardingCompleted: true,
      },
    });

    if (user?.onboardingCompleted === true) {
      return redirect("/");
    }

    return user;
  };

  const session = await requireUser();
  await checkIfUserHasFinishedOnboarding(session?.id as string);

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
      <OnboardingForm />
    </div>
  );
};

export default OnboardingPage;
