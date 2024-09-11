import React from "react";
import AddNew from "@/components/Dashboard/AddNew";
import Models from "@/components/Dashboard/Models";
import { getCurrentUser } from "@/lib/actions";
const Home = async () => {
  const user = await getCurrentUser();
  const { firstName } = user;
  return (
    <div>
      <h1 className="text-2xl">
        Welcome <b>{firstName}!</b>
      </h1>
      <div className="grid grid-cols-3 mt-6">
        <AddNew text="New File" />
      </div>
      <Models />
    </div>
  );
};

export default Home;
