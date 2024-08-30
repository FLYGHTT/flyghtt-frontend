"use client"
import React from "react";
import AddNew from "@/components/Dashboard/AddNew";
import Models from "@/components/Dashboard/Models";
import Loading from "../(root)/loading";
import Error from "../(root)/error";
import { useCurrentUserQuery } from "@/lib/actions";
const Home = () => {
  const { data, isError, isPending } = useCurrentUserQuery();
  const user = data?.data;
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
