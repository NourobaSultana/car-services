"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function deleteLink(sectionId, linkId) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    const updatedSections = footer.sections.map((section) => {
      if (section._id !== sectionId) return section;

      return {
        ...section,
        links: section.links.filter((link) => link._id !== linkId),
      };
    });

    await footerCollection.updateOne(
      {},
      {
        $set: {
          sections: updatedSections,
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Link deleted successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Delete failed.",
    };
  }
}
