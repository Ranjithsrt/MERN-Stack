import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
connectDB(); // DB connect

const app = express();

app.use(express.json()); // JSON read

app.use("/api/books", bookRoutes);

app.get("/", (req, res) => res.send("API running"));

app.listen(process.env.PORT, () => console.log("Server running http://localhost:5000"));
