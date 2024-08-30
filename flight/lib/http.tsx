import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

const baseURL = "https://flyghtt-backend.onrender.com/api/v1";

const http = axios.create({
  baseURL,
});

// Add an interceptor to include the authorization token and API key in each request
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("flyghtt_token");
  console.log(token, "http");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default http;
