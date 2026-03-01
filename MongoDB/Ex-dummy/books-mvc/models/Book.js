import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // must have title
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    publishedYear: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
