import HomeDoctorCard from "./HomeDoctorCard";

const TopDoctors = async () => {
  const res = await fetch("http://localhost:8080/top-3-doctor");
  const topDoctorsData = res.json();
  return topDoctorsData || [];
};

const HeroDoctors = async () => {
  const doctorsData = await TopDoctors();
  // console.log("topDoctorss", { doctorsData });
  return (
    <div>
      <div className="bg-[#030712] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Top Rated Specialists
              </h2>
              <p className="text-gray-400 text-sm">
                Book sessions with our highest-rated medical professionals.
              </p>
            </div>
            <button className="border border-gray-700 bg-transparent hover:bg-white/5 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap">
              View All Doctors
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {doctorsData.map((singleDoctorsData) => (
              <HomeDoctorCard
                key={singleDoctorsData._id}
                singleDoctorsData={singleDoctorsData}
              ></HomeDoctorCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDoctors;
