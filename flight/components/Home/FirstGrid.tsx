"use client"
import React from "react";
import { styles } from "../styles";
import { AiOutlineSun } from "react-icons/ai";
import useNavigate from "@/hooks/useNavigate";
import Link from "next/link";

const FirstGrid = () => {
  const { handleClick, scope } = useNavigate();

  return (
    <div className="row-span-4 w-full grid grid-cols-12 gap-8" ref={scope}>
      <div className={`${styles.mat} cursor-pointer col-span-5`}>About Us</div>
      <div
        className={`${styles.mat} cursor-pointer col-span-5 text-lightGray bg-darkGray  text-[120px]`}
        onClick={(e) => handleClick(e, "/about")}
      >
        About Us
      </div>
      <div className="grid grid-rows-12 gap-2 w-full col-span-2 ">
        <Link href="/login" className={`${styles.login} `}>
          Log in
        </Link>
        <button className={styles.login}>
          <AiOutlineSun />
        </button>
        <div
          onClick={(e) => handleClick(e, "/contact-us")}
          className={styles.login}
        >
          Contact Us
        </div>
      </div>
      
    </div>
  );
};

export default FirstGrid;
