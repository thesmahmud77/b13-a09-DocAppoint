const HomeRatings = () => {
  return (
    <div className="w-full mx-auto text-center px-10 py-20 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-wide text-gray-900">
        Excellence in Numbers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-600">
            50+
          </span>
          <span className="text-xs md:text-sm text-gray-500 font-medium">
            Specialists
          </span>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-600">
            15k+
          </span>
          <span className="text-xs md:text-sm text-gray-500 font-medium">
            Patients Treated
          </span>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-600">
            4.9
          </span>
          <span className="text-xs md:text-sm text-gray-500 font-medium">
            Average Rating
          </span>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl py-8 px-6 flex flex-col justify-center items-center transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
          <span className="text-3xl md:text-4xl font-extrabold mb-2 text-blue-600">
            12
          </span>
          <span className="text-xs md:text-sm text-gray-500 font-medium">
            Awards Won
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeRatings;
