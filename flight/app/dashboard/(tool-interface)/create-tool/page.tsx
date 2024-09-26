import CreateToolHeader from "@/components/CreateTool/CTHeader";
import CTInterface from "@/components/CreateTool/CTInterface";
import CreateToolSidebar from "@/components/CreateTool/CTSidebar";

import React from "react";

const Page = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-12">
      <div className="col-span-2">
        <CreateToolHeader />

        <CreateToolSidebar />
      </div>
      <CTInterface />
    </div>
  );
};

export default Page;
