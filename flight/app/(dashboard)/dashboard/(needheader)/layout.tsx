import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
    {children}
    </>
  );
};

export default layout;
