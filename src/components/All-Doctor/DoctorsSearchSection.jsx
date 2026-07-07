"use client";
import { useState, useMemo } from "react";
import { HiSearch } from "react-icons/hi";
import AllDoctorCard from "@/components/All-Doctor/AllDoctorCard";

const DoctorsSearchSection = ({ initialDoctors }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!searchTerm.trim()) return initialDoctors;

    const term = searchTerm.toLowerCase();
    return initialDoctors.filter(
      (doctor) =>
        doctor.name?.toLowerCase().includes(term) ||
        doctor.specialty?.toLowerCase().includes(term),
    );
  }, [searchTerm, initialDoctors]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <p className="md:col-span-8 text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          maxime deleniti nostrum perspiciatis, voluptates omnis facere saepe
          aliquid explicabo fugit ipsa, consequuntur sapiente.
        </p>

        <div className="md:col-span-4 w-full border-1 hover:border-3 border-blue-700 rounded-xl">
          <div className="relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg hover:text-blue-700" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or specialty..."
              className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-16 text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm mt-10">
          No doctors found matching "{searchTerm}".
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredDoctors.map((singleDoctorData) => (
            <AllDoctorCard
              key={singleDoctorData._id}
              singleDoctorData={singleDoctorData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsSearchSection;
