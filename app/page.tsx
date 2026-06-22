import HeroSection from "@/components/home/HeroSection";
import ServiceTeaser from "@/components/home/ServiceTeaser";
import DataDemoSection from "@/components/home/DataDemoSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceTeaser />
      <DataDemoSection />
      <CtaBanner />
    </>
  );
}
