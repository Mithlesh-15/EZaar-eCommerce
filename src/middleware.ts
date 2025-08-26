
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // const isLoggedIn = req.cookies.get("token")?.value === "true";
  const isLoggedIn = req.cookies.has('token')

  const url = req.nextUrl.clone();
  const path = req.nextUrl.pathname;

  // agar login hai
  if (isLoggedIn) {
    // login aur signup page pe nahi jaa paye
    if (path.startsWith("/log-in") || path.startsWith("/sign-up")) {
      url.pathname = "/"; // home page
      return NextResponse.redirect(url);
    }
  } else {
    // login nahi hai → restricted pages
    if (
      path.startsWith("/cart") ||
      path.startsWith("/my-account") ||
      path.startsWith("/create-new-product")
    ) {
      url.pathname = "/log-in"; // redirect to login
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/log-in",
    "/sign-up",
    "/cart/:path*",
    "/my-account/:path*",
    "/create-new-product/:path*",
  ],
};
