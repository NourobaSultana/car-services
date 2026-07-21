"use server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";
import connectToMongoDB, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);
  // validation
  const { email, password } = payload;
  if (!email || !password) return { success: false };
  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    payload.role = "user";
    const result = await userCollection.insertOne(payload);

    // return result;
    const { _id } = result;
    return { _id };
  }
  return { success: false };
};
