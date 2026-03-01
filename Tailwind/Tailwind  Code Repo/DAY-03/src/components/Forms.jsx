import React from "react";

const Forms = () => {
  return (
    <form className="max-w-sm mx-auto shadow rounded hover:shadow-lg p-5" autoComplete="off">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Your Email
        </label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded p-2.5 w-full focus:outline-blue-500 font-medium text-gray-900" placeholder="name@tutorjoes.com" />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Your Password
        </label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded p-2.5 w-full focus:outline-blue-500 font-medium text-gray-900" />
      </div>

      <div className="mb-5 flex items-center">
        <div className="">
          <input type="checkbox" id="rem" className="w-4 h-4 border-gray-300  focus:ring-3 focus:ring-blue-500 rounded" />
        </div>
        <label htmlFor="rem" className="ms-2 text-sm font-medium text-gray-900">
          Remember Me
        </label>
      </div>

      <button className="text-white bg-blue-700  hover:bg-blue-800 px-5 py-2.5 rounded me-2">Submit</button>
      <button className="text-white bg-red-700  hover:bg-red-800 px-5 py-2.5 rounded">Clear All</button>
    </form>
  );
};

export default Forms;
