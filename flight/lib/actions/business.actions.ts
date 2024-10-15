"use server";

import http, { baseURL } from "../http";

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
    const response = await http.get(`${baseURL}/business/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteBusiness = async (id: string, token: string) => {
  try {
    const response = await http.delete(`${baseURL}/business/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
