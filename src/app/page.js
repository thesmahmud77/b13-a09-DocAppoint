import HomeHero from "@/components/HomeComponents/HomeHero";
import Homeinsights from "@/components/HomeComponents/Homeinsights";
import HomeRatings from "@/components/HomeComponents/HomeRatings";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomeHero></HomeHero>
      <HomeRatings></HomeRatings>
      <Homeinsights></Homeinsights>
    </div>
  );
}
