"use client";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const HomeDoctorCard = ({ singleDoctorsData }) => {
  console.log(singleDoctorsData);
  const { image, name, specialty, fee, experience, _id } = singleDoctorsData;
  return (
    <div className="rounded-2xl w-70 border-gray-700 border-2">
      <div>
        <img
          className="w-[350px] h-[200px] rounded-2xl"
          src={image}
          alt={name}
        />
      </div>
      <div className="px-5 py-8">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{specialty}</p>
        </div>
        <div className="flex flex-col items-start justify-center mt-10">
          <p className="flex items-center justify-center gap-2">
            <FaUserGraduate />
            {experience}
          </p>
          <p className="flex items-center justify-center gap-2">
            <RiMoneyDollarBoxLine />
            {fee}
          </p>
          <Link
            href={`/doctor-details/${_id}`}
            className="w-full h-10 m rounded-[10px] bg-green-400 cursor-pointer mt-5 flex items-center justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctorCard;
