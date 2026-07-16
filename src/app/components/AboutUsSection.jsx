import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/images/about_us/person.jpg";
import image2 from "../../../public/assets/images/about_us/parts.jpg";
const AboutUsSection = () => {
  return (
    <>
      <div className="mt-20 md:mt-24 lg:mt-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-[520px] h-[430px] md:h-[500px] lg:h-[557px]">
          <div className="relative w-fit mx-auto">
            <Image
              src={image1}
              alt="Main Image"
              className="
          rounded-xl
          w-[280px]
          h-[270px]
          md:w-[360px]
          md:h-[360px]
          lg:w-[460px]
          lg:h-[437px]
          object-cover
        "
            />

            <Image
              src={image2}
              alt="Second Image"
              className="
          absolute
          left-[110px]
          top-[150px]

          md:left-[170px]
          md:top-[200px]

          lg:left-[190px]
          lg:top-[225px]

          w-[190px]
          h-[190px]

          md:w-[260px]
          md:h-[260px]

          lg:w-[327px]
          lg:h-[332px]

          rounded-xl
          border-4
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
