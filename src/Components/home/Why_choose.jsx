import Image from "next/image";
import React from "react";

const Why_choose = () => {
  const brands = [
    {
      name: "Toyota",
      image: "/assets/icons/check.svg",
    },
    {
      name: "BMW",
      image: "/assets/icons/deliveryt.svg",
    },
    {
      name: "Tesla",
      image: "/assets/icons/Group 38729.svg",
    },
    {
      name: "Ford",
      image: "/assets/icons/group.svg",
    },
    {
      name: "Audi",
      image: "/assets/icons/person.svg",
    },
    {
      name: "Mercedes",
      image: "/assets/icons/Wrench.svg",
    },
  ];
  return (
    <div>
      <div className="space-y-4 text-center max-w-[717px] mx-auto mt-5 md:mt-7 lg:mt-33">
        {/* Title */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#FF3811]">
          Core Features
        </p>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-gray-900 leading-tight">
          Why Choose us
        </h2>

        {/* Description */}
        <p className=" text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:mt-12 lg:grid-cols-6 lg:gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="group flex h-[140px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-[#E8E8E8] bg-gray-100 transition-all duration-300 hover:text-white hover:bg-[#FF3811] lg:h-[156px] lg:w-[170px]"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={76}
              height={53}
              className="h-[45px]  w-[64px] object-contain md:h-[50px] md:w-[72px] lg:h-[53px] lg:w-[76px]"
            />

            <h3 className="mt-5 text-center text-[16px] font-bold text-[#444444] md:text-[17px] lg:mt-6 lg:text-[18px]">
              {brand.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_choose;
