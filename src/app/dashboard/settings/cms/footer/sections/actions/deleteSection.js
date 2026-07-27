"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function deleteSection(id) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    await footerCollection.updateOne(
      {},
      {
        $pull: {
          sections: {
            _id: id,
          },
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Section deleted successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Delete failed.",
    };
  }
}
