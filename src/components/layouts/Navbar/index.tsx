"use client";

import AuthMenu from "@/components/organisms/AuthMenu";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="px-32 py-5 flex flex-row items-start justify-between">
      <div className="inline-flex items-center gap-12">
        <div className="cursor-pointer">
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={160}
            height={36}
            onClick={() => router.push("/")}
          />
        </div>
        <div>
          <Link
            href="/find-jobs"
            className="font-normal text-gray-400 mr-4 cursor-pointer hover:text-primary transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            href="/find-companies"
            className="font-normal text-gray-400 mr-4 cursor-pointer hover:text-primary transition-colors"
          >
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="inline-flex items-center gap-4 h-8">
        {session ? (
          <AuthMenu />
        ) : (
          <>
            <Button variant="link" onClick={() => router.push("/signin")}>
              Login
            </Button>
            <Button onClick={() => router.push("signup")}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
