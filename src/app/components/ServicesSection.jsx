import connectToMongoDB from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../../../public/assets/Frame.png";

const ServicesSection = async () => {
  const serviceCollection = await connectToMongoDB("car_services");
  const data = await serviceCollection.find({}).toArray();

  return (
    <>
      {/* service heading*/}
      <div className="space-y-4 text-center max-w-[717px] mx-auto mt-5 md:mt-7 lg:mt-33">
        {/* Title */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#FF3811]">
          Our Services
        </p>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-gray-900 leading-tight">
          Our Service Area
        </h2>

        {/* Description */}
        <p className=" text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-gray-600">
          We deliver reliable, high-quality solutions tailored to your needs.
          Our experienced team ensures excellent service and customer
          satisfaction with every project.
        </p>
      </div>

      <div className=" mt-8 md:mt-10 lg:mt-12">
        <div className="max-w-[1140px] mx-auto items-center">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item._id}
                className="group overflow-hidden  min-h-[314px]  rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="overflow-hidden min-h-[208px] px-6 pt-6 ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={314}
                    height={208}
                    className="h-56 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 p-5">
                  <div>
                    <h2 className="text-center md:text-left text-[18px] md:text-[22px] lg:text-[25px] font-bold text-gray-800 line-clamp-1">
                      {item.title}
                    </h2>

                    <div className="mt-3 md:mt-4 lg:mt-5 flex items-center justify-between">
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-orange-500">
                        ${item.price}
                      </p>

                      <Link
                        href={`/services/${item._id}`}
                        prefetch
                        className="flex h-12 w-12 items-center justify-center"
                      >
                        <Image src={arrow} width={24} height={24} alt="Arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 lg:mt-[50px] flex justify-center">
            <button
              className="
      rounded-lg
      text-[#FF3811]
      border-2
      px-6
      py-3
      md:px-7
      md:py-4
    
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
      </div>
    </>
  );
};

export default ServicesSection;
