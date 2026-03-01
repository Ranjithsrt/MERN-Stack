"use client";

import { createContext, useState, useEffect, useRef } from "react";
// import ProductAddCart from "../app/product/[id]/ProductAddCart"

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState(() => {
  //     if (typeof window !== "undefined") {
  //         const savedCart = localStorage.getItem("cart");
  //         return savedCart ? JSON.parse(savedCart) : [];
  //     }
  //     return [];
  // });

  // const addToCart = (product) => {
  //     const updatedCart = [...cart, product];
  //     setCart(updatedCart);
  //     if (typeof window !== "undefined") {
  //         localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     }
  // };

  const [cart, setCart] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const tokenRef = useRef(null);

  // helper: decode JWT payload without verification to get user id/email
  const getUserIdFromToken = (token) => {
    if (!token) return null;
    try {
      // JWT-like token: header.payload.signature
      if (token.includes(".")) {
        const parts = token.split(".");
        if (parts.length < 2) return null;
        const payload = parts[1];
        // base64url -> base64
        const b64 = payload.replace(/-/g, "+").replace(/_/g, "/");
        const pad = b64.length % 4;
        const padded = pad ? b64 + "=".repeat(4 - pad) : b64;
        const decoded = atob(padded);
        let json = decoded;
        try {
          json = decodeURIComponent(escape(decoded));
        } catch (e) {}
        const obj = JSON.parse(json);
        return obj && (obj._id || obj.id || obj.userId || obj.email)
          ? obj._id || obj.id || obj.userId || obj.email
          : null;
      }

      // fallback: treat token string itself as identifier
      return token;
    } catch (e) {
      return null;
    }
  };

  // 🔹 Load cart for current user (support per-user cart storage)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");
    tokenRef.current = token;
    const storedUserId = localStorage.getItem("userId");
    const userId = storedUserId || getUserIdFromToken(token) || "guest";
    setCurrentUserId(userId);

    const key = `cart_${userId}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        setCart(JSON.parse(saved));
        console.debug("CartContext: loaded cart for", userId, key);
      } catch (e) {
        console.warn("CartContext: failed to parse saved cart for", key, e);
        setCart([]);
      }
    } else {
      // migrate legacy 'cart' key if present (older code used a single 'cart' key)
      const legacy = localStorage.getItem("cart");
      if (legacy) {
        try {
          const parsed = JSON.parse(legacy);
          setCart(parsed);
          localStorage.setItem(key, JSON.stringify(parsed));
          localStorage.removeItem("cart");
          console.debug("CartContext: migrated legacy cart to", key);
        } catch (e) {
          console.warn("CartContext: failed to parse legacy cart", e);
          setCart([]);
        }
      } else {
        setCart([]);
      }
    }
  }, []);

  // 🔹 Save to localStorage
  // 🔹 Save to user-specific localStorage key when cart changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const userId =
      currentUserId ||
      localStorage.getItem("userId") ||
      getUserIdFromToken(localStorage.getItem("token")) ||
      "guest";
    const key = `cart_${userId}`;
    if (!cart || cart.length === 0) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(cart));
    }
  }, [cart, currentUserId]);

  // 🔹 Detect token changes (same-tab logins) by polling token value
  useEffect(() => {
    if (typeof window === "undefined") return;
    const interval = setInterval(() => {
      const t = localStorage.getItem("token");
      const storedUserId = localStorage.getItem("userId");
      if (t !== tokenRef.current || storedUserId !== currentUserId) {
        tokenRef.current = t;
        const userId = storedUserId || getUserIdFromToken(t) || "guest";
        setCurrentUserId(userId);
        // load that user's cart
        const key = `cart_${userId}`;
        const saved = localStorage.getItem(key);
        setCart(saved ? JSON.parse(saved) : []);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => {
    const productWithQuantity = {
      ...product,
      quantity: 1,
    };
    setCart((prev) => [...prev, productWithQuantity]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
  };

  // 🔹 Increase quantity
  const increaseQuanity = (productId, stock = Infinity) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === productId && item.quantity < stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 🔹 Decrease quantity
  const decreaseQuanity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 🔹 Clear entire cart (useful on logout or user switch)
  const clearCart = () => {
    // remove current user's cart key
    const userId =
      currentUserId ||
      getUserIdFromToken(localStorage.getItem("token")) ||
      "guest";
    const key = `cart_${userId}`;
    try {
      localStorage.removeItem(key);
    } catch (e) {}
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuanity,
        decreaseQuanity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
