import HomeDoctorCard from "./HomeDoctorCard";

const TopDoctors = async () => {
  const res = await fetch(
    "https://doc-appoint-server-beta.vercel.app/top-3-doctor",
  );
  const topDoctorsData = await res.json(); // await যোগ করা হলো — এটাই "not working" এর মূল কারণ
  return topDoctorsData || [];
};

const HeroDoctors = async () => {
  const doctorsData = await TopDoctors();

  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
              Top Rated Specialists
            </h2>
            <p className="text-gray-500 text-sm">
              Book sessions with our highest-rated medical professionals.
            </p>
          </div>
          <button className="border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap">
            View All Doctors
          </button>
        </div>

        {/* grid-cols-3 ফিক্সড ছিল, এখন রেসপন্সিভ করা হলো */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctorsData.map((singleDoctorsData) => (
            <HomeDoctorCard
              key={singleDoctorsData._id}
              singleDoctorsData={singleDoctorsData}
            ></HomeDoctorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroDoctors;
