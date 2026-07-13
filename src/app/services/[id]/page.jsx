import connectToMongoDB from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Full Car Repair",
  "Engine Repair",
  "Automatic Services",
  "Engine Oil Change",
  "Battery Charge",
];

export default async function page({ params }) {
  const p = await params;
  const serviceCollection = await connectToMongoDB("car_services");
  const service = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div>
      <h2>{p.id}</h2>
      <h3>{service.title}</h3>
      <section className="container mx-auto px-4 py-8">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/assets/images/banner/1.jpg"
            alt="Banner"
            width={1400}
            height={500}
            priority
            className="h-[220px] w-full object-cover sm:h-[280px] md:h-[350px] lg:h-[450px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 sm:px-10 lg:px-16">
              <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-orange-400">
                Car Service
              </p>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Professional Car Repair &
                <span className="block text-orange-500">
                  Maintenance Service
                </span>
              </h1>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-200 sm:text-base">
                Keep your vehicle running smoothly with our expert mechanics,
                genuine parts, and affordable service packages.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600">
                  Book Service
                </button>

                <span className="text-sm text-white">
                  Home <span className="mx-2 text-orange-400">/</span> Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Image */}
          <div className="lg:col-span-2">
            <Image
              src="/assets/images/services/2.jpg" // তোমার image path
              alt="Service"
              width={752}
              height={400}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Right Sidebar */}
          <div className="rounded-2xl bg-[#F3F3F3] p-8">
            <h2 className="mb-8 text-4xl font-bold text-[#151515]">Services</h2>

            <div className="space-y-5">
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`flex w-full items-center justify-between rounded-xl px-6 py-5 text-left text-lg font-semibold transition-all duration-300
                  ${
                    index === 0
                      ? "bg-[#FF3811] text-white"
                      : "bg-white text-[#151515] hover:bg-[#FF3811] hover:text-white"
                  }`}
                >
                  <span>{service}</span>

                  <FaArrowRight className="text-xl" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <h2>{JSON.stringify(service)}</h2>
      {/* <h2>{JSON.stringify(p)}</h2> */}
    </div>
  );
}
