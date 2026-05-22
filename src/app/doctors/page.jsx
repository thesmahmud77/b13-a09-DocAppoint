import AllDoctorCard from "@/components/All-Doctor/AllDoctorCard";

const allDoctor = async () => {
  const res = await fetch("http://localhost:8080/all-doctor");
  if (!res.ok) return {};
  const data = await res.json();
  return data || [];
};

const doctorPage = async () => {
  const allDoctorData = await allDoctor();
  return (
    <div className="mt-15">
      <h1 className="font-bold text-3xl">Our Specialists Doctor</h1>
      <div className="grid grid-cols-12 gap-10">
        <p className="col-span-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          maxime deleniti nostrum perspiciatis, voluptates omnis facere saepe
          aliquid explicabo fugit ipsa, consequuntur sapiente.
        </p>
        <div className="col-span-4">
          {/* Search Field */}
          <h1 className="font-bold text-3xl"> Search Field</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {allDoctorData.map((singleDoctorData) => (
          <AllDoctorCard
            key={singleDoctorData._id}
            singleDoctorData={singleDoctorData}
          ></AllDoctorCard>
        ))}
      </div>
    </div>
  );
};

export default doctorPage;
