"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function updateLink(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    let movedLink = null;

    const sectionsWithoutOldLink = footer.sections.map((section) => {
      if (section._id !== data.oldSectionId) return section;

      const remainingLinks = section.links.filter((link) => {
        if (link._id === data.id) {
          movedLink = {
            ...link,
            title: data.title,
            path: data.path,
            order: Number(data.order),
            status: data.status === "true",
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

    const updatedSections = sectionsWithoutOldLink.map((section) => {
      if (section._id !== data.sectionId) return section;

      return {
        ...section,
        links: [...section.links, movedLink],
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
