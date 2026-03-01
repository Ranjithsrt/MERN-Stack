"use client";

import { UserLogin } from "../action";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (!email || !password) {
        setError("Email and password are required");
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await UserLogin(formData);

      if (result.success) {
        localStorage.setItem("token", result.token);
        // derive and save a simple userId for CartContext (fallback)
        try {
          const token = result.token;
          if (token) {
            const parts = token.split(".");
            if (parts.length >= 2) {
              const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
              const pad = b64.length % 4;
              const padded = pad ? b64 + "=".repeat(4 - pad) : b64;
              const decoded = atob(padded);
              let json = decoded;
              try {
                json = decodeURIComponent(escape(decoded));
              } catch (e) {}
              const obj = JSON.parse(json);
              const userId =
                obj && (obj._id || obj.id || obj.userId || obj.email)
                  ? obj._id || obj.id || obj.userId || obj.email
                  : null;
              if (userId) localStorage.setItem("userId", userId);
            } else {
              // token may already be a user identifier
              localStorage.setItem("userId", token);
            }
          }
        } catch (e) {
          console.warn("login: could not derive userId from token", e);
        }
        router.push("/dashboard");
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-20">
        <h1 className="m-10 uppercase text-2xl font-bold">Login Form</h1>
        {error && <p className="m-10 text-red-600 font-bold">{error}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          className="m-10 border p-3"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="m-10 border p-3"
          name="password"
          required
        />
        <button
          type="submit"
          className="m-10 bg-blue-700 text-white border p-3 rounded hover:bg-blue-800"
        >
          Login
        </button>
      </form>
    </>
  );
}
