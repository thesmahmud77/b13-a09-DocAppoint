"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
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
        <Link href={"/signin"}>Login</Link>
        <Link href={"/signup"}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
