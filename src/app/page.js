import HeroDoctors from "@/components/HomeComponents/HeroDoctors";
import HomeHero from "@/components/HomeComponents/HomeHero";
import Homeinsights from "@/components/HomeComponents/Homeinsights";
import HomeRatings from "@/components/HomeComponents/HomeRatings";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomeHero></HomeHero>
      <HeroDoctors></HeroDoctors>
      <HomeRatings></HomeRatings>
      <Homeinsights></Homeinsights>
    </div>
  );
}
