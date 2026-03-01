"use server";

import dbconnect from "./db/dbconnect";
import UserModels from "./model/UserModel";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import dotenv from "dotenv";
import { cookies } from "next/headers";
import Product from "./model/ProductModel";

// env file
dotenv.config();

// user register
export async function UserRegister(FormData) {
  const email = FormData.get("email");
  const password = FormData.get("password");
  console.log(email, password);

  try {
    await dbconnect();

    const existingUser = await UserModels.findOne({ email });

    if (existingUser) {
      return {
        success: false,
        message: "User already exists with this email",
      };
    }
    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const UserRegister = new UserModels({ email, password: hashedPassword });
    await UserRegister.save();
    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      message: "An error occurred while registering the user ",
    };
  }
}

// user login
export async function UserLogin(FormData) {
  try {
    // env secret key
    const SECRET_KEY = process.env.JWT_SECRET_KEY;

    const email = FormData.get("email");
    const password = FormData.get("password");

    console.log(
      "Login attempt - email:",
      email,
      "password exists:",
      !!password
    );

    // Validate input
    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required",
      };
    }

    //  connect db
    await dbconnect();

    // Find the user by email
    const user = await UserModels.findOne({ email });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid password",
      };
    }

    // create JWT token secret from .env file
    if (!SECRET_KEY) {
      console.error("JWT_SECRET_KEY not set in environment");
      return {
        success: false,
        message: "Server configuration error",
      };
    }

    const encodedSecretKey = new TextEncoder().encode(SECRET_KEY);

    const token = await new SignJWT({ user }) // Add user information to the JWT payload
      .setIssuedAt() // Set the issued at time
      .setExpirationTime("1h") // Set the expiration time
      .setProtectedHeader({ alg: "HS256", typ: "JWT" }) // Set the protected header
      .sign(encodedSecretKey); // Sign the token with the secret key

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
    });

    const plainUser = user.toString();
    // return token and user data
    return {
      success: true,
      message: "User logged in successfully",
      token,
      user: plainUser,
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "An error occurred during login",
    };
  }
}

// user logout
export async function UserLogout() {
  // delete cookie
  const cookieStore = await cookies();
  cookieStore.delete("token");
  // return a success message
  return {
    success: true,
    message: "User logged out successfully",
  };
}

// fetch all products from db
export async function fetchProducts() {
  try {
    await dbconnect();
    const products = await Product.find().lean();
    // Convert _id to string to avoid toJSON issues with client components
    return products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

// fetch single product from db

export default async function fetchProduct(id) {
  try {
    await dbconnect();
    const product = await Product.findById(id).lean();

    if (!product) return null;

    // Convert `_id` (and any other non-plain values) to simple serializable values
    return {
      ...product,
      _id: product._id ? product._id.toString() : product._id,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
}
