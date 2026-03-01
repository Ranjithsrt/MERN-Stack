// import mongoose from "mongoose";

// export default function dbConnect() {
//   try {
//     mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.log("Error in DB connection", error);
//   }
// }

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI not found");
}

export default async function dbConnect() {
  if (mongoose.connection.readyState === 1) {
    return; // already connected
  }

  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
  }
}
