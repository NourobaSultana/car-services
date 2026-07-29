"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function createLink(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    if (!footer) {
      return {
        success: false,
        message: "Footer data not found.",
      };
    }

    // যে section এ link add হবে শুধু সেই section খুঁজবে
    const targetSection = footer.sections.find(
      (section) => String(section._id) === String(data.sectionId),
    );

    if (!targetSection) {
      return {
        success: false,
        message: "Section not found.",
      };
    }

    // শুধু ওই section এর link order check করবে
    const existingLink = targetSection.links?.find(
      (link) => Number(link.order) === Number(data.order),
    );

    if (existingLink) {
      return {
        success: false,
        message:
          "This Order Already exists in this section. Please select another order.",
      };
    }

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
            status: data.status,
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
