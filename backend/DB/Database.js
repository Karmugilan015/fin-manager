import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ✅ MUST be called

export const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(MONGODB_URI);

    console.log(
      `MongoDB connected successfully to ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB Connection failed:", error.message);
    process.exit(1);
  }
};
