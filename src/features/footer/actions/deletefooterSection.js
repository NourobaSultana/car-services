"use server";

import connectToMongoDB from "@/lib/dbConnect";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function deleteSection(id) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    if (!footer) {
      return {
        success: false,
        message: "Footer not found",
      };
    }

    const updatedSections = footer.sections.filter(
      (item) => item._id.toString() !== id,
    );

    await footerCollection.updateOne(
      {},
      {
        $set: {
          sections: updatedSections,
        },
      },
    );

    return {
      success: true,
      message: "Section deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
