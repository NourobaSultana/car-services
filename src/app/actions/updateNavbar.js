"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const updateNavbar = async (email, selectedMenus) => {
  const userCollection = await dbConnect(collectionNameObj.userCollection);

  const result = await userCollection.updateOne(
    { email },
    {
      $set: {
        navMenu: selectedMenus,
      },
    },
  );

  return result;
};
