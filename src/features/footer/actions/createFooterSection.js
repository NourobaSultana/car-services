"use server";

import connectToMongoDB from "@/lib/dbConnect";

export async function createFooterSection(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    const footer = await footerCollection.findOne({});

    // Duplicate title check
    const exists = footer.sections.find(
      (section) => section.title.toLowerCase() === data.title.toLowerCase(),
    );

    if (exists) {
      return {
        success: false,
        message: "Section already exists.",
      };
    }

    const newSection = {
      _id: Date.now().toString(),
      title: data.title.trim(),
      status: data.status,
      order: Number(data.order),
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

    return {
      success: true,
      message: "Section added successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Failed to add section.",
    };
  }
}
