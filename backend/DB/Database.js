import mongoose from "mongoose";
export const connectDB = async (req, res) => {
    //mongo server url
    const MONGO_URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connection successful to ${connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection failed ${error.message}`);
        process.exit(1);
    }


};
