"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const ShippingPage = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const shippingOptions = {
    standard: { name: "Standard Shipping (5-7 days)", cost: 5.99 },
    express: { name: "Express Shipping (2-3 days)", cost: 14.99 },
    overnight: { name: "Overnight Shipping", cost: 29.99 },
  };

  // Load saved shipping info from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedShipping = localStorage.getItem("shippingInfo");
      if (savedShipping) {
        try {
          setFormData(JSON.parse(savedShipping));
        } catch (e) {
          console.warn("Failed to load shipping info:", e);
        }
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Save shipping info and method to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("shippingInfo", JSON.stringify(formData));
        localStorage.setItem("shippingMethod", shippingMethod);
        localStorage.setItem(
          "shippingCost",
          shippingOptions[shippingMethod].cost.toString()
        );
      }

      // Redirect to confirmation page
      router.push("/confirmation");
    } catch (error) {
      console.error("Shipping submission error:", error);
      setErrors({ form: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-6">📦</div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Add items to your cart before proceeding to shipping
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-semibold"
          >
            Continue Shopping <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shippingCost = shippingOptions[shippingMethod].cost;
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Shipping Details
          </h1>
          <p className="text-gray-400 text-lg">
            Enter your address to proceed with checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 shadow-2xl"
            >
              {/* Error Message */}
              {errors.form && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg">
                  {errors.form}
                </div>
              )}

              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Mail size={20} className="text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">
                    Personal Information
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                        errors.firstName ? "border-red-500" : "border-slate-600"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                        errors.lastName ? "border-red-500" : "border-slate-600"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                        errors.email ? "border-red-500" : "border-slate-600"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                        errors.phone ? "border-red-500" : "border-slate-600"
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={20} className="text-cyan-400" />
                  <h2 className="text-xl font-semibold text-white">
                    Address Information
                  </h2>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                      errors.address ? "border-red-500" : "border-slate-600"
                    }`}
                    placeholder="123 Main Street"
                  />
                  {errors.address && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                        errors.city ? "border-red-500" : "border-slate-600"
                      }`}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="text-red-400 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      State/Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all ${
                        errors.state ? "border-red-500" : "border-slate-600"
                      }`}
                      placeholder="NY"
                    />
                    {errors.state && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.state}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.zipCode ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="10001"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.country ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="United States"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Shipping Method
                </h2>
                <div className="space-y-3">
                  {Object.entries(shippingOptions).map(([key, option]) => (
                    <label
                      key={key}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                        shippingMethod === key
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="shippingMethod"
                        value={key}
                        checked={shippingMethod === key}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <div className="ml-3 flex-1">
                        <p className="font-medium text-gray-900">
                          {option.name}
                        </p>
                      </div>
                      <p className="font-semibold text-gray-900">
                        ${option.cost.toFixed(2)}
                      </p>
                    </label>
                  ))}
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {loading ? "Processing..." : "Continue to Confirmation"}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-3 pb-4 border-b border-gray-200">
                {cart.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity || 1}
                    </span>
                    <span className="font-medium text-gray-900">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 py-4 border-b border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping:</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-blue-600">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

              {/* Back to Cart */}
              <Link
                href="/cart"
                className="mt-4 block text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
