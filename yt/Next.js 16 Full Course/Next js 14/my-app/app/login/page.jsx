"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="font-bold uppercase text-4xl">PLease login</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      <button onClick={()=>router.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Baxk
      </button>
    </div>
  );
};

export default page;
