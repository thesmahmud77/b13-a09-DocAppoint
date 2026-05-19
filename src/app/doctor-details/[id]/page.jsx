import { FaRegUser, FaUserCheck } from "react-icons/fa";
import { FaHouseMedicalFlag, FaMapLocationDot } from "react-icons/fa6";
import { GiMedicalPack } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { PiHospitalFill } from "react-icons/pi";

const fetchDetailsDoctor = async (id) => {
  const res = await fetch(`http://localhost:8080/doctors/${id}`);
  const data = res.json();
  return data || {};
};

const page = async ({ params }) => {
  const { id } = await params;
  const doctorDetails = await fetchDetailsDoctor(id);
  const {
    name,
    image,
    specialty,
    experience,
    location,
    hospital,
    description,
    availability,
    education,
  } = doctorDetails;
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className=" profile col-span-4 ">
        <figure>
          <img className="w-200 h-60 rounded-[20px]" src={image} alt="" />
        </figure>
        <div>
          <h1 className="font-bold text-3xl mt-5">{name}</h1>
          <div className="flex items-center justify-between gap-3 mt-5">
            <p className="text-green-600 bg-green-100 border-2 border-green-950 text-center w-50 py-2 font-bold rounded-[10px]">
              {specialty}
            </p>
            <p className="text-green-600 bg-green-100 border-2 border-green-950 text-center w-50 py-2 font-bold rounded-[10px]">
              {experience}
            </p>
          </div>
        </div>
        <div>
          <div className="Experience flex items-start flex-col justify-between my-8 text-[18px]">
            <div>
              <p className="flex items-center justify-center gap-3">
                <HiLocationMarker />
                {location}
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-3">
                <PiHospitalFill />
                {hospital}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 col-span-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center justify-start gap-3">
            <FaRegUser />
            {name}
          </h1>
          <p className="text-[16px] mt-2">"{description}"</p>
        </div>
        <div>
          <div className="divider"></div>
          <div className="flex items-start justify-start gap-2 flex-col">
            <h1 className="text-2xl font-bold">Visiting Time</h1>
            <div className="grid grid-cols-2 gap-5 text-gray-700">
              {availability.map((ava, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 font-bold text-xl mt-1"
                >
                  <span className="mt-1">
                    <IoIosTime />
                  </span>
                  <span>{ava}</span>
                  <div className="divider lg:divider-horizontal"></div>
                </li>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-start justify-start gap-2 flex-col">
            <h1 className="text-2xl font-bold">Education Background</h1>
            <div className="grid grid-cols-1 gap-5 text-gray-700">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 font-bold text-xl mt-1"
                >
                  <span className="mt-1">
                    <FaHouseMedicalFlag />
                  </span>
                  <span>{edu}</span>
                </li>
              ))}
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
