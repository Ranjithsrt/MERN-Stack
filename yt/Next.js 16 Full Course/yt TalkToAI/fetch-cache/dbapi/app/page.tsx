// "use client";

// import dbconnect from "@/db/dbconnect";
// import axios from "axios";

// export default async function Home() {
//   // dbconnect();
//   const fetchItem = async () => {
//     const response = await axios.get("http://localhost:3000/api/book");
//     console.log(response.data);
//   };
//   fetchItem();
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
//       <h1 className="text-4xl font-bold">MongoDB API </h1>
//     </div>
//   );
// }

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { addBook } from "./action";


export default function Home() {
   

  const [books, setBooks] = useState([]);

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const formData = new FormData(event.target);
    const bookname = formData.get("bookname");
    const categoryname = formData.get("categoryname");

    console.log(bookname, categoryname);

    const response = await axios.post("http://localhost:3000/api/book", {
      bookname,
      categoryname,
    });

    console.log("New Book Added", response.data.bookpost);

    // Update the books state to include the newly added book
    setBooks([...books, response.data.bookpost]);

    // Reset the form
    event.target.reset();
  };
  return (
    <>
      <div className="flex flex-col bg-gray-100 text-black min-h-screen items-center justify-center ">
        <h1 className="text-4xl font-bold">MongoDB API</h1>
        <form 
        action={addBook}
        className="mt-4"
      // onSubmit={handleSubmit}
       >
          <input
            type="text"
            placeholder="Book Name"
            name="bookname"
            className="border rounded-md p-2 my-5"
          />
          <br />
          <input
            type="text"
            placeholder="Category Name"
            name="categoryname"
            className="border rounded-md p-2 my-5"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
          >
            Submit
          </button>
        </form>
        {/* render data */}
        <div className="mt-8">
          {books.map((book, index) => (
            <div key={index} className="border p-4 my-2 w-96">
              <h2 className="text-xl font-semibold">{book.bookname}</h2>
              <p className="text-gray-600">{book.categoryname}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
