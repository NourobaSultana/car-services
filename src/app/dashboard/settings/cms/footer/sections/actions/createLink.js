"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function createLink(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    const updatedSections = footer.sections.map((section) => {
      if (String(section._id) !== String(data.sectionId)) {
        return section;
      }

      return {
        ...section,
        links: [
          ...(section.links || []),
          {
            _id: Date.now().toString(),
            title: data.title,
            path: data.path,
            order: Number(data.order),
            status: data.status, // <-- boolean সরাসরি
          },
        ],
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
      message: "Link added successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Failed to add link.",
    };
  }
}
