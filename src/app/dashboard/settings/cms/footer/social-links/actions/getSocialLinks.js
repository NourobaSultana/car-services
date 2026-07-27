"use server";

import connectToMongoDB from "@/lib/dbConnect";

export async function getSocialLinks() {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    return footer?.socialLinks || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
