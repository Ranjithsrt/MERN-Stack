 "use client";
import { revalidatePath } from "next/cache";
 import React, { useState } from "react";

 export default function Page() {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     password: "",
   });

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Submitted Data:", formData);
    //   reset the form data
     revalidatePath("/form");
   };
 
   return (
     <div className="w-full h-screen flex flex-col  justify-center items-center">
       <h1 className="text-4xl font-bold underline m-10">Form</h1>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           className="border block my-2 p-2 "
           placeholder="Enter your name"
           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
         />
         <input
           type="email"
           className="border block my-2 p-2 "
           placeholder="Enter your email"
           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
         />
         <input
           type="password"
           className="border block my-2 p-2 "
           placeholder="Enter your password"
           onChange={(e) =>
             setFormData({ ...formData, password: e.target.value })
           }
         />
         <button type="submit" className="bg-blue-800 text-white p-3">Submit</button>
       </form>
     </div>
   );
 }
