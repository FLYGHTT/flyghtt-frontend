"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
  return (
    <AnimatePresence mode="wait">
      //{" "}
      <motion.div
        // key={pathname}
        initial={{ opacity: 0, scale: 0, }}
        animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="h-screen w-full bg-pink-500 flex p-10 items-center flex-col "
      >
        <h1 className="text-[100px] font-bold tracking-[20px]">DAX</h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
