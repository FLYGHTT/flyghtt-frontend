
import { serialize } from "cookie";
// import n
export default async function handler(req, res) {
  const {token }= req.body;
  res.setHeader(
    "Set-Cookie",
    serialize("flyghtt_token", JSON.stringify(token), {
      httpOnly: true, // Make the cookie HTTP-only
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: 3600, // Token expiration time in seconds
      sameSite: "lax", // CSRF protection
      path: "/", // Make the cookie accessible on all routes
    })
  );

  res.status(200).json({ message: "Login successful" });
}
