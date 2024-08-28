import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    serialize("flyghtt_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: -1, // Expire the cookie immediately
      path: "/",
    })
  );

  res.status(200).json({ message: "Logout successful" });
}
