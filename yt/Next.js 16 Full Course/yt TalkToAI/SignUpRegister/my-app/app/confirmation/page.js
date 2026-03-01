"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";

const ConfirmationPage = () => {
  const router = useRouter();
  const { cart, clearCart } = useContext(CartContext);

  const [shippingInfo, setShippingInfo] = useState(null);
  const [shippingMethod, setShippingMethod] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    // Load shipping info from localStorage
    if (typeof window !== "undefined") {
      const savedShipping = localStorage.getItem("shippingInfo");
      const savedMethod = localStorage.getItem("shippingMethod");
      const savedCost = localStorage.getItem("shippingCost");

      if (savedShipping) {
        try {
          setShippingInfo(JSON.parse(savedShipping));
        } catch (e) {
          console.warn("Failed to load shipping info:", e);
        }
      }

      if (savedMethod) {
        setShippingMethod(savedMethod);
      }

      if (savedCost) {
        setShippingCost(parseFloat(savedCost));
      }
    }

    // If no shipping info or empty cart, redirect to shipping page
    if (!cart || cart.length === 0) {
      router.push("/shipping");
    }
  }, [cart, router]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const finalTotal = totalPrice + shippingCost;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Generate order ID
      const orderId = `ORD-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`;

      // Prepare order data
      const orderData = {
        orderId,
        items: cart,
        shippingInfo,
        shippingMethod,
        shippingCost,
        paymentMethod,
        subtotal: totalPrice,
        total: finalTotal,
        orderDate: new Date().toISOString(),
        status: "pending",
      };

      // Save order to localStorage
      if (typeof window !== "undefined") {
        const existingOrders = localStorage.getItem("orders");
        const orders = existingOrders ? JSON.parse(existingOrders) : [];
        orders.push(orderData);
        localStorage.setItem("orders", JSON.stringify(orders));

        // Clear shipping info
        localStorage.removeItem("shippingInfo");
        localStorage.removeItem("shippingMethod");
        localStorage.removeItem("shippingCost");
      }

      // Clear cart
      if (clearCart) {
        clearCart();
      }

      setOrderPlaced(true);

      // Redirect to order page
      setTimeout(() => {
        router.push(`/orders/${orderId}`);
      }, 1500);
    } catch (error) {
      console.error("Order submission error:", error);
      alert("An error occurred while placing your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-6">
            Redirecting to your order details...
          </p>
          <div className="animate-spin inline-block w-6 h-6 border-3 border-gray-300 border-t-blue-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!shippingInfo) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-6">
              Loading your order confirmation...
            </p>
            <Link
              href="/shipping"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back to Shipping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shippingMethods = {
    standard: { name: "Standard Shipping (5-7 days)", cost: 5.99 },
    express: { name: "Express Shipping (2-3 days)", cost: 14.99 },
    overnight: { name: "Overnight Shipping", cost: 29.99 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Order Confirmation
          </h1>
          <p className="text-gray-600 mt-2">
            Please review your order details before placing it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Items
              </h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between pb-4 border-b border-gray-200"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity || 1}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Address
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">
                    {shippingInfo.firstName} {shippingInfo.lastName}
                  </span>
                </p>
                <p>{shippingInfo.address}</p>
                <p>
                  {shippingInfo.city}, {shippingInfo.state}{" "}
                  {shippingInfo.zipCode}
                </p>
                <p>{shippingInfo.country}</p>
                <p className="pt-2">
                  <span className="text-gray-600">Email:</span>{" "}
                  {shippingInfo.email}
                </p>
                <p>
                  <span className="text-gray-600">Phone:</span>{" "}
                  {shippingInfo.phone}
                </p>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Method
              </h2>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-medium text-gray-900">
                  {shippingMethods[shippingMethod]?.name || "Standard Shipping"}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Estimated delivery: Check your email for updates
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="space-y-3">
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === "credit-card"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={paymentMethod === "credit-card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="ml-3 font-medium text-gray-900">
                    💳 Credit Card
                  </span>
                </label>

                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === "debit-card"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="debit-card"
                    checked={paymentMethod === "debit-card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="ml-3 font-medium text-gray-900">
                    🏦 Debit Card
                  </span>
                </label>

                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === "paypal"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="ml-3 font-medium text-gray-900">
                    🅿️ PayPal
                  </span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link
                href="/shipping"
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition text-center"
              >
                Edit Shipping
              </Link>
              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
              >
                {loading ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-2 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">
                    ${shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (estimated):</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  ✓ Secure checkout with SSL encryption
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  ✓ Order confirmation will be sent to your email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
