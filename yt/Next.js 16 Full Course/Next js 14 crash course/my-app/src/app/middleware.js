//  import { NextResponse } from "next/server";

//  export function middleware(req) {
//    const isUserLoggedIn = false; // later replace with real auth check

//    if (!isUserLoggedIn) {
//      return NextResponse.redirect(new URL("/login", req.url));
//    }

//    return NextResponse.next();
//  }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };

import { NextResponse } from "next/server";

export function middleware(req) {
  const isUserLoggedIn = false;

  if (!isUserLoggedIn) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
