"use client";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const HomeDoctorCard = ({ singleDoctorsData }) => {
  const { image, name, specialty, fee, experience, _id } = singleDoctorsData;
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="w-full h-44 relative">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      <div className="p-5 flex flex-col justify-between min-h-[230px]">
        <div>
          <h1 className="text-lg font-bold text-gray-800 line-clamp-1">
            {name}
          </h1>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-1">
            {specialty}
          </p>
        </div>

        <div className="space-y-2.5 mt-3 text-gray-500 text-sm">
          <p className="flex items-center gap-2">
            <FaUserGraduate className="text-gray-400 text-base" />
            <span>{experience} Experience</span>
          </p>
          <p className="flex items-center gap-2 font-medium text-gray-600">
            <RiMoneyDollarBoxLine className="text-blue-500 text-lg" />
            <span>${fee} / Consultation</span>
          </p>
        </div>

        <div className="mt-4">
          <Link
            href={`/doctor-details/${_id}`}
            className="w-full h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors flex items-center justify-center text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctorCard;
