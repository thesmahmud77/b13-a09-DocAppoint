"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const UpdateAppointments = () => {
  const { id } = useParams();
  const router = useRouter();

  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://doc-appoint-server-beta.vercel.app/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching appointment:", err);
        setIsLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch(
        `https://doc-appoint-server-beta.vercel.app/appointments/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            patientName: booking.patientName,
            date: booking.date,
            time: booking.time,
          }),
        },
      );

      if (res.ok) {
        await Swal.fire({
          title: "Updated!",
          text: "Appointment successfully updated.",
          icon: "success",
          confirmButtonColor: "#3b82f6",
        });
        router.push("/user/my-bookings");
      }
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 text-sm font-medium">
          Loading appointment...
        </p>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="text-center py-16 text-gray-500">
        Appointment not found.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50/50 dark:bg-zinc-950">
      <main className="flex-1 p-8 md:p-12 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Update Appointment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-6 shadow-sm flex flex-col gap-4"
        >
          <div>
            <label className="text-sm font-medium text-gray-500">
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              value={booking.patientName || ""}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Date</label>
            <input
              type="date"
              name="date"
              value={booking.date || ""}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Time</label>
            <input
              type="time"
              name="time"
              value={booking.time || ""}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl"
            />
          </div>

          <button
            type="submit"
            disabled={isSaving}
            className="mt-4 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Update Appointment"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default UpdateAppointments;
