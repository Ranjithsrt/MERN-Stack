"use client";

import { useState, useEffect } from "react";

const page = () => {
  const [laptops, setLaptops] = useState([]);

  const fetchLaptops = async () => {
    try {
      const response = await fetch("/api/products/laptop"); // relative URL works
      const data = await response.json();
      setLaptops(data.laptops || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-center">All Laptops</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Laptop ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Model</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border" colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {laptops.length > 0 ? (
              laptops.map((laptop) => (
                <tr key={laptop._id} className="hover:bg-gray-100">
                  <td className="p-2 border">{laptop._id}</td>
                  <td className="p-2 border">{laptop.title}</td>
                  <td className="p-2 border">{laptop.model}</td>
                  <td className="p-2 border">{laptop.price}</td>
                    <td className="p-2 border  ">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">Update</button>
                    </td>

                    <td className="p-2 border">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                    </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No laptops found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
