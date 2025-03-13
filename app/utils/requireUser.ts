import { redirect } from "next/navigation";
import { auth } from "./auth";

export default async function requireUser() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return session.user;
}
