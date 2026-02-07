import mongoose from "mongoose";
export const connectDB = async (req, res) => {
    //mongo server url
    const MONGODB_URI = process.env.MONGO_URI;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connection successful to ${connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection failed ${error.message}`);
        process.exit(1);
    }


};
