import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the 'Authorization' header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Handle missing or malformed authorization header
    return res
      .status(401)
      .json({ message: "Authorization header is missing or incorrect" });
  }

  const token = authHeader.split(" ")[1];

  console.log(req.headers);
  console.log(token, "tokenloginapi");

  // Set the token in a cookie
  res.setHeader(
    "Set-Cookie",
    serialize("flyghtt_token", token, {
      httpOnly: true, // Make the cookie HTTP-only
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 3600, // Token expiration time in seconds
      sameSite: "lax", // CSRF protection
      path: "/", // Make the cookie accessible on all routes
    })
  );

  // Send a success response
  res.status(200).json({ message: "Login successful" });
}
