import dynamic from "next/dynamic";

const DynamicHeroSection = dynamic(() => import("./components/hero_section/HeroSection"));

export default function Home() {
  return (
    <div>
      <DynamicHeroSection />
    </div>
  );
}
