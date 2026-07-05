"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import Swal from "sweetalert2";
import { useSession } from "@/lib/auth-client";

const BookingModal = ({ doctorId, doctorName, docPhoto }) => {
  const { data } = useSession();
  const user = data?.user; // user একটি অবজেক্ট, একে ফাংশন হিসেবে কল করা যাবে না

  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("pending"); // স্পেলিং ফিক্স করা হয়েছে
  const [loading, setLoading] = useState(false);

  const collectAndSubmit = async () => {
    const formData = {
      doctorId,
      doctorName,
      docPhoto, // ডাটাবেজে ছবির লিংক রাখার জন্য যুক্ত করা হলো
      patientName,
      date,
      time,
      status,
      userEmail: user?.email || "", // অপশনাল চেইনিং ব্যবহার করা হয়েছে যাতে ইউজার না থাকলে ক্র্যাশ না করে
      userName: user?.name || "",
      createdAt: new Date().toISOString(),
    };

    const res = await fetch(
      "https://doc-appoint-server-beta.vercel.app/appointments",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    return res.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // এখানে স্টেট সেটার ফাংশন (setLoading) সঠিকভাবে কল করা হয়েছে

    const success = await collectAndSubmit();

    setLoading(false);

    if (success) {
      Swal.fire({
        title: "Appointment Booked",
        text: "Your appointment has been successfully submitted!",
        icon: "success",
        confirmButtonColor: "#2563eb",
      });
      setIsOpen(false);
      setPatientName("");
      setDate("");
      setTime("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
        confirmButtonColor: "#2563eb",
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full py-6 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg cursor-pointer"
      >
        Book Appointment
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 w-full max-w-md text-gray-800 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Book Appointment</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-red-600 cursor-pointer text-xl"
              >
                ✕
              </button>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center justify-center flex-col mt-2 mb-6">
              <img
                className="w-20 h-20 rounded-full object-cover shadow-sm mb-2"
                src={docPhoto}
                alt={doctorName}
              />
              <p className="text-center text-xl font-bold text-gray-900">
                {doctorName}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Doctor Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-600">
                  Doctor Name
                </label>
                <input
                  type="text"
                  value={doctorName}
                  readOnly
                  className="w-full bg-gray-50 border border-slate-200 rounded-xl p-3 text-gray-500 focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full border text-black border-slate-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-slate-300 rounded-xl p-3 text-black focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Select Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full border border-slate-300 rounded-xl p-3 text-black focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 rounded-xl border cursor-pointer border-slate-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-xl text-white cursor-pointer bg-blue-600 hover:bg-blue-700 font-bold disabled:opacity-50 transition-colors shadow-sm"
                >
                  {loading ? "Booking..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
s;
