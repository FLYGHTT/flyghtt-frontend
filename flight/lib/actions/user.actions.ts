"use server";

import { signIn, signOut } from "@/auth";
import http from "../http";
import { SignUpInputs, User, UserDetails } from "@/types";
import { baseURL } from "../http";

export const getUser = async (email: string, password: string) => {
  try {
    const response = await http.post("/authentication/login", {
      email,
      password,
    });
    const user: User = response.data;
    console.log(user, "useraction", email);

    if (!user) {
      console.log("nouser");
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  const response = await signIn("credentials", { email, password });
  return response;
};
export const signOutUser = async () => {
  await signOut();
};
export const signUpUser = async (data: any) => {
  const response = await http.post("/authentication/sign-up", data);
  return response.data;
};
export const verifyUser = async (data: { otp: number }, token: string) => {
  console.log(data, "data");
  const response = await http.post("/authentication/verify/otp", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const getUserDetails = async (
  token: string
): Promise<UserDetails | null> => {
  try {
    const response = await http.get(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userDetails = response.data;
    return userDetails;
  } catch (error) {
    throw error;
  }
};
