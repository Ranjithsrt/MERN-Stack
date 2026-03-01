"use server";

import { cookies } from "next/headers";

export async function UserLogout() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");

    return {
      success: true,
      message: "User logged out successfully",
    };
  } catch (error) {
    console.error("Logout error:", error);
    return {
      success: false,
      message: "Error logging out",
    };
  }
}
