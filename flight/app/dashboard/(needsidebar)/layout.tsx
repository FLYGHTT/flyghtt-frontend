import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full p-3">
      <Sidebar />
      <div className="w-full">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default layout;
