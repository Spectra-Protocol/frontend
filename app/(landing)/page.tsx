import Showcase3d from "./components/showcase-3d";
import HeroSection from "./components/hero_section";
import PosterSection from "./components/poster-section";
import { LinearContainer } from "@/components/ui/container";


export default function Home() {
  return (
    <LinearContainer direction="column" space="lg">
      <HeroSection />
      <Showcase3d />
      <PosterSection />
    </LinearContainer>
  );
}
