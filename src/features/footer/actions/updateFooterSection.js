"use server";

import dbConnect from "@/lib/dbConnect";

export async function updateFooterSection(data) {
  try {
    const footerCollection = await dbConnect("footer");

    const footer = await footerCollection.findOne({});

    // Duplicate Title Check
    const duplicateTitle = footer.sections.find(
      (section) =>
        section._id !== data._id &&
        section.title.toLowerCase() === data.title.toLowerCase(),
    );

    if (duplicateTitle) {
      return {
        success: false,
        message: "Section title already exists.",
      };
    }

    // Duplicate Order Check
    const duplicateOrder = footer.sections.find(
      (section) =>
        section._id !== data._id && section.order === Number(data.order),
    );

    if (duplicateOrder) {
      return {
        success: false,
        message: "Order already exists.",
      };
    }

    await footerCollection.updateOne(
      {
        "sections._id": data._id,
      },
      {
        $set: {
          "sections.$.title": data.title.trim(),
          "sections.$.order": Number(data.order),
          "sections.$.status": data.status,
        },
      },
    );

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
