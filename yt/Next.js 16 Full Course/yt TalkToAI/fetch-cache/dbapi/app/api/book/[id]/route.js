import { NextResponse } from "next/server";
import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";

// GET method to fetch book by ID
export async function GET(req,{params}) {
  const {id} = await params;
  dbconnect();
  // fetch data from mongoose model
  const BookRoute = await BookModels.findById({ _id:id});
  return NextResponse.json({ BookRoute });
}

// Example request:
// http://localhost:3000/api/book/692aed1b38c6aeea7eab2d0b

// export async function GET(req, context) {
//   const { params } = context;
//   const resolvedParams = await params; // unwrap promise
//   const id = resolvedParams.id;

//   await dbconnect();

//   const book = await BookModels.findById(id);

//   if (!book) {
//     return NextResponse.json({ error: "Book not found" }, { status: 404 });
//   }

//   return NextResponse.json(book);
// }
