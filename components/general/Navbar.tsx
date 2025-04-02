import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
import UserDropdown from "./UserDropdown";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between py-5">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={logo} alt="Logo Job Marshal" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          job<span className="text-primary">Marshal</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
        <Link href={"/post-job"} className={buttonVariants({ size: "lg" })}>
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            image={session.user.image as string}
            name={session.user.name as string}
          />
        ) : (
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
