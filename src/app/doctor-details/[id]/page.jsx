import BookingModal from "@/components/BookingModal";
import { FaRegUser } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { PiHospitalFill } from "react-icons/pi";
import { MdStar } from "react-icons/md";

const fetchDetailsDoctor = async (id) => {
  const res = await fetch(
    `https://doc-appoint-server-beta.vercel.app/doctors/${id}`,
  );
  if (!res.ok) return {};
  const data = await res.json();
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
    availability = [],
    education = [],
    reviews = [],
  } = doctorDetails;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">
            Home
          </span>
          <span className="text-slate-300">/</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">
            Doctors
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600">{name || "Doctor Details"}</span>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 space-y-5">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src={image}
                  alt={name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  Available
                </div>
              </div>

              <div className="p-6">
                <h1 className="font-bold text-2xl text-slate-800 leading-tight">
                  {name}
                </h1>
                <p className="text-slate-500 text-sm mt-0.5">{hospital}</p>

                <div className="flex items-center gap-3 mt-4">
                  <span className="bg-blue-50 text-blue-700 border border-blue-100 text-sm font-semibold px-3 py-1.5 rounded-xl">
                    {specialty}
                  </span>
                  <span className="bg-violet-50 text-violet-700 border border-violet-100 text-sm font-semibold px-3 py-1.5 rounded-xl">
                    {experience}
                  </span>
                </div>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="text-blue-500 text-base" />
                    </span>
                    <span className="font-medium">{location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <PiHospitalFill className="text-blue-500 text-base" />
                    </span>
                    <span className="font-medium">{hospital}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <BookingModal
                    doctorId={id}
                    doctorName={name}
                    docPhoto={image}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Quick Stats
              </h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-slate-800">
                    {reviews.length}+
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Reviews</p>
                </div>
                <div className="border-x border-slate-100">
                  <p className="text-2xl font-bold text-slate-800">
                    {availability.length}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Time Slots</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">
                    {education.length}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Degrees</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <FaRegUser className="text-white text-sm" />
                </span>
                <div>
                  <h1 className="text-xl font-bold text-slate-800">{name}</h1>
                  <p className="text-xs text-slate-400">{specialty}</p>
                </div>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed italic border-l-4 border-blue-100 pl-4">
                {description}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-2 mb-5">
                <IoIosTime className="text-blue-600 text-xl" />
                <h2 className="text-xl font-bold text-slate-800">
                  Visiting Hours
                </h2>
              </div>
              {availability.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availability.map((ava, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 px-4 py-3.5 rounded-2xl"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="font-semibold text-slate-700 text-sm">
                        {ava}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm">
                  No availability listed.
                </p>
              )}
            </div>

            {/* Education */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center gap-2 mb-5">
                <FaHouseMedicalFlag className="text-blue-600 text-xl" />
                <h2 className="text-xl font-bold text-slate-800">
                  Education Background
                </h2>
              </div>
              {education.length > 0 ? (
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-slate-50 border border-slate-100 px-5 py-4 rounded-2xl"
                    >
                      <span className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">
                          {index + 1}
                        </span>
                      </span>
                      <p className="text-slate-700 font-medium text-sm leading-snug pt-1">
                        {edu}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm">
                  No education details available.
                </p>
              )}
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-slate-800">
                  Patient Reviews
                </h2>
                <span className="bg-amber-50 text-amber-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-100">
                  {reviews.length} Reviews
                </span>
              </div>

              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors duration-200"
                    >
                      {/* Avatar */}
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {review?.name ? review.name[0].toUpperCase() : "U"}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3 className="font-bold text-slate-800 text-sm">
                            {review.name}
                          </h3>
                          <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <MdStar
                                key={star}
                                className="text-amber-400 text-sm"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {review.time}
                        </p>
                        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-slate-400 text-sm">No reviews yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
