const fetchDetailsDoctor = async (id) => {
  const res = await fetch(`http://localhost:8080/doctors/${id}`);
  const data = res.json();
  return data || {};
};

const page = async ({ params }) => {
  const { id } = await params;
  const doctorDetails = await fetchDetailsDoctor(id);
  const { name, image } = doctorDetails;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default page;
