"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const OrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load order from localStorage
    if (typeof window !== "undefined") {
      try {
        const ordersData = localStorage.getItem("orders");
        if (ordersData) {
          const orders = JSON.parse(ordersData);
          const foundOrder = orders.find((o) => o.orderId === id);
          if (foundOrder) {
            setOrder(foundOrder);
          }
        }
      } catch (e) {
        console.error("Failed to load order:", e);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full"></div>
          <p className="text-gray-600 mt-4">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Order Not Found
            </h2>
            <p className="text-gray-600 mb-6">We couldn't find order {id}</p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const orderDate = new Date(order.orderDate);
  const formattedDate = orderDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = orderDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case "pending":
        return "Your order has been placed and is waiting to be processed.";
      case "processing":
        return "Your order is being prepared for shipment.";
      case "shipped":
        return "Your order has been shipped. Track it using the tracking number.";
      case "delivered":
        return "Your order has been delivered successfully!";
      case "cancelled":
        return "Your order has been cancelled.";
      default:
        return "Unknown status.";
    }
  };

  const shippingMethods = {
    standard: "Standard Shipping (5-7 days)",
    express: "Express Shipping (2-3 days)",
    overnight: "Overnight Shipping",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
          <p className="text-gray-600 mt-2">Order ID: {order.orderId}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Status
              </h2>
              <div className={`p-4 rounded-lg ${getStatusColor(order.status)}`}>
                <p className="font-semibold capitalize mb-2">{order.status}</p>
                <p className="text-sm">{getStatusMessage(order.status)}</p>
              </div>

              {/* Status Timeline */}
              <div className="mt-6 space-y-4">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white">
                      ✓
                    </div>
                    <div className="w-0.5 h-16 bg-green-200 my-2"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Order Placed</p>
                    <p className="text-sm text-gray-600">
                      {formattedDate} at {formattedTime}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`flex items-center justify-center h-8 w-8 rounded-full ${
                        ["processing", "shipped", "delivered"].includes(
                          order.status
                        )
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {["processing", "shipped", "delivered"].includes(
                        order.status
                      )
                        ? "✓"
                        : "•"}
                    </div>
                    <div className="w-0.5 h-16 bg-gray-200 my-2"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Processing</p>
                    <p className="text-sm text-gray-600">
                      {["processing", "shipped", "delivered"].includes(
                        order.status
                      )
                        ? "Completed"
                        : "In progress"}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`flex items-center justify-center h-8 w-8 rounded-full ${
                        ["shipped", "delivered"].includes(order.status)
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {["shipped", "delivered"].includes(order.status)
                        ? "✓"
                        : "•"}
                    </div>
                    <div className="w-0.5 h-16 bg-gray-200 my-2"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Shipped</p>
                    <p className="text-sm text-gray-600">
                      {["shipped", "delivered"].includes(order.status)
                        ? "On the way"
                        : "Pending"}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`flex items-center justify-center h-8 w-8 rounded-full ${
                        order.status === "delivered"
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      {order.status === "delivered" ? "✓" : "•"}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Delivered</p>
                    <p className="text-sm text-gray-600">
                      {order.status === "delivered" ? "Delivered" : "Not yet"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Items
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between pb-4 border-b border-gray-200 last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity || 1}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: ${item.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Shipping Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Shipping Address
                  </p>
                  <div className="text-gray-900 space-y-1">
                    <p>
                      {order.shippingInfo.firstName}{" "}
                      {order.shippingInfo.lastName}
                    </p>
                    <p>{order.shippingInfo.address}</p>
                    <p>
                      {order.shippingInfo.city}, {order.shippingInfo.state}{" "}
                      {order.shippingInfo.zipCode}
                    </p>
                    <p>{order.shippingInfo.country}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Contact Information
                  </p>
                  <div className="text-gray-900 space-y-1">
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {order.shippingInfo.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {order.shippingInfo.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">
                  Shipping Method
                </p>
                <p className="text-gray-700">
                  {shippingMethods[order.shippingMethod] || "Standard Shipping"}
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-900 font-medium capitalize">
                  {order.paymentMethod.replace("-", " ")}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6 sticky top-20 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-2 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">
                    ${order.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">
                    ${order.shippingCost.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Track Package
              </button>
              <button className="w-full px-4 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition">
                Contact Support
              </button>
              <Link
                href="/products"
                className="block text-center px-4 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Need Help */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-gray-900 mb-2">
                Need Help?
              </p>
              <p className="text-sm text-gray-600 mb-3">
                If you have any questions about your order, please contact our
                support team.
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
