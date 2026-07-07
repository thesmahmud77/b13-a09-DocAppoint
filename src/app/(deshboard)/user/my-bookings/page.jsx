"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import Swal from "sweetalert2";
import Link from "next/link";

const MyBookings = () => {
  const { data: sessionData, isPending: sessionPending } = useSession();
  const user = sessionData?.user;

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:8080/appointments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setIsLoading(false);
      });
  }, [user?.email]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:8080/appointments/${id}`, {
            method: "DELETE",
          });

          if (res.ok) {
            setBookings((prev) => prev.filter((booking) => booking._id !== id));

            Swal.fire({
              title: "Deleted!",
              text: "Your appointment has been deleted.",
              icon: "success",
              confirmButtonColor: "#3b82f6",
            });
          }
        } catch (error) {
          console.error("Delete failed:", error);
        }
      }
    });
  };

  if (sessionPending || isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm font-medium">
          Loading your bookings...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <main className="flex-1 p-8 md:p-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and track your scheduled appointments
            </p>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-16 text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-xl mx-auto">
            No appointments booked yet.
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                        booking.status === "pending"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {booking.status
                        ? booking.status.toUpperCase()
                        : "CONFIRMED"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    {booking.docPhoto && (
                      <img
                        src={booking.docPhoto}
                        alt={booking.doctorName}
                        className="w-12 h-12 rounded-full object-cover border border-gray-100"
                      />
                    )}
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                      {booking.doctorName}
                    </h3>
                  </div>

                  {/* ডাইনামিক কন্টেন্ট ফিল্ডস */}
                  <div className="space-y-2.5 text-sm border-t border-gray-50 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">
                        Patient:
                      </span>
                      <span className="text-gray-700 font-semibold">
                        {booking.patientName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Date:</span>
                      <span className="text-gray-700 font-semibold">
                        {booking.date}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-medium">Time:</span>
                      <span className="text-gray-700 font-semibold">
                        {booking.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* অ্যাকশন বাটন */}
                <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-gray-50">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="px-8 py-3 bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 text-sm font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/update-appoinments/${booking._id}`}
                    className="px-8 py-2.5 border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Update
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyBookings;
