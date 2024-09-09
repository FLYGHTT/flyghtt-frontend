import CreateToolHeader from "@/components/Dashboard/CreateTool/CTHeader";
import CTInterface from "@/components/Dashboard/CreateTool/CTInterface";
import CreateToolSidebar from "@/components/Dashboard/CreateTool/CTSidebar";
import { HoverDiv } from "@/components/HoverDiv";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-rows-12">
      <CreateToolHeader />
      <div className="grid grid-cols-12 overflow-hidden  h-screen row-span-11">
        <CreateToolSidebar />
        <CTInterface />
       
      </div>
    </div>
  );
};

export default Page;
