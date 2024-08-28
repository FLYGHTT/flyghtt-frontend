"use client";
import React from "react";
import eagle from "@/assets/images/eagle.svg";
import Image from "next/image";
import Back from "@/components/Back";
import { motion } from "framer-motion";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        x: 400,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="h-screen flex items-center justify-center overflow-hidden relative"
    >
      <div className="z-[10]">
        <Back background="bg-black" textColor="text-white" />
      </div>
      <div className="grid grid-cols-2 absolute w-full h-full">
        <div className="bg-dark" />
        <div className="bg-white" />
      </div>
      {children}
      <Image
        src={eagle}
        alt="eagle"
        className="z-[100] absolute bottom-0 right-0"
        width={500}
        height={500}
        priority
      />
    </motion.div>
  );
};

export default Layout;
