import { Button } from "@heroui/react";

const HomeHero = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-[#092618] border border-[#1b4332] text-[#4ade80] text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
            Accepting New Patients
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Premium Healthcare, <br />
            <span className="text-gray-300">Tailored for You.</span>
          </h1>

          {/* বিবরণ (Description) */}
          <p className="max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
            Connect with top-rated specialists, book appointments instantly, and
            manage your health journey in one secure platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button> Book an Appointment</Button>
            <Button variant="secondary">Meet Our Doctors</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
