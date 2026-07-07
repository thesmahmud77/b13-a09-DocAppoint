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
    <div className="w-full max-w-3xl mx-auto my-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 relative"></div>

      <div className="relative px-6 md:px-8 pb-8">
        {/* অ্যাভাটার */}
        <div className="absolute -top-12 left-6 md:left-8">
          <img
            src={user.image}
            alt={user.name}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white object-cover bg-gray-100 shadow-md"
          />
        </div>

        {/* Edit বাটন সারি — অ্যাভাটার এর সাথে align রাখতে top padding দেওয়া হলো */}
        <div className="flex justify-end pt-4">
          <Link
            href={"/update-user"}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm active:scale-95"
          >
            Edit Profile
          </Link>
        </div>

        {/* নাম সেকশন — অ্যাভাটারের নিচে ক্লিয়ার স্পেস রাখতে pt যোগ করা হলো */}
        <div className="mt-8 md:mt-6">
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
            Verified Patient
          </p>
        </div>

        <hr className="my-6 border-gray-100" />

        {/* ইনফো কার্ড — বড় স্ক্রিনে ২ কলাম, মোবাইলে ১ কলাম */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0">
              <LuCircleUserRound className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Full Name
              </p>
              <p className="text-base font-semibold text-gray-800 truncate">
                {user.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0">
              <HiOutlineMail className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email Address
              </p>
              <p className="text-base font-semibold text-gray-800 truncate">
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
