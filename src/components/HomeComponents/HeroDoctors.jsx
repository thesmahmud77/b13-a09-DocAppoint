const HeroDoctors = () => {
  return (
    <div>
      <div className="bg-[#030712] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* সেকশন হেডার এবং ভিউ অল বাটন */}
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

          {/* ডক্টরস কার্ড গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* কার্ড ১ - Dr. Ayesha Rahman */}
            <div className="bg-[#0b1329] border border-gray-800/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gray-700">
              <div className="relative bg-[#0d1630] pt-6 flex justify-center min-h-[240px]">
                {/* রেটিং ব্যাজ */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-yellow-500/30 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  ⭐ 4.9
                </div>
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400"
                  alt="Dr. Ayesha Rahman"
                  className="h-56 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Dr. Ayesha Rahman
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-medium">
                  Cardiologist
                </p>

                {/* এক্সপেরিয়েন্স ও রিভিউ */}
                <div className="space-y-2 text-xs text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span>💼</span> 10 years exp
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💬</span> 128 Reviews
                  </div>
                </div>

                <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold py-3 rounded-xl transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* কার্ড ২ - Dr. Marcus Chen */}
            <div className="bg-[#0b1329] border border-gray-800/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gray-700">
              <div className="relative bg-[#0d1630] pt-6 flex justify-center min-h-[240px]">
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-yellow-500/30 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  ⭐ 4.9
                </div>
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400"
                  alt="Dr. Marcus Chen"
                  className="h-56 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Dr. Marcus Chen
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-medium">
                  Neurologist
                </p>

                <div className="space-y-2 text-xs text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span>💼</span> 10 years exp
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💬</span> 94 Reviews
                  </div>
                </div>

                <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold py-3 rounded-xl transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* কার্ড ৩ - Dr. Sarah Jenkins */}
            <div className="bg-[#0b1329] border border-gray-800/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gray-700">
              <div className="relative bg-[#0d1630] pt-6 flex justify-center min-h-[240px]">
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-yellow-500/30 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  ⭐ 4.8
                </div>
                <img
                  src="https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400"
                  alt="Dr. Sarah Jenkins"
                  className="h-56 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Dr. Sarah Jenkins
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-medium">
                  Dermatologist
                </p>

                <div className="space-y-2 text-xs text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span>💼</span> 10 years exp
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💬</span> 156 Reviews
                  </div>
                </div>

                <button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-semibold py-3 rounded-xl transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDoctors;
