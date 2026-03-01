"use client";

import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  const laptopDataHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/products/laptop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name,
        model: brand,
        price: Number(price),
      }),
    });

    if (response.ok) {
      alert("Laptop product added successfully!");
    } else {
      alert("Failed to add laptop product");
      throw new Error("Failed to add laptop product");
    }
    const data = await response.json();
    console.log(data);

    setName("");
    setPrice("");
    setBrand("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold uppercase text-center mb-6">
          Add Laptop Products
        </h1>

        <form className="space-y-4" onSubmit={laptopDataHandler}>
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex..,Dell, HP, Apple"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Model</label>
            <input
              type="text"
              name="model"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             placeholder="Ex..,Inspiron 15, MacBook Pro"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             placeholder="Ex., 999.99"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;

// http://localhost:3000/addproducts/add-laptop/
