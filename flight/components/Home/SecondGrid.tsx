"use client";
import React from "react";
import Image from "next/image";
import { styles } from "../styles";
import useNavigate from "@/hooks/useNavigate";
import logo from "@/public/logo.svg";
import Link from "next/link";
const SecondGrid = () => {
  const { handleClick, scope } = useNavigate();
  return (
    <div className="row-span-4 w-full grid grid-cols-12 gap-8" ref={scope}>
      <div
        className={`${styles.mat} bg-green text-black/20  col-span-4 text-[100px] overflow-hidden cursor-pointer `}
        onClick={(e) => handleClick(e, "/about")}
      >
        <span className="-mr-4 text-clip">Features</span>
      </div>
      <div
        className={`${styles.mat} cursor-default col-span-4 bg-transparent flex  items-center justify-center flex-col`}
      >
        <Image src={logo} alt="logo" priority className="cursor-default"/>
        <p className="my-4 text-black cursor-default">Take your startup to new heights</p>
        <Link href="/signup" className="uppercase w-1/2 bg-primary text-black py-4 mt-3 rounded-2xl flex justify-center ">
          Get Started
        </Link>
      </div>
      <div
        className={`${styles.mat} col-span-4  text-black/20 cursor-pointer bg-green text-[85px] overflow-hidden  `}
        onClick={(e) => handleClick(e, "/testimonials")}
      >
        <span className="-mr-9 text-clip">Testimonials</span>
      </div>
    </div>
  );
};

export default SecondGrid;
