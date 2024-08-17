"use client";
import { motion } from "framer-motion";

import Background from "../Background";
import Content from "./Content";
export default function PlanComponent() {
  return (
    <motion.div
      className="w-full overflow-hidden text-white py-14 flex flex-col items-center bg-darkGray relative min-h-screen "
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
        text="Plans"
        className="text-[550px] -mt-32  text-lightGray"
      />
    </motion.div>
  );
}
