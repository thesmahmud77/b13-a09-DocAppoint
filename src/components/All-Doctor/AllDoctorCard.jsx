import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const AllDoctorCard = ({ singleDoctorData }) => {
  const { image, name, specialty, fee, experience, _id } = singleDoctorData;

  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden flex flex-col justify-between h-full">
      {/* Image Container */}
      <div className="w-full">
        <img className="w-full h-[220px] object-cover" src={image} alt={name} />
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        {/* Doctor Info */}
        <div className="flex flex-col items-start space-y-1">
          <h1 className="text-xl font-bold text-gray-900">{name}</h1>
          <p className="text-sm font-medium text-gray-500">{specialty}</p>
        </div>
        <div className="flex flex-col items-start gap-2.5 mt-6 text-sm text-gray-700">
          <p className="flex items-center gap-3">
            <FaUserGraduate className="text-gray-500 text-base" />
            <span className="font-medium">{experience} years</span>
          </p>
          <p className="flex items-center gap-3">
            <RiMoneyDollarBoxLine className="text-gray-500 text-base" />
            <span className="font-semibold text-gray-900">${fee}</span>
          </p>
        </div>

        <div className="mt-5">
          <Link
            href={`/doctor-details/${_id}`}
            className="w-full h-11 rounded-lg bg-[#00e676] hover:bg-[#00c853] text-gray-900 font-bold tracking-wide cursor-pointer transition-colors duration-200 flex items-center justify-center text-sm shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllDoctorCard;
