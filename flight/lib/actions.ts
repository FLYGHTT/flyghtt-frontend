"use server";
import { serialize } from "cookie";
import http from "./http";
import { cookies } from "next/headers";
import { LoggedInUser, User } from "@/types";
export const getBusinessById = async (id: string) => {
  try {
    const response = await http.get(`/business/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBusinesses = async () => {
  try {
    const response = await http.get("/business/user");
    console.log(response.data, "businesses");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const handleSetCookie = (token: string) => {
  cookies().set("flyghtt_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600, // Cookie expiry set to 1 hour
    sameSite: "lax",
    path: "/",
  });
};

export const handleDeleteCookie = () => {
  cookies().delete("flyghtt_token");
};

export const getCurrentUser = async (token?: string) => {
  const CookieStore = cookies();
  const cookieToken = CookieStore.get("flyghtt_token")?.value;

  if (!token && !cookieToken) {
    throw new Error("No token found");
  }
  const response = await http.get<LoggedInUser>(
    "https://flyghtt-backend.onrender.com/api/v1/users",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token || cookieToken}`,
      },
    }
  );
  return response.data;
};
