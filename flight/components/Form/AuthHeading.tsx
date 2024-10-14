"use client"
import React from "react";
import { motion } from "framer-motion";
import { authHeadingVariants } from "@/lib/variants";
const AuthHeading = ({ text }: { text: string }) => {
  return (
    <motion.h1
      initial="initial"
      animate="visible"
      variants={authHeadingVariants}
      transition={{
        delay: 0.5,
      }}
      className="text-green text-5xl font-bold uppercase"
    >
      {text}
    </motion.h1>
  );
};

export default AuthHeading;
