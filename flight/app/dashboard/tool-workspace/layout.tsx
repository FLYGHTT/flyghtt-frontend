import Sidebar from "@/components/Tool-Workspace/Sidebar/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="w-[calc(100%-280px)] h-full overflow-y-auto ">{children}</div>
    </div>
  );
};

export default Layout;
