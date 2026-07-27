"use server";

import connectToMongoDB from "@/lib/dbConnect";

export async function getSections() {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    return footer?.sections || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
