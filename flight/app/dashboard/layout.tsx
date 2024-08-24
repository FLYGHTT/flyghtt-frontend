import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = () => {
  return (
    <div className="flex p-6 gap-6 h-screen overflow-hidden">
      <Sidebar />
      <Main />
    </div>
  );
};

export default layout;
