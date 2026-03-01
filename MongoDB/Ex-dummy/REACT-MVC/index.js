import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ContactRoutes from "./routers/contactRoutes.js";

// config .env
dotenv.config();

// init express
const app = express();

//middleware - client to server communication
app.use(express.json()); // convert data to json
app.use(cors()); // allow cross origin resource sharing
//app.use(router);

// connect to DB

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// dummy route
app.get("/", (req, res) => {
  res.send("Hello from server");
});

// routes
app.use("/api/contacts", ContactRoutes);


// port 
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
