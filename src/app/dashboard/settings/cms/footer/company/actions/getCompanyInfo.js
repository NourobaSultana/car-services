"use server";

import connectToMongoDB from "@/lib/dbConnect";

export async function getCompanyInfo() {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    return footer || null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
