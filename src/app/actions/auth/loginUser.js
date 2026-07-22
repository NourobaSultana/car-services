"use server";

import bcrypt from "bcrypt";
import { collectionNameObj } from "@/lib/dbConnect";
import connectToMongoDB from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  // distructured
  const { email, password } = payload;

  // we find user Collection
  const userCollection = await connectToMongoDB(
    collectionNameObj.userCollection,
  );

  // find emailfrom here
  const user = await userCollection.findOne({ email });
  // if no user retun null
  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) return null;

  return user;
};
