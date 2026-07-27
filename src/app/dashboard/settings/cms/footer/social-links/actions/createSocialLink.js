"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function createSocialLink(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const newLink = {
      _id: Date.now().toString(),
      title: data.title,
      icon: data.icon,
      url: data.url,
      order: Number(data.order),
      status: data.status === "true",
    };

    await footerCollection.updateOne(
      {},
      {
        $push: {
          socialLinks: newLink,
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Social link added successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Failed to add social link.",
    };
  }
}
