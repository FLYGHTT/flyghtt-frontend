"use client";
import React from "react";
import { styles } from "../styles";
import { AiOutlineSun } from "react-icons/ai";
import useNavigate from "@/hooks/useNavigate";
import Link from "next/link";
import { IconLogin2, IconPhone } from "@tabler/icons-react";
const FirstGrid = () => {
  const { handleClick, scope } = useNavigate();
  const gridStyle =
    "w-full bg-primary flex items-center gap-2 font-semibold justify-center rounded-[20px] cursor-pointer";
  return (
    <div className=" w-full grid grid-cols-12 gap-8" ref={scope}>
      <div className={`${styles.mat} cursor-pointer col-span-5 bg-primary`}>
        About Us
      </div>
      <div
        className={`${styles.mat} cursor-pointer col-span-5 text-lightGray bg-darkGray  text-[120px]`}
        onClick={(e) => handleClick(e, "/about")}
      >
        About Us
      </div>
      <div className="grid grid-rows-2 gap-2 w-full col-span-2 ">
        <Link href="/login" className={gridStyle}>
          <IconLogin2 /> Log in
        </Link>
        {/* <button className={styles.login}>
          <AiOutlineSun />
        </button> */}
        <div
          onClick={(e) => handleClick(e, "/contact-us")}
          className={gridStyle}
        >
          <IconPhone /> Contact Us
        </div>
      </div>
    </div>
  );
};

export default FirstGrid;
