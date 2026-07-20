import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutUsSection from "./components/AboutUsSection";
import BannerSection from "./components/BannerSection";
import ContactSection from "./components/ContactSection";
import PopulrProducts from "./components/PopulrProducts";
import MeetOurTeam from "./components/MeetOurTeam";
import Why_choose from "./components/Why_choose";
import Testimonial from "./components/Testimonial";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto px-4 md:px-6 lg:px-0">
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <AboutUsSection></AboutUsSection>
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <PopulrProducts></PopulrProducts>
      <MeetOurTeam></MeetOurTeam>
      <Why_choose></Why_choose>
      <Testimonial></Testimonial>
    </div>
  );
}
