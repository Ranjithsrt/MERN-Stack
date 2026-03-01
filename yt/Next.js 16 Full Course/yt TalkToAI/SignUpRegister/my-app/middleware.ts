

// import { NextResponse } from "next/server";
// import { verifyJWT } from "./lib/jwt";
// import { cookies } from "next/headers";

// export async function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const publicRoutes = ["/login", "/signup"];
//   // Get the token

//   const token = request.cookies.get("token")?.value || "";

//   console.log("TOKEN IN MIDDLEWARE:", token);

//   if (!token && publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   if (token && publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   /*

//   if (!token ) {
//     return NextResponse.redirect(new URL("/home", request.url));
//   }

//   try {
//     console.log("Token found", token);

//     const user = await verifyJWT(token);

//     if (!user) {
//       return NextResponse.redirect(new URL("/home", request.url));
//     }
//   } catch (error) {
//     console.log("Error verifying token", error);
//     return NextResponse.redirect(new URL("/home", request.url));
//   }

//   return NextResponse.next();
// }
//   */

//   if (token) {
//     try {
//       const user = await verifyJWT(token);
//       console.log("Token found", token);
//       if (!user) {
//         return NextResponse.redirect(new URL("/login", request.url));
//       }
//       return NextResponse.next();
//     } catch (error) {
//       console.log("Error verifying token", error);
//       return NextResponse.redirect(new URL("/home", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Apply middleware to specific routes

// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*", "/login", "/signup"],
// };


// ------------------------------


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/jwt";

const publicRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value || "";

  // 1️⃣ If user is logged in and visits login/signup → send to dashboard
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 2️⃣ If token missing & user tries to access protected route → send to login
  const isProtectedRoute =
    pathname.startsWith("/dashboard") || pathname.startsWith("/profile");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 3️⃣ If token exists → verify it
  if (token) {
    try {
      const user = await verifyJWT(token);

      if (!user) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } catch (error) {
      console.log("JWT ERROR:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/login", "/signup"],
};
