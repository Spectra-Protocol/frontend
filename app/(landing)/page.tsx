import dynamic from "next/dynamic";
import Showcase3d from "./components/showcase-3d";
import HeroSection from "./components/hero_section/HeroSection";
import PosterSection from "./components/poster-section";


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <Showcase3d />
      <PosterSection />
    </div>
  );
}
