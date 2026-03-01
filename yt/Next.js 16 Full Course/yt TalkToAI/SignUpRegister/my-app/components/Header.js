"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserLogout } from "../app/action/logInAction";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { cart } = useContext(CartContext);
  const cartItemCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?query=${query}`);
    }
  };

  const handleLogout = async () => {
    try {
      const result = await UserLogout();
      if (result.success) {
        localStorage.removeItem("token");
        try {
          localStorage.removeItem("userId");
        } catch (e) {}
        setIsLoggedIn(false);
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem("token");
      try {
        localStorage.removeItem("userId");
      } catch (e) {}
      setIsLoggedIn(false);
      router.push("/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 glass-panel border-b border-white/20 shadow-sm opacity-90"></div>

      <div className="relative flex items-center h-16 sm:h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-4 sm:gap-8">
        {/* Logo */}
        <div
          className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl sm:text-2xl text-slate-800 dark:text-white tracking-tight">
            Shop
            <span className="text-indigo-600 dark:text-indigo-400">Hub</span>
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <form
          onSubmit={handleSubmit}
          className="hidden sm:flex flex-1 max-w-xl mx-auto relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 bg-gray-100/50 dark:bg-slate-800/50 border border-transparent rounded-full leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 sm:text-sm transition-all duration-300"
          />
        </form>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-2 sm:gap-4">
          {mounted ? (
            isLoggedIn ? (
              <>
                <Link
                  href="/cart"
                  className="relative p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                >
                  <span className="sr-only">
                    Items in cart, {cartItemCount}
                  </span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>

                <div className="h-6 w-px bg-gray-200 mx-2"></div>

                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push("/login")}
                  className="text-sm font-semibold text-gray-600 hover:text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Log in
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className="btn-primary"
                >
                  Sign up
                </button>
              </div>
            )
          ) : (
            <div className="w-24 h-8 animate-pulse bg-gray-200 rounded-md"></div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full left-0 z-50 shadow-xl transition-all duration-300 ease-in-out`}
      >
        <div className="pt-2 pb-4 space-y-1 px-4">
          <form onSubmit={handleSubmit} className="mb-4 mt-2">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full pl-4 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </form>

          {mounted &&
            (!isLoggedIn ? (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => router.push("/login")}
                  className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                <Link
                  href="/cart"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Cart ({cartItemCount})
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Sign out
                </button>
              </div>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
