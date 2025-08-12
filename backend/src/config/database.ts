import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

console.log("console.log" + DATABASE_URL);

const connectDB = async (): Promise<void> => {
  await mongoose.connect(DATABASE_URL!);
};

export default connectDB;
