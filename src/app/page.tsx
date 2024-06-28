import HeroSection from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Skills from "@/components/Skills";
import Heading from "@/components/Heading";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Skills />
      <Heading />
      <Portfolio />
    </>
  );
}
