"use client";
import React from "react";

import { usePathname } from "next/navigation";
const MiniNav = () => {
  const pathname = usePathname();
  const splitPath = pathname.split("/")[2];

  return (
    <div className="flex gap-6">
      <h3
        className={`font-semibold ${
          splitPath === undefined ? "border-b-4 border-b-black" : ""
        } cursor-pointer`}
      >
        Me
      </h3>
      <h3
        className={`font-semibold ${
          splitPath === "community" ? "border-b-4 border-b-black" : ""
        } cursor-pointer`}
      >
        Explore
      </h3>
    </div>
  );
};

export default MiniNav;
