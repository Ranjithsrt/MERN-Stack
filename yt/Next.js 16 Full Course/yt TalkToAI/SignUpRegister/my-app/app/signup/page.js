"use client";

import { UserRegister } from "../action";
import { useState } from "react";

export default function UserForm() {
  const [message, setMessage] = useState();

  const handleSubmit = async (FormData) => {
    const result = await UserRegister(FormData);
    setMessage(result.message);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };
  return (
    <>
      <form action={handleSubmit} className="m-20">
        <h1 className="m-10 uppercase text-2xl font-bold">Register Form</h1>

        <input
          type="text"
          placeholder="Enter your email"
          className="m-10 border p-3"
          name="email"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="m-10 border p-3"
          name="password"
        />
        <button
          type="submit"
          className="m-10 bg-blue-700 text-white border p-3 rounded"
        >
          Register
        </button>
      </form>
      <div className="m-20">
        {message && <p className="text-red-500 font-bold uppercase text-2xl">{message}</p>}
      </div>
    </>
  );
}
