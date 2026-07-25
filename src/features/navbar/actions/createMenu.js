"use server";
import connectToMongoDB from "@/lib/dbConnect";
// import dbConnect from "@/lib/dbConnect";
export async function createMenu(data) {
  const menuCollection = await connectToMongoDB("navbar");

  const result = await menuCollection.insertOne({
    title: data.title,
    path: data.path,
    order: Number(data.order),
    status: data.status,
    createdAt: new Date(),
  });

  return result;
}
