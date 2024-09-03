import axios from "axios";
import cookie from "cookie";
import Cookies from "js-cookie"; // Import js-cookie for handling cookies on the client side
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    },
  },
});

const baseURL = "https://flyghtt-backend.onrender.com/api/v1";

const http = axios.create({
  baseURL,
});

// Add an interceptor to include the authorization token and API key in each request
http.interceptors.request.use((config) => {
  if (typeof window === "undefined") {
    return config;
  }
  const token = localStorage.getItem("flyghtt_token"); 
  console.log(token, "http");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default http;
