import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "./middleware/getCurrentUser";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("flyghtt_token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const user = await getCurrentUser(token);

    const { pathname } = req.nextUrl;
 
    // Apply email verification logic only for specific routes
    if (
      pathname.startsWith("/verify-email") ||
      pathname.startsWith("/email-verified")
    ) {
      // Protect verify-email route: Only allow access if email is not verified
      if (pathname.startsWith("/verify-email") && user.emailVerified) {

        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      // Protect email-verified route: Only allow access if email is verified
      if (pathname.startsWith("/email-verified") && !user.emailVerified) {
        return NextResponse.redirect(new URL("/verify-email", req.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Error in middleware:", err);
    return NextResponse.redirect(new URL("/login", req.url));

  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/verify-email/:path*",
    "/email-verified/:path*",
  ],
};
