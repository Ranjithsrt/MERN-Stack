"use client";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuanity, decreaseQuanity } =
    useContext(CartContext);

  // Calculate totals
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container-md">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            You have <span className="font-bold text-lg">{totalItems}</span>{" "}
            item{totalItems !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          // Empty Cart
          <div className="card p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Start shopping to add items to your cart
            </p>
            <Link href="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="card overflow-hidden">
                {cart.map((item, index) => (
                  <div
                    key={item._id || index}
                    className="border-b border-gray-200 p-6 hover:bg-gray-50 transition"
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <span className="text-4xl">📦</span>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description || "No description"}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <p className="text-sm text-gray-600">Price</p>
                            <p className="text-xl font-bold text-gray-900">
                              ₹{(item.price || 0).toFixed(2)}
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                            <button
                              onClick={() => decreaseQuanity(item._id)}
                              className="px-3 py-1 bg-white rounded hover:bg-gray-200 transition font-bold text-gray-700"
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <span className="px-4 font-bold text-gray-900">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() =>
                                increaseQuanity(item._id, item.stock)
                              }
                              className="px-3 py-1 bg-white rounded hover:bg-gray-200 transition font-bold text-gray-700"
                              disabled={
                                (item.quantity || 1) >= (item.stock || 999)
                              }
                            >
                              +
                            </button>
                          </div>

                          {/* Subtotal */}
                          <div>
                            <p className="text-sm text-gray-600">Subtotal</p>
                            <p className="text-xl font-bold text-gray-900">
                              ₹
                              {(
                                (item.price || 0) * (item.quantity || 1)
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 hover:text-red-700 transition font-bold text-lg"
                        title="Remove from cart"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link href="/products" className="mt-6 inline-block btn-ghost">
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (18% GST)</span>
                    <span>₹{(totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>₹{(totalPrice * 1.18).toFixed(2)}</span>
                </div>

                <Link
                  href="/shipping"
                  className="block w-full text-center btn-primary mb-3"
                >
                  Proceed to Checkout
                </Link>

                <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
