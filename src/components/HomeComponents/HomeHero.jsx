import { Button } from "@heroui/react";
import Link from "next/link";

const HomeHero = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Accepting New Patients
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
          Premium Healthcare, <br />
          <span className="text-gray-500">Tailored for You.</span>
        </h1>

        <p className="max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed">
          Connect with top-rated specialists, book appointments instantly, and
          manage your health journey in one secure platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link
            variant="bordered"
            href={"/doctors"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 rounded-xl py-3"
          >
            Meet Our Doctors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
