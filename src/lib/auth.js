import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(
  "mongodb+srv://docappoint:kjkk9FEPCPVVh2Hd@cluster0.w4xj3al.mongodb.net/?appName=Cluster0",
);
const db = client.db("DocAppoint");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
