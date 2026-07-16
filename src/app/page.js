import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <AboutUsSection></AboutUsSection>
      <ServicesSection></ServicesSection>
    </div>
  );
}
