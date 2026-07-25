"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function deleteMenu(id) {
  const menuCollection = await connectToMongoDB("navbar");

  const result = await menuCollection.deleteOne({
    _id: new ObjectId(id),
  });

  return result;
}
