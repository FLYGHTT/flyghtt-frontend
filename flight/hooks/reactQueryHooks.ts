import {
  useQuery,
  useMutation,
  MutationOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

import http from "../lib/http";
import { Business, Tool } from "@/types";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
// Queries
export const useBusinessesQuery = (token: string) => {
  return useQuery<Business[]>({
    queryKey: ["businesses"],
    queryFn: async () => {
      const response = await http.get(`${baseURL}/business/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
export const useGetToolsQuery = (token: string) => {
  return useQuery<Tool[]>({
    queryKey: ["tools"],
    queryFn: async () => {
      const response = await http.get(`${baseURL}/tools`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};
export const useGetToolByIdQuery = (id: string) => {
  return useQuery<Tool>({
    queryKey: ["tool", id],
    queryFn: async () => {
      const response = await http.get(`${baseURL}/tools/${id}`);
      return response.data;
    },
  });
};
//  Mutations

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

interface SubmittedModel {
  toolName: string;
  toolDescription: string;
  link: string;
  commentable: boolean;
  columns: string;
  public: boolean;
}
export const useSubmitModelMutation = (
  payload: MutationOptions<
    {
      message: string;
    },
    unknown,
    SubmittedModel
  >
) => {
  const { onSuccess, ...options } = payload;

  return useMutation<
    {
      message: string;
    },
    unknown,
    SubmittedModel
  >({
    mutationFn: async (data) => {
      return http.post("/tools", data);
    },
    onSuccess,
    ...options,
  });
};
