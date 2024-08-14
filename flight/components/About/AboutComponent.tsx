"use client";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { AppContextType } from "@/types";

import Background from "./Background";
import Content from "./Content";
export default function AboutComponent() {
  const { clickPosition } = useAppContext() as AppContextType;
  console.log(clickPosition);

  return (
    <motion.div
      className="w-full overflow-hidden text-white py-14 flex flex-col items-center bg-darkGray relative min-h-screen "
      initial={{
        // opacity: 0,
        scale: 0.8,
        // x: clickPosition.x - window.innerWidth / 2,
        // y: clickPosition.y - window.innerHeight / 2,
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

      <Background />
    </motion.div>
  );
}
