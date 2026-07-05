"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { data: sessionData } = useSession();
  const user = sessionData?.user;

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch appointments filtered by user email directly from server
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
          No appointments found.
        </div>
      ) : (
        /* Grid Layout for Bookings */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 mb-3">
                  Confirmed
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {booking.doctorName}
                </h3>

                <div className="space-y-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-semibold text-gray-400 mr-1">
                      Patient:
                    </span>{" "}
                    {booking.patientName} ({booking.gender})
                  </p>
                  <p>
                    <span className="font-semibold text-gray-400 mr-1">
                      Phone:
                    </span>{" "}
                    {booking.phone}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-400 mr-1">
                      Date:
                    </span>{" "}
                    {booking.appointmentDate}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-400 mr-1">
                      Time:
                    </span>{" "}
                    {booking.appointmentTime}
                  </p>
                </div>
              </div>

              {/* Action Section (Only Delete Button remains) */}
              <div className="mt-6 pt-4 border-t border-gray-50 dark:border-zinc-800">
                <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold py-2.5 rounded-xl transition-colors">
                  Delete Appointment
                </button>
                <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold py-2.5 rounded-xl transition-colors">
                  Edit Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
