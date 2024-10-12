import React from "react";

import ToolCategories from "@/components/ToolCategories";
import CreateNewTool from "@/components/CreateNewTool";
const Page = async () => {
  return (
    <div className="p-7 ">
      <h1 className="text-xl font-bold">My Tools</h1>
      <CreateNewTool />
      <ToolCategories />
    </div>
  );
};

export default Page;
