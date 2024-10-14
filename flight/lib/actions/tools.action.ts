"use server";
import http from "../http";
export const getTools = async (token: string) => {
  try {
    const response = await http.get("/tools", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
