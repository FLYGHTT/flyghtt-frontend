"use client";
import React from "react";
import useNavigate from "@/hooks/useNavigate";
import { styles } from "../styles";
const ThirdGrid = () => {
  const { handleClick } = useNavigate();
  return (
    <div className=" w-full grid grid-cols-12 gap-8">
      <div
        className={`${styles.mat} cursor-pointer text-lightGray bg-darkGray  col-span-7 text-[230px] overflow-hidden  `}
        onClick={(e) => handleClick(e, "/plans")}
      >
        <span className="-mr-8 text-clip">Plans</span>
      </div>
      <div
        className={`${styles.mat} col-span-5 cursor-pointer text-[85px] bg-primary overflow-hidden  `}
      >
        About Us
      </div>
    </div>
  );
};

export default ThirdGrid;
