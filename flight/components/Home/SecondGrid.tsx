"use client"
import React from "react";
import Image from "next/image";
import { styles } from "@/lib/styles";
import useNavigate from "@/hooks/useNavigate";
import logo from "@/public/logo.svg";
const SecondGrid = () => {
  const { handleClick } = useNavigate();
  return (
    <div className="row-span-4 w-full grid grid-cols-12 gap-8">
      <div
        className={`${styles.mat} col-span-4 text-[100px] overflow-hidden  `}
        onClick={(e) => handleClick(e, "/about")}
      >
        <span className="-mr-4 text-clip" >Features</span>
      </div>
      <div
        className={`${styles.mat} col-span-4 bg-transparent flex  items-center justify-center flex-col`}
      >
        <Image src={logo} alt="logo" priority />
        <p className="my-4 text-black">Take your startup to new heights</p>
        <button className="uppercase w-1/2 bg-primary text-black py-4 mt-3 rounded-2xl ">
          Get Started
        </button>
      </div>
      <div className={`${styles.mat} col-span-4 text-[85px] overflow-hidden  `}>
        <span className="-mr-9 text-clip">Testimonials</span>
      </div>
    </div>
  );
};

export default SecondGrid;
