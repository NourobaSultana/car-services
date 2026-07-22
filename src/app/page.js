import BannerSection from "./components/BannerSection";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import PopulrProducts from "./components/PopulrProducts";
import MeetOurTeam from "./components/MeetOurTeam";
import Why_choose from "./components/Why_choose";
import Testimonial from "./components/Testimonial";
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
