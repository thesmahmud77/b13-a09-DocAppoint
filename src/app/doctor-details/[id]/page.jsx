import BookingModal from "@/components/BookingModal";
import { Button } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { PiHospitalFill } from "react-icons/pi";

// ১. res.json() এর আগে await যুক্ত করা হয়েছে
const fetchDetailsDoctor = async (id) => {
  const res = await fetch(`http://localhost:8080/doctors/${id}`);
  if (!res.ok) return {};
  const data = await res.json();
  return data || {};
};

const page = async ({ params }) => {
  const { id } = await params;
  const doctorDetails = await fetchDetailsDoctor(id);

  // ২. ক্র্যাশ এড়াতে অ্যারেগুলোর জন্য ডিফল্ট এম্পটি অ্যারে [] সেট করা হয়েছে
  const {
    name,
    image,
    specialty,
    experience,
    location,
    hospital,
    description,
    availability = [],
    education = [],
    reviews = [],
  } = doctorDetails;

  return (
    <div className="grid grid-cols-12 gap-10 max-w-7xl mx-auto p-6 text-slate-200">
      {/* Profile Card Section */}
      <div className="profile col-span-4 bg-[#0b1329] p-6 rounded-[20px] border border-slate-800 h-fit">
        <figure>
          {/* w-200 এর বদলে স্ট্যান্ডার্ড w-full ব্যবহার করা হয়েছে */}
          <img
            className="w-full h-60 object-cover rounded-[20px]"
            src={image}
            alt={name}
          />
        </figure>
        <div>
          <h1 className="font-bold text-3xl mt-5">{name}</h1>
          <div className="flex items-center justify-between gap-3 mt-5">
            <p className="text-green-400 bg-green-500/10 border border-green-500/20 text-center w-1/2 py-2 font-bold rounded-[10px]">
              {specialty}
            </p>
            <p className="text-blue-400 bg-blue-500/10 border border-blue-500/20 text-center w-1/2 py-2 font-bold rounded-[10px]">
              {experience}
            </p>
          </div>
        </div>

        <div className="Experience flex items-start flex-col justify-between my-8 text-[18px] space-y-3">
          <p className="flex items-center gap-3">
            <HiLocationMarker className="text-blue-500" />
            {location}
          </p>
          <p className="flex items-center gap-3">
            <PiHospitalFill className="text-blue-500" />
            {hospital}
          </p>
        </div>
        <div>
          <BookingModal doctorId={id} doctorName={name}></BookingModal>
        </div>
      </div>

      {/* Details & Info Section */}
      <div className="details p-8 col-span-8 bg-[#0b1329] rounded-[20px] border border-slate-800">
        <div>
          <h1 className="text-3xl font-bold flex items-center justify-start gap-3">
            <FaRegUser />
            {name}
          </h1>
          <p className="text-[16px] mt-2 text-slate-400">"{description}"</p>
        </div>

        <div className="divider my-6 border-slate-800"></div>

        {/* Visiting Time */}
        <div className="flex items-start justify-start gap-2 flex-col">
          <h1 className="text-2xl font-bold">Visiting Time</h1>
          <div className="grid grid-cols-2 gap-5 w-full mt-2">
            {availability.map((ava, index) => (
              // <li> এর বদলে স্ট্যান্ডার্ড <div> ব্যবহার করা হয়েছে এবং টেক্সট কালার ঠিক করা হয়েছে
              <div
                key={index}
                className="flex items-center gap-2 font-bold text-xl bg-[#111c38]/40 p-3 rounded-xl"
              >
                <IoIosTime className="text-blue-400" />
                <span>{ava}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider my-6 border-slate-800"></div>

        {/* Education Background */}
        <div className="flex items-start justify-start gap-2 flex-col">
          <h1 className="text-2xl font-bold">Education Background</h1>
          <div className="grid grid-cols-1 gap-4 w-full mt-2">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-2 font-bold text-lg bg-[#111c38]/20 p-3 rounded-xl"
              >
                <FaHouseMedicalFlag className="text-blue-400 mt-1" />
                <span>{edu}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider my-6 border-slate-800"></div>

        {/* Patient Reviews */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold">Patient Reviews</h1>
          <div className="space-y-4 mt-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 bg-[#111c38]/20 border border-slate-800/60 rounded-xl"
              >
                <div className="flex items-center justify-start gap-3">
                  <div className="bg-blue-600/20 rounded-full text-blue-400 border border-blue-500/30 w-12 h-12 flex items-center justify-center font-bold">
                    {review?.name ? review.name[0] : "U"}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{review.name}</h3>
                    <p className="text-[14px] font-normal text-slate-500">
                      {review.time}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] font-normal mt-3 text-slate-400 pl-14">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
