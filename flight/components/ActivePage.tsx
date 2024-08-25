"use client";
import React from "react";
import Home from "./Home";
import { useAppContext } from "@/context";
const ActivePage = () => {
  const { activePage } = useAppContext();
  return (
    <div className="px-6 w-full h-full">
      {activePage === "home" && <Home />}
    </div>
  );
};

export default ActivePage;
