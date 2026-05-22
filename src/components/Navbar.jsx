"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <div>Loding.........</div>;
  }
  // console.log(data);

  const user = data?.user;

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Link className="font-bold" href={"/"}>
          CareConnect
        </Link>
      </div>
      <div className="col-span-6 flex items-center justify-center gap-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/doctors"}>Doctors</Link>
        <Link href={"/deshboard"}>Deshboard</Link>
      </div>
      <div className="col-span-3 flex items-center justify-center gap-3">
        {user ? (
          <Button onClick={() => signOut()} variant="dengar">
            Logout
          </Button>
        ) : (
          <div>
            <Link href={"/auth/signin"}>Login</Link>
            <Link href={"/auth/signup"}>Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
