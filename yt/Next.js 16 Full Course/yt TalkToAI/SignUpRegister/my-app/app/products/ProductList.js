"use client";

import Image from "next/image";
import Link from "next/link";
export function ProductList({ products }) {



  const productArray = products.map((product) => (
    <div
      key={product._id}
      className="
       w-[400px]
      mx-auto
      flex border border-gray-300 rounded-xl p-4 mb-4 shadow-md gap-4"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={150}
        height={150}
        className="rounded-lg"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-500">{product.category}</p>
          <p className="font-semibold text-green-700">₹ {product.price}</p>

        
        </div>

        <Link href={`/product/${product._id}`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            View Details
          </button>
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-row gap-5 m-5">{productArray}</div>
    </>
  );
}
