"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

const BookingModal = ({ doctorId, doctorName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("panding");
  const [loading, setLoading] = useState(false);

  const collectAndSubmit = async () => {
    const formData = {
      doctorId,
      doctorName,
      patientName,
      date,
      time,
      status,
    };

    const res = await fetch("http://localhost:8080/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return res.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const success = await collectAndSubmit();

    setLoading(false);

    if (success) {
      alert("Appointment booked successfully!");
      setIsOpen(false);
      setPatientName("");
      setDate("");
      setTime("");
    } else {
      alert("Something went wrong. Try again.");
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#0b1329] border border-slate-700 rounded-2xl p-8 w-full max-w-md text-slate-200">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book Appointment</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-400 mb-6">Dr. {doctorName}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Doctor Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Doctor Name
                </label>
                <input
                  type="text"
                  value={doctorName}
                  readOnly
                  className="w-full bg-[#111c38] border border-slate-700 rounded-xl p-3 text-slate-400 focus:outline-none cursor-not-allowed"
                />
              </div>

              {/* Patient Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full bg-[#111c38] border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-[#111c38] border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Select Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full bg-[#111c38] border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold disabled:opacity-50"
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
