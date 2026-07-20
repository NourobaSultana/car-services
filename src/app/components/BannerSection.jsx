import Image from "next/image";
import React from "react";
import banner from "../../../public/assets/images/banner/5.jpg";
const BannerSection = () => {
  return (
    <div className="relative mt-8 md:mt-12 lg:mt-[66px]">
      <Image
        src={banner}
        alt="Banner"
        className="
      w-full
      h-[250px]
      sm:h-[350px]
      md:h-[450px]
      lg:h-[600px]
      rounded-xl
      object-cover
    "
      />

      <div className="absolute inset-0 flex items-center">
        <div className="flex flex-col px-5 sm:px-8 md:px-12 lg:pl-27">
          <h1
            className="max-w-[463px] font-bold text-white leading-tight
        text-[28px]
        sm:text-[36px]
        md:text-[48px]
        lg:text-[60px]"
          >
            Affordable Price For Car Servicing
          </h1>

          <p
            className="
          mt-3
          md:mt-5
          lg:mt-[30px]
          max-w-[522px]
          text-white
          leading-relaxed
          text-[12px]
          sm:text-[14px]
          md:text-[16px]
          lg:text-[18px]
        "
          >
            There are many variations of passages of available, but the majority
            have suffered alteration in some form.
          </p>

          <div className="mt-5 md:mt-8 lg:mt-[45px] flex flex-wrap items-center gap-4 lg:gap-5">
            <button
              className="
            rounded-xl
            bg-[#FF3811]
            text-white
            font-bold
            text-[14px]
            md:text-[16px]
            lg:text-[18px]
            px-5 py-3
            md:px-6 md:py-4
            lg:px-[22px] lg:py-[19px]
          "
            >
              Discover More
            </button>

            <button
              className="
            rounded-xl
            border-2
            border-white
            text-white
            font-bold
            text-[14px]
            md:text-[16px]
            lg:text-[18px]
            px-5 py-3
            md:px-6 md:py-4
            lg:px-[22px] lg:py-[19px]
          "
            >
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
