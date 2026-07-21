import { MongoClient, ServerApiVersion } from "mongodb";
// username-car_service
// password-6cIvrMKLsJEtMiRc
// DB_NAME=car_DB

export const collectionNameObj = {
  userCollection: "test_user",
};

export default function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationsWErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
}
const client = new MongoClient(process.env.MONGODB_URI);

// export default async function connectToMongoDB(collectionName) {
//   await client.connect();
//   const db = client.db(process.env.DB_NAME);
//   const collection = db.collection(collectionName);
//   console.log("Inside dbConnect:", collection.constructor.name);
//   return collection;
// }
