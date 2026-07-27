"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function updateSocialLink(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    await footerCollection.updateOne(
      {
        "socialLinks._id": data.id,
      },
      {
        $set: {
          "socialLinks.$.title": data.title,
          "socialLinks.$.icon": data.icon,
          "socialLinks.$.url": data.url,
          "socialLinks.$.order": Number(data.order),
          "socialLinks.$.status": data.status === "true",
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Social link updated successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Update failed.",
    };
  }
}
