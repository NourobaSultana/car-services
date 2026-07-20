import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdFormatQuote } from "react-icons/md";

const Testimonial = () => {
  const profile = [
    {
      id: 1,
      image: "/assets/profile/profile1.png",
      name: "Awlad Hossain",
      title: "Businessman",
    },
    {
      id: 2,
      image: "/assets/profile/profile2.png",
      name: "John Doe",
      title: "Businessman",
    },
  ];

  return (
    <div>
      {/* Section Heading */}
      <div className="mx-auto mt-10 max-w-[717px] space-y-4 px-4 text-center lg:mt-33">
        <p className="text-[16px] font-bold text-[#FF3811] md:text-[18px] lg:text-[20px]">
          Testimonial
        </p>

        <h2 className="text-[28px] font-bold leading-tight text-[#151515] md:text-[36px] lg:text-[48px]">
          What Customers Says
        </h2>

        <p className="text-[14px] leading-7 text-[#737373] md:text-[15px] lg:text-[16px]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-1 lg:mt-12 lg:grid-cols-2">
        {profile.map((item) => (
          <div
            key={item.id}
            className="w-full rounded-xl border border-[#E8E8E8] bg-white p-6 md:p-8 lg:h-[349px] lg:w-[558px] lg:px-[50px] lg:pt-[50px]"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
              {/* Profile */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full object-cover md:h-16 md:w-16"
                />

                <div>
                  <h3 className="text-[20px] font-bold text-[#444444] md:text-[22px] lg:text-[25px]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[16px] font-semibold text-[#737373] md:text-[18px] lg:text-[20px]">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <MdFormatQuote size={56} className="text-[#FF3811]/20 shrink-0" />
            </div>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-7 text-[#737373] md:text-[16px] lg:max-w-[489px] lg:leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="h-[19px] w-[19px] text-[#FF912C]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
