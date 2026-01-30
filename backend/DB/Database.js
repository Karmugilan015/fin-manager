import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    //mongo server url
    const url = "mongodb+srv://Bojo:<xXpQ1jl91bQlNRUH>@aution.xxfqjv0.mongodb.net/?appName=aution";

    const {connection} = await mongoose.connect(url);

    console.log(`MongoDB Connection successful to ${connection.host}`);

}
