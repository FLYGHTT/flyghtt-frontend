"use client";
import React from "react";
import { styles } from "@/lib/styles";
import { AiOutlineSun } from "react-icons/ai";
import useNavigate from "@/hooks/useNavigate";
const FirstGrid = () => {
  const { handleClick } = useNavigate();
  return (
    <div className="row-span-4 w-full grid grid-cols-12 gap-8">
      <div className={`${styles.mat} col-span-5`}>About Us</div>
      <div
        className={`${styles.mat} col-span-5  text-[120px]`}
        onClick={(e) => handleClick(e, "/about")}
      >
        About Us
      </div>
      <div className="grid grid-rows-12 gap-2 w-full col-span-2 ">
        <div className={`${styles.login} `}>Log in</div>
        <button className={styles.login}>
          <AiOutlineSun />
        </button>
        <div className={styles.login}>Contact Us</div>
      </div>
    </div>
  );
};

export default FirstGrid;
