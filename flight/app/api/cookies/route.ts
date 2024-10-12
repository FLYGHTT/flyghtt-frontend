import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// POST Method (Set Cookie)
export const POST = async (req: NextRequest) => {
  const { token } = await req.json();

  const response = NextResponse.json({
    token,
  });

  const cookieStore = cookies();
  cookieStore.set("flyghtt_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600, // Cookie expiry set to 1 hour
    sameSite: "lax",
    path: "/",
  });

  return response;
};

// DELETE Method (Delete Cookie)
export const DELETE = async (req: NextRequest) => {
  const response = NextResponse.json({
    message: "Cookie deleted",
  });

  // Deleting cookie
  response.cookies.delete("flyghtt_token");
  return response;
};
