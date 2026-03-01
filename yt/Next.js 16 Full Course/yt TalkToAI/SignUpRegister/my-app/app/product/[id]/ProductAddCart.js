"use client";

import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function ProductAddCart({ product }) {
  const { cart, addToCart, removeFromCart, increaseQuanity, decreaseQuanity } = useContext(CartContext);

  // const addToCart = () => {
  //   const updated = [...cart, product];
  //   setCart(updated);
  //   console.log("Cart:", updated);
  // };

  const isProductInCart = () => {
    const filteredItems = cart.filter((item) => item._id === product._id);
    return filteredItems.length > 0;
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncreaseQuality = (productId, productstock) => {
    increaseQuanity(productId, productstock);
  };

  const handleDecreaseQuality = (productId) => {
    decreaseQuanity(productId);
  };

  return (
    <div className="flex m-10 flex-col justify-between  border border-gray-300 rounded-xl p-10 mb-4 shadow-md gap-4 text-center ">
      <Image
        src={product.image}
        alt={product.name}
        width={150}
        height={150}
        className="rounded-lg text-center block mx-auto"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-lg my-5">{product.name}</h2>
          <p className="text-gray-500 my-5">{product.category}</p>
          <p className="font-semibold text-green-700">₹ {product.price}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg my-5  w-100 mx-auto"
          disabled={isProductInCart()}
        >
          {isProductInCart() ? "Already in Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="cart mt-6">
        <h2 className="font-bold text-lg">Cart:{cart.length}</h2>

        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                layout="intrinsic"
                className="rounded-lg text-center block mx-auto my-5"
              />

              <div className="flex flex-col justify-between
               bg-gray-300 p-15 text-black
              ">
                {/* <p>{item._id}</p> */}
                <p className="font-bold text-lg my-2">{item.name}</p>
                <p className="font-semibold text-green-700 my-3">{item.price}</p>
                <p className="font-serif">{item.description}</p>
                <p className="font-semibold  mt-5 bg-black text-white p-3 w-25 mx-auto">{item.quantity}</p>
              </div>

              {/* incress and decress */}

              <div className="flex justify-center gap-2 my-5">
                <button
                  onClick={() => handleIncreaseQuality(item._id, item.stock)}
                  className="
                w-10 h-10 text-lg border border-gray-300 rounded-md bg-gray-200 text-orange-700
                "
                >
                  +
                </button>
                <button
                  onClick={() => handleDecreaseQuality(item._id)}
                  className="
                w-10 h-10 text-lg border border-gray-300 rounded-md  bg-gray-200 text-orange-700
                "
                >
                  -
                </button>
              </div>

              {/* <RemoveItem item={item} /> */}

              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg my-5"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="font-bold text-lg">Total items in cart: {cart.length}</h3>
      <p className="font-semibold text-lg">Total Price : {cart.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
}
