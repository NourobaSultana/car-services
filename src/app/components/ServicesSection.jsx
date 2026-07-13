import connectToMongoDB from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";

const ServicesSection = async () => {
  const serviceCollection = await connectToMongoDB("car_services");
  const data = await serviceCollection.find({}).toArray();
  console.log("ServicesSection:", serviceCollection.constructor.name);

  return (
    <div>
      {/* <div>{JSON.stringify(data)} {JSON.stringify(item)}</div> */}
      <div className="grid grid-cols-12">
        {data.map((item) => {
          return (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              key={item._id}
            >
              <Image
                src={item.img}
                alt={item._id}
                width={314}
                height={208}
              ></Image>
              <h2>{item.title}</h2>
              <h2>{item.price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
