"use client";
import React from "react";
import { motion } from "framer-motion";
import Background from "../Background";
import Content from "../Testimonials/Content";
const TestimonialComponent = () => {
  return (
    <motion.div
      className="w-full overflow-hidden text-white py-14 bg-green relative h-screen flex flex-col "
      initial={{
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <Content />
      <Background
        text="Testimonials"
        className="text-[255px] mt-4 text-paleGreen"
      />
    </motion.div>
  );
};

export default TestimonialComponent;
