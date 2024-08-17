"use client";
import { motion } from "framer-motion";

import Background from "../Background";
import Content from "./Content";
export default function AboutComponent() {
  return (
    <motion.div
      className="w-full overflow-hidden text-white py-10 flex flex-col items-center bg-darkGray relative min-h-screen "
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

      <Background text="About Us" className="text-[400px] -mx-40 text-lightGray" />
    </motion.div>
  );
}
