import connectToMongoDB from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiControlSkipForward } from "react-icons/tfi";

const ServicesSection = async () => {
  const serviceCollection = await connectToMongoDB("car_services");
  const data = await serviceCollection.find({}).toArray();

  return (
    <div>
      {/* <div>{JSON.stringify(data)} {JSON.stringify(item)}</div> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item._id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={314}
                height={208}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-2xl font-bold text-orange-500">
                    ${item.price}
                  </p>
                </div>

                <Link
                  href={`/services/${item._id}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                >
                  <TfiControlSkipForward size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
