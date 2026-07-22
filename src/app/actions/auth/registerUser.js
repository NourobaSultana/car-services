"use server";
import bcrypt from "bcrypt";

import connectToMongoDB, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  // we find users Collection from here
  const userCollection = await connectToMongoDB(
    collectionNameObj.userCollection,
  );
  // validation
  // distructured email and pass
  const { email, password } = payload;
  if (!email || !password) return { success: false };
  // if any user have then the document will be found in user.
  const user = await userCollection.findOne({ email: payload.email });
  // new user wll be created if no user is available
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    // password will be hassed
    payload.password = hashedPassword;
    payload.role = "user";
    // save document in mongodb
    const result = await userCollection.insertOne(payload);

    // return result;
    // const { _id } = result;
    return { _id: result.insertedId };
  }
  return { success: false };
};
