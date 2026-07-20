import connectToMongoDB from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const MeetOurTeam = async () => {
  const meetCollection = await connectToMongoDB("meet_team");
  const data = await meetCollection.find({}).toArray();
  return (
    <>
      {/* service heading*/}
      <div className="space-y-4 text-center max-w-[717px] mx-auto mt-5 md:mt-7 lg:mt-33">
        {/* Title */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#FF3811]">
          Team
        </p>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-gray-900 leading-tight">
          Meet Our Team
        </h2>

        {/* Description */}
        <p className=" text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="mt-8 md:mt-10 lg:mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item._id}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#FF3811] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="p-6">
                <div className="flex h-[220px] items-center justify-center rounded-2xl bg-[#F8F8F8] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={314}
                    height={293}
                    className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-center px-6 pb-7 text-center">
                <h2 className="mt-5 text-[22px] lg:text-[25px] font-bold leading-tight text-[#151515]">
                  {item.title}
                </h2>

                <p className="mt-[10px] max-w-[280px] text-[18px] leading-7 text-[#737373] font-semibold">
                  {item.heading}
                </p>

                {/* Social Icons */}
                <div className="mt-4 flex items-center gap-4">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#395185] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                    <FaFacebookF size={18} />
                  </button>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#55ACEE] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                    <FaTwitter size={18} />
                  </button>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                    <FaLinkedinIn size={18} />
                  </button>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 bg-[linear-gradient(135deg,_#774ADF_0%,_#9748BE_15%,_#BD4697_30%,_#D8447A_45%,_#E94369_57%,_#EF4363_66%,_#D8447A_72%,_#F2C141_84%)]">
                    <FaInstagram size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
