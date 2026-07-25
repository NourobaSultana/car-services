"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function updateMenu(id, data) {
  const menuCollection = await connectToMongoDB("navbar");

  const result = await menuCollection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        title: data.title,
        path: data.path,
        order: Number(data.order),
        status: data.status,
        updatedAt: new Date(),
      },
    },
  );

  return result;
}
