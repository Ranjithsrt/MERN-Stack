"use client";

const Button = () => {
   return (
     <button
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-30 h-10"
       onClick={() => alert("Hello")}
     >
       Button
     </button>
   );
 };

 export default Button;
