"use server";
import { Tool } from "@/types";
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
export const updateTool = async (tool: Tool, token: string) => {
  try {
    const response = await http.put(`/tools/${tool.toolId}`, tool, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
