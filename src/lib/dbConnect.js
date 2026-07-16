import { MongoClient } from "mongodb";
// username-car_service
// password-6cIvrMKLsJEtMiRc
// DB_NAME=car_DB

const client = new MongoClient(process.env.MONGODB_URI);

export default async function connectToMongoDB(collectionName) {
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const collection = db.collection(collectionName);
  console.log("Inside dbConnect:", collection.constructor.name);
  return collection;
}
