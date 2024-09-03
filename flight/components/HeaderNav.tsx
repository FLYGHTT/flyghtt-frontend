"use client";
import React from "react";

import { useAppContext } from "@/context";
const HeaderNav = () => {
  const { activePage, setActivePage } = useAppContext();

  const goHome = () => {
    setActivePage("home");
  };

  const goExplore = () => {
    setActivePage("explore community");
  };

  return (
    <div className="flex gap-6">
      <h3
        className={`font-semibold ${
          activePage === "home" ? "border-b-4 border-b-black" : ""
        } cursor-pointer`}
        onClick={goHome}
      >
        Me
      </h3>
      <h3
        className={`font-semibold ${
          activePage === "explore community" ? "border-b-4 border-b-black" : ""
        } cursor-pointer`}
        onClick={goExplore}
      >
        Explore
      </h3>
    </div>
  );
};

export default HeaderNav;
