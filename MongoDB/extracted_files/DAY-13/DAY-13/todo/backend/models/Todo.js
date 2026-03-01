import mongoose, { Mongoose } from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
