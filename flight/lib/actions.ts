"use server";

import { redirect } from "next/navigation";
import http, { baseURL } from "./http";

import { LoggedInUser } from "@/types";
export const getBusinessById = async (id: string, token: string) => {
  try {
    const response = await fetch(`${baseURL}/business/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBusinesses = async (token: string) => {
  try {
    if (!token) {
      throw new Error("No token found");
    }
    const response = await fetch(`${baseURL}/business/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getTools = async () => {
  try {
    const response = await http.get("/tools");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (token: string): Promise<LoggedInUser> => {
  console.log(token, "token");
  if (!token) {
    redirect("/login");
  }
  try {
    const response = await fetch(`${baseURL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
