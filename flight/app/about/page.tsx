"use client";
import { motion } from "framer-motion";
import Background from "@/components/Background";
import Content from "@/components/About/Content";
import useNavigate from "@/hooks/useNavigate";
// import useNavigate from "@/hooks/useNavigate";
export default function About() {
  const { handleExit } = useNavigate();

  const { parentRef } = useNavigate();
  return (
    <div>
      <motion.div
        className="w-full overflow-hidden text-white py-10 flex flex-col items-center bg-darkGray relative min-h-screen"
        id="parent"
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        // onClick={(e) => handleExit(e, { opacity: 0, scale: 0.8 })}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        // exit={{
        //   opacity: 0,
        //   scale: 0.8,
        // }}
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
