"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, isPending } = useSession();

  const user = data?.user;

  return (
    <nav className="w-full border-b border-gray-700/10 bg-background px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link
            className="text-xl font-bold text-primary tracking-wide"
            href={"/"}
          >
            CareConnect
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-default-600">
          <Link className="hover:text-primary transition-colors" href={"/"}>
            Home
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href={"/doctors"}
          >
            Doctors
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href={"/deshboard"}
          >
            Deshboard
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <Button
              onClick={() => signOut()}
              variant="flat"
              color="danger"
              size="sm"
              className="font-medium"
            >
              Logout
            </Button>
          ) : (
            <div className="flex items-center gap-4 text-sm font-medium">
              <Link
                className="hover:text-primary transition-colors"
                href={"/auth/signin"}
              >
                Login
              </Link>
              <Link
                className="hover:text-primary transition-colors"
                href={"/auth/signup"}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
