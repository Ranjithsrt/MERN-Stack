const mongoose = require("mongoose");

// create schema for student - table
// name, age, email, password - collection columns or fields

// mongoose.Schema -  create table or collection automatically with help of schema 
// mongoose - insert data (from data - server - database)
const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  } 
);

// export model
// student - collection name
module.exports = mongoose.model("Student", StudentSchema);
