const Homeinsights = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
            Health Insights
          </h2>
          <p className="text-gray-500 text-sm">
            Latest news and advice from our medical team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full transition-all duration-300 hover:shadow-md">
            <div className="sm:w-2/5 relative min-h-[180px] sm:min-h-full bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600"
                alt="Cardiology"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                  <span>Cardiology</span>
                  <span>•</span>
                  <span>Nov 02, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                  Understanding Heart Health in Your 40s
                </h3>
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:bg-blue-50 rounded-lg px-4 py-2 w-max transition-colors">
                Read Article
              </button>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full transition-all duration-300 hover:shadow-md">
            <div className="sm:w-2/5 relative min-h-[180px] sm:min-h-full bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600"
                alt="Dermatology"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:w-3/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                  <span>Dermatology</span>
                  <span>•</span>
                  <span>Oct 28, 2026</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                  The Importance of Regular Skin Screenings
                </h3>
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:bg-blue-50 rounded-lg px-4 py-2 w-max transition-colors">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeinsights;
