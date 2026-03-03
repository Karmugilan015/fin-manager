import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(
  cors({
    origin: "https://fin-manager-1.onrender.com", // change to your frontend port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Routes
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("FinManager Server is working");
});

// ✅ VERY IMPORTANT FOR RENDER
const PORT = process.env.PORT || 4000;

// ✅ Start server AFTER DB connects
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect DB:", error.message);
  }
});
