"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function updateLink(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    let movedLink = null;

    // Remove link from old section
    const sectionsWithoutOldLink = footer.sections.map((section) => {
      if (String(section._id) !== String(data.oldSectionId)) {
        return section;
      }

      const remainingLinks = (section.links || []).filter((link) => {
        if (String(link._id) === String(data.id)) {
          movedLink = {
            ...link,
            title: data.title,
            path: data.path,
            order: Number(data.order),
            status: data.status,
          };
          return false;
        }

        return true;
      });

      return {
        ...section,
        links: remainingLinks,
      };
    });

    // Add link to new section
    const updatedSections = sectionsWithoutOldLink.map((section) => {
      if (String(section._id) !== String(data.sectionId)) {
        return section;
      }

      return {
        ...section,
        links: [...(section.links || []), movedLink].sort(
          (a, b) => Number(a.order) - Number(b.order),
        ),
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
      message: "Link updated successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Update failed.",
    };
  }
}
