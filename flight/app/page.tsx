"use client"
import Home from "./Home";

import React from "react";
import useNavigate from "@/hooks/useNavigate";
const page = () => {
  const { handleClick } = useNavigate();
  return (
    <div className="" >
      <Home />
    </div>
  );
};

export default page;
