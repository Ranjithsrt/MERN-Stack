import { NextResponse, NextRequest } from "next/server";
import dbconnect from "@/db/dbconnect";
import BookModels from "@/model/BookModel";

export async function GET() {
  // connect to database
  dbconnect();
  const BookRoute = await BookModels.find({});
  return NextResponse.json({ BookRoute });
}

/*
export async function POST(req) {
  // connect to database
  dbconnect();
  const { bookname, categoryname } = await req.json();
  const bookpost = new BookModels({
    bookname,
    categoryname,
  });
  // save to database
  await bookpost.save();
  return NextResponse.json({ bookpost }, { status: 201 });
}

*/
