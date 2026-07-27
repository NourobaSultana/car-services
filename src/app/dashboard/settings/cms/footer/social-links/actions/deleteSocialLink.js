"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function deleteSocialLink(id) {
  try {
    const footerCollection = await connectToMongoDB("footer");
    await footerCollection.updateOne(
      {},
      {
        $pull: {
          socialLinks: {
            _id: id,
          },
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Deleted successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Delete failed.",
    };
  }
}
