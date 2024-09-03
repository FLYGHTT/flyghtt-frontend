import {
  useQuery,
  useMutation,
  MutationOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

import http from "../lib/http";
import { Business, LoginInputs, SignUpInputs, User } from "@/types";

// Queries
export const useBusinessesQuery = () => {
  return useQuery<Business[]>({
    queryKey: ["businesses"],
    queryFn: async () => {
      const response = await http.get("/business/user");
      return response.data;
    },
  });
};
export const useGetBusinessByIdQuery = (id: string) => {
  return useQuery<Business>({
    queryKey: ["business", id],
    queryFn: async () => {
      const response = await http.get(`/business/${id}`);
      return response.data;
    },
  });
};
export const useCurrentUserQuery = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => http.get("/users"),
  });
};
//  Mutations
export const useLoginMutation = (
  payload: MutationOptions<
    | User
    | {
        message: string;
      },
    unknown,
    LoginInputs
  >
) => {
  const { onSuccess, ...options } = payload;

  return useMutation<
    | User
    | {
        message: string;
      },
    unknown,
    LoginInputs
  >({
    mutationFn: async (data) => {
      const response = await http.post("/authentication/login", data);
      return response.data;
    },
    onSuccess,
    ...options,
  });
};

export const useSignUpMutation = (
  payload: MutationOptions<
    | User
    | {
        message: string;
      },
    unknown,
    SignUpInputs
  >
) => {
  const { onSuccess, ...options } = payload;

  return useMutation<
    | User
    | {
        message: string;
      },
    unknown,
    SignUpInputs
  >({
    mutationFn: async (data) => {
      const response = await http.post("/authentication/sign-up", data);
      return response.data;
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
export const useDeleteBusinessMutation = (
  payload: UseMutationOptions<
    (index: string) => Promise<{
      data: Business[];
    }>,
    unknown,
    string
  >
) => {
  const { onSuccess, ...options } = payload;
  return useMutation<
    (index: string) => Promise<{
      data: Business[];
    }>,
    unknown,
    string
  >({
    mutationFn: async (index: string) => {
      return http.delete(`/business/${index}`);
    },
    onSuccess,
    ...options,
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
export const useCreateBusinessMutation = (
  payload: MutationOptions<
    | Business
    | {
        message: string;
      },
    {
      response: {
        data: {
          message: string;
        };
      };
    },
    {
      businessName: string;
      description: string;
      businessLogo: File;
    }
  >
) => {
  const { onSuccess, ...options } = payload;
  return useMutation<
    | Business
    | {
        message: string;
      },
    {
      response: {
        data: {
          message: string;
        };
      };
    },
    {
      businessName: string;
      description: string;
      businessLogo: File;
    }
  >({
    mutationFn: async (data) => {
      const response = await http.post("/business", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess,
    ...options,
  });
};

export const useVerifyOtpMutation = (
  payload: MutationOptions<
    | User
    | {
        message: string;
      },
    unknown,
    number
  >
) => {
  const { onSuccess, ...options } = payload;

  return useMutation<
    | User
    | {
        message: string;
      },
    unknown,
    number
  >({
    mutationFn: async (data) => {
      return http.post("/authentication/verify/otp", data);
    },
    onSuccess,
    ...options,
  });
};
