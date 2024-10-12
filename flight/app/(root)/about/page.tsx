"use client";
import { motion } from "framer-motion";
import Background from "@/components/PageBackground";
import Content from "@/components/About/Content";
export default function About() {
  return (
    <div>
      <motion.div
        className="w-full overflow-hidden text-white py-10 flex flex-col items-center bg-darkGray relative min-h-screen"
        id="parent"
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <Content />
        <Background
          text="About Us"
          className="text-[400px] -mx-40 text-lightGray"
        />
      </motion.div>
    </div>
  );
}
