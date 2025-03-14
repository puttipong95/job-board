"use server";

import { prisma } from "@/app/utils/db";
import requireUser from "@/app/utils/requireUser";
import { companySchema } from "@/app/utils/zodSchemas";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createCompany = async (data: z.infer<typeof companySchema>) => {
  const session = await requireUser();
  const validateData = companySchema.parse(data);

  await prisma.user.update({
    where: {
      id: session?.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validateData,
        },
      },
    },
  });

  return redirect("/");
};
