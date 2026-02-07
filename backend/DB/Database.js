import mongoose from "mongoose";
export const connectDB = async (req, res) => {
    //mongo server url
    console.log(process.env.MONGODB_URI)
    const MONGODB_URI = process.env.MONGODB_URI;
    try {
        console.log(MONGODB_URI)
        await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connection successful to ${connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection failed ${error.message}`);
        process.exit(1);
    }


};
