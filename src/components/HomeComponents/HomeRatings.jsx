const HomeRatings = () => {
  return (
    <div className="w-full mx-auto text-center mx-10 my-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-wide">
        Excellence in Numbers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        <div className="bg-[#0e1731] border border-gray-800/40 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-gray-700">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
            50+
          </span>
          <span className="text-xs md:text-sm text-gray-400 font-medium">
            Specialists
          </span>
        </div>

        <div className="bg-[#0e1731] border border-gray-800/40 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-gray-700">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
            15k+
          </span>
          <span className="text-xs md:text-sm text-gray-400 font-medium">
            Patients Treated
          </span>
        </div>

        <div className="bg-[#0e1731] border border-gray-800/40 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-gray-700">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
            4.9
          </span>
          <span className="text-xs md:text-sm text-gray-400 font-medium">
            Average Rating
          </span>
        </div>

        <div className="bg-[#0e1731] border border-gray-800/40 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-gray-700">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
            12
          </span>
          <span className="text-xs md:text-sm text-gray-400 font-medium">
            Awards Won
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeRatings;
