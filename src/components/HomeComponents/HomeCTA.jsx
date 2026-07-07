import Link from "next/link";

const HomeCTA = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl px-8 py-14 text-center relative overflow-hidden">
        {/* হালকা ডেকোরেটিভ সার্কেল */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-14 -left-10 w-48 h-48 bg-white/10 rounded-full"></div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Book your appointment today and connect with a trusted specialist in
            just a few clicks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/doctors"
              className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-sm"
            >
              Book an Appointment
            </Link>
            <Link
              href="/doctors"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Browse Doctors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
