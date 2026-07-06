"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { LuCircleUserRound } from "react-icons/lu";

const MyProfile = () => {
  const { data, isPending } = useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-2">
        <p className="text-gray-500 text-sm font-medium">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
        <h1>User Not Found, Please Login First</h1>
      </div>
    );
  }

  return (
    <div className="w-[1000px] mx-auto my-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-indigo-500 to-blue-600 relative"></div>

      <div className="relative px-6 pb-8">
        <div className="absolute -top-14 left-6">
          <img
            src={user.image}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-white dark:border-zinc-900 object-cover bg-gray-100 shadow-md"
          />
        </div>

        <div className="flex justify-end pt-4">
          <Link
            href={"/update-user"}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm active:scale-95"
          >
            Edit Profile
          </Link>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mt-0.5">
            Verified Patient
          </p>
        </div>

        <hr className="my-6 border-gray-100 dark:border-zinc-800" />

        <div className="grid gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-zinc-800/40 border border-gray-100/50 dark:border-zinc-800/50">
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl text-indigo-600 dark:text-indigo-400"></div>
            <div>
              <p className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
                Full Name
              </p>
              <p className="text-base font-semibold text-gray-800 dark:text-zinc-200">
                {user.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-zinc-800/40 border border-gray-100/50 dark:border-zinc-800/50">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-blue-600 dark:text-blue-400"></div>
            <div>
              <p className="text-xs font-medium text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
                Email Address
              </p>
              <p className="text-base font-semibold text-gray-800 dark:text-zinc-200">
                <HiOutlineMail />
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
