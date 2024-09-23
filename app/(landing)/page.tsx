import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/hero_section/HeroSection"));

export default function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
