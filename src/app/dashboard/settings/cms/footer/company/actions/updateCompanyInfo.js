"use server";

import connectToMongoDB from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function updateCompanyInfo(data) {
  try {
    const footerCollection = await connectToMongoDB("footer");

    await footerCollection.updateOne(
      {},
      {
        $set: {
          companyInfo: {
            logo: data.logo,
            companyName: data.companyName,
            title: data.title,
            tagline: data.tagline,
            description: data.description,
            email: data.email,
            secondary_email: data.secondary_email,
            phone: data.phone,
            telephone: data.telephone,
            address: data.address,
            secondary_address: data.secondary_address,
          },
        },
      },
    );

    revalidatePath("/");
    revalidatePath("/dashboard/footer");

    return {
      success: true,
      message: "Company information updated successfully.",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Failed to update company information.",
    };
  }
}
