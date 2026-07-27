"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function updateSection(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    await footerCollection.updateOne(
      {
        "sections._id": data.id,
      },
      {
        $set: {
          "sections.$.title": data.title,
          "sections.$.order": Number(data.order),
          "sections.$.status": data.status === "true",
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Section updated successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Update failed.",
    };
  }
}
