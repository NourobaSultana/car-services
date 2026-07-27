"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function createSection(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const newSection = {
      _id: Date.now().toString(),
      title: data.title,
      order: Number(data.order),
      status: data.status === "true",
      links: [],
    };

    await footerCollection.updateOne(
      {},
      {
        $push: {
          sections: newSection,
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Section created successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Failed to create section.",
    };
  }
}
