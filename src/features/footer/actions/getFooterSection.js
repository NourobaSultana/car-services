"use server";

import connectToMongoDB from "@/lib/dbConnect";

export async function getFooterSection() {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    return footer;
  } catch (error) {
    console.log(error);
    return null;
  }
}
