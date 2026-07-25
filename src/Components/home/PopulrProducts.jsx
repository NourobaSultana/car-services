import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../../../public/assets/Frame.png";
import connectToMongoDB from "@/lib/dbConnect";
import { FaStar } from "react-icons/fa";

const PopulrProducts = async () => {
  const browseCollection = await connectToMongoDB("browse_product");
  const data = await browseCollection.find({}).toArray();
  return (
    <>
      {/* service heading*/}
      <div className="space-y-4 text-center max-w-[717px] mx-auto mt-5 md:mt-7 lg:mt-33">
        {/* Title */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#FF3811]">
          Popular Products
        </p>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold text-gray-900 leading-tight">
          Browse Our Products
        </h2>

        {/* Description */}
        <p className=" text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="mt-8 md:mt-10 lg:mt-12">
        <div className=" lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <div
                key={item._id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#FF3811] hover:shadow-xl"
              >
                {/* Image */}
                <div className="p-4 md:p-5">
                  <div className="flex h-[190px] md:h-[200px] lg:h-[208px] items-center justify-center rounded-2xl bg-[#F3F3F3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={156}
                      height={153}
                      className="h-auto w-[120px] md:w-[140px] lg:w-[156px] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col items-center justify-center px-5 pb-6 text-center">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="h-4 w-4 md:h-5 md:w-5 text-[#FF912C]"
                      />
                    ))}
                  </div>

                  <h2 className="mt-3 line-clamp-2 text-xl md:text-2xl font-bold text-[#151515]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-lg md:text-xl font-semibold text-[#FF3811]">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-10 md:mt-12 lg:mt-14 flex justify-center">
            <button className="rounded-lg border-2 border-[#FF3811] px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold text-[#FF3811] transition-all duration-300 hover:bg-[#FF3811] hover:text-white">
              More Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopulrProducts;
