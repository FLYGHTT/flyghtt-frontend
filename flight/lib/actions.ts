import { useQuery, useMutation, MutationOptions } from "@tanstack/react-query";
import { queryClient } from "./http";
import http from "./http";
import { use } from "react";
export const useCreateBusinessMutation = () => {
  return useMutation({
    mutationFn: async (payload: { name: string; description: string }) =>
      http.post("/business", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
    },
  });
};

export const useLoginMutation = (payload: MutationOptions) => {
  const { onSuccess, ...options } = payload;

  return useMutation({
    mutationFn: async () => {
      return http.post("/authentication/login", payload);
    },
    onSuccess,
    ...options,
  });
};

export const useSignUpMutation = (payload: MutationOptions, data) => {
  const { onSuccess, ...options } = payload;
  console.log(payload, "payload");
  return useMutation({
    mutationFn: async () => {
      return http.post("/authentication/sign-up", data);
    },
    onSuccess,
    ...options,
  });
};
export const useSetCookieMutation = (payload: MutationOptions) => {
  const { ...options } = payload;

  return useMutation({
    mutationFn: async () => {
      return http.post("http://localhost:3000/api/login", payload);
    },

    ...options,
  });
};

export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => http.get("/users"),
  });
};

export const useCookieMutation = (
  payload: MutationOptions & { token: string }
) => {
  const { token, ...options } = payload;
  return useMutation({
    mutationFn: async () => {
      return http.post("http://localhost:3000/api/login", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    ...options,
  });
};

export const useVerifyOtpMutation = (
  payload: MutationOptions,
  data: {
    otp: number;
  }
) => {
  const { onSuccess, ...options } = payload;
  console.log(data, "Actionsotpdata");
  return useMutation({
    mutationFn: async () => {
      return http.post("/authentication/verify/otp", data);
    },
    onSuccess,
    ...options,
  });
};
