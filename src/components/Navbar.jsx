"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaRegHandPeace } from "react-icons/fa";

const Navbar = () => {
  const { data, isPending } = useSession();
  const user = data?.user;
  const shortName = user?.name?.split(" ").slice(0, 2).join(" ");

  return (
    <nav className="w-full border-b border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link
            className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-wide"
            href={"/"}
          >
            CareConnect
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-500 dark:text-gray-400">
          <Link
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href={"/doctors"}
          >
            Doctors
          </Link>
          {user ? (
            <Link
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href={"/user"}
            >
              Dashboard
            </Link>
          ) : null}
        </div>

        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-base text-gray-700 hidden sm:flex items-center gap-1.5">
            <FaRegHandPeace className="text-lg text-blue-600 rotate-[20deg] w-5 h-5" />{" "}
            {shortName}
          </h1>
          {user ? (
            <Button
              onClick={() => signOut()}
              size="sm"
              className="font-semibold bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50 border border-red-200 dark:border-red-900"
            >
              Logout
            </Button>
          ) : (
            <div className="flex items-center gap-4 text-sm font-semibold">
              <Link
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href={"/auth/signin"}
              >
                Login
              </Link>
              <Link
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
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
