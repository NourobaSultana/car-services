import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/images/about_us/person.jpg";
import image2 from "../../../public/assets/images/about_us/parts.jpg";
const AboutUsSection = () => {
  return (
    <>
      <div className="mt-20 md:mt-24 lg:mt-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:max-w-[521px]">
          <div className="relative w-full max-w-[460px] lg:max-w-[521px] mx-auto h-[320px] sm:h-[400px] md:h-[500px] lg:h-[557px]">
            <Image
              src={image1}
              alt="Main Image"
              className="
        w-[70%]
        sm:w-[75%]
        lg:w-[460px]
        h-auto
        aspect-[460/437]
        rounded-xl
        object-cover
      "
            />

            <Image
              src={image2}
              alt="Second Image"
              className="
        absolute
        bottom-0
        right-0

        w-[48%]
        sm:w-[52%]
        lg:w-[327px]

        h-auto
        aspect-[327/332]

        rounded-2xl
        border-5
        border-white
        object-cover
      "
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full max-w-[489px]">
          <p className="text-[#FF3811] font-bold text-[16px] md:text-[18px] lg:text-[20px]">
            About Us
          </p>

          <h2 className="mt-3 md:mt-4 lg:mt-5 leading-tight font-bold text-[32px] md:text-[38px] lg:text-[45px] max-w-[376px]">
            We are qualified & of experience in this field
          </h2>

          <p className="mt-5 md:mt-6 lg:mt-7 text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <p className="mt-4 text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-[#737373]">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button
            className="
        mt-8
        md:mt-10
        lg:mt-12
        rounded-lg
        bg-[#FF3811]
        px-6
        py-3
        md:px-7
        md:py-4
        text-white
        font-bold
        text-[14px]
        md:text-[16px]
        lg:text-[18px]
      "
          >
            Get More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
