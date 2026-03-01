"use server";

import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";

export async function addBook(formData) {
  const bookname = formData.get("bookname");
  const categoryname = formData.get("categoryname");

  // console.log(bookname,categoryname);
  dbconnect();
  // Create a new book document
  const bookpost = new BookModels({
    bookname,
    categoryname,
  });
  // Save the document to the database
  const result = await bookpost.save();

// Return the saved document as a plain JavaScript object
  const plainResult = {
    _id: result._id.toString(),
    bookname: result.bookname,
    categoryname: result.categoryname,
  };
  return plainResult;
}
