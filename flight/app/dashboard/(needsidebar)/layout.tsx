import Sidebar from "@/components/Sidebar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-[calc(100%-250px)] bg-gray-100">{children}</div>
    </div>
  );
};

export default layout;
