"use client";
import React from "react";
import { motion } from "framer-motion";
const Background = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <div className=" absolute top-0 left-0 w-[150vw] -z-1">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.8,
        }}
        className={` absolute font-extrabold -mt-2 ${className} leading-[0.8] w-full`}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Background;
