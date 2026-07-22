// username-car_service
// password-RRNuhDrWgOcY8Yie
// DB_NAME=car_DB
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationsWErrors: true,
  },
});

export const collectionNameObj = {
  userCollection: "test_user",
};
export default async function connectToMongoDB(collectionName) {
  await client.connect();

  return client.db(process.env.DB_NAME).collection(collectionName);
}

// export default async function connectToMongoDB(collectionName) {
//   await client.connect();
//   const db = client.db(process.env.DB_NAME);
//   const collection = db.collection(collectionName);
//   console.log("Inside dbConnect:", collection.constructor.name);
//   return collection;
// }
