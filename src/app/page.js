import BannerSection from "../Components/home/BannerSection";
import AboutUsSection from "../Components/home/AboutUsSection";
import ServicesSection from "../Components/home/ServicesSection";
import ContactSection from "../Components/home/ContactSection";
import PopulrProducts from "../Components/home/PopulrProducts";
import MeetOurTeam from "../Components/home/MeetOurTeam";
import Why_choose from "../Components/home/Why_choose";
import Testimonial from "../Components/home/Testimonial";
import Navbar from "@/Components/Navbar";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export default async function Home() {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  // আপাতত testing এর জন্য
  const user = await userCollection.findOne({
    email: "toma@gmail.com",
  });

  return (
    <div className="max-w-[1140px] mx-auto px-4 md:px-6 lg:px-0">
      <Navbar navMenu={user?.navMenu} />

      <BannerSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
      <PopulrProducts />
      <MeetOurTeam />
      <Why_choose />
      <Testimonial />
    </div>
  );
}
