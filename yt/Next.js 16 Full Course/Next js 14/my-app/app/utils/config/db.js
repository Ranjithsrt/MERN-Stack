// import mongoose from "mongoose";

// // Database Connection
// export const DBconnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    // mongoose.connection.readyState check (VERY IMPORTANT)
    if (mongoose.connection.readyState >= 1) {
      // already connected
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully..!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // important
  }
};
