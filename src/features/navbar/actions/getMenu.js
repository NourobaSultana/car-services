"use server";

import connectToMongoDB from "@/lib/dbConnect";

export async function getMenus() {
  const menuCollection = await connectToMongoDB("navbar");

  const menus = await menuCollection.find({}).sort({ order: 1 }).toArray();

  return JSON.parse(JSON.stringify(menus));
}
