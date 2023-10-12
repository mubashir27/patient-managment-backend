import mongoose, { Connection } from "mongoose";

mongoose.set("strictQuery", false);

export default async (): Promise<Connection | void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("DB has connected");
  } catch (error) {
    console.error("DB connection error", error);
  }
};
