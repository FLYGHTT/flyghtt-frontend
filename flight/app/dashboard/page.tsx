
"use client"
import React from "react";
import AddNew from "@/components/Dashboard/AddNew";
import Models from "@/components/Dashboard/Models";
import Welcome from "@/components/ui/Welcome";
const Home = () => {
  return (
    <div>
      <Welcome />
      <div className="grid grid-cols-3 mt-6">
        <AddNew text="New File" />
      </div>
      <Models />
    </div>
  );
};

export default Home;
