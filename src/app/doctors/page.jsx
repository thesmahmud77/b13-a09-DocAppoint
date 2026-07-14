import DoctorsSearchSection from "@/components/All-Doctor/DoctorsSearchSection";

const allDoctor = async () => {
  const res = await fetch(
    "https://server-doc-appoint-psi.vercel.app/all-doctor",
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data || [];
};

const DoctorPage = async () => {
  const allDoctorData = await allDoctor();

  return (
    <div className="mt-15 max-w-7xl mx-auto px-6 md:px-10 py-10">
      <h1 className="font-bold text-3xl text-gray-900 mb-6">
        Our Specialists Doctor
      </h1>
      <DoctorsSearchSection initialDoctors={allDoctorData} />
    </div>
  );
};

export default DoctorPage;
