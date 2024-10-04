import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const token = req.cookies.get("flyghtt_token");

  if (!token) {
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
