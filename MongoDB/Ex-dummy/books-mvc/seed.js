import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/Book.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const books = [];

for (let i = 1; i <= 50; i++) {
  books.push({
    title: `Book ${i}`,
    author: `Author ${i}`,
    price: i * 100,
    publishedYear: 2000 + (i % 20),
  });
}

await Book.insertMany(books);
console.log("50 Books Inserted");

process.exit();
