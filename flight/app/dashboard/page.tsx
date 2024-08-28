"use client";
import React from "react";
import AddNew from "@/components/Dashboard/AddNew";
import Models from "@/components/Dashboard/Models";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import Error from "../error";
const Home = () => {
  const router = useRouter();

  const token = localStorage.getItem("flyghtt_token");

  console.log(token, "token");
  const { data: user, isError, isPending } = useGetCurrentUser(token || "");
  if (!token) {
    router.push("/login");
    console.log("no token");
    return null;
  }
  if (isPending || !user) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <h1 className="text-2xl">
        Welcome <b>{user.firstName}!</b>
      </h1>
      <div className="grid grid-cols-3 mt-6">
        <AddNew text="New File" />
      </div>
      <Models />
    </div>
  );
};

export default Home;
