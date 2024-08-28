import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/http";
const useGetCurrentUser = (token: string) => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () =>
      fetchData({
        url: "https://flyghtt-backend.onrender.com/api/v1/users",
        token: token,
      }),
  });
  if (isError) {
    console.error("Error fetching current user", error);
  }
  if (data) {
    console.log(token);
    console.log(data, "user dataaaaaaaa");
  }
  console.log(data, "user data");
  return { data, isError, isPending };
};

export default useGetCurrentUser;
