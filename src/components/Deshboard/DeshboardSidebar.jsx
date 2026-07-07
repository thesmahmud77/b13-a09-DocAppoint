"use client";
import { useSession } from "@/lib/auth-client";
import { Circles3Plus, Sparkles } from "@gravity-ui/icons";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const DeshboardSidebar = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname();

  if (!user) {
    redirect("/auth/signin");
  }

  const userItems = [
    { icon: Circles3Plus, label: "Overview", href: "/user" },
    { icon: Sparkles, label: "My Bookings", href: "/user/my-bookings" },
  ];

  return (
    <aside className="flex flex-col gap-1 px-5 py-8 min-h-screen w-[220px] rounded-2xl bg-white border border-gray-100 shadow-sm">
      {userItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon
              className={`size-5 ${isActive ? "text-white" : "text-gray-400"}`}
            />
            {item.label}
          </Link>
        );
      })}
    </aside>
  );
};

export default DeshboardSidebar;
