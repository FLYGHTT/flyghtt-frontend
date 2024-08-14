"use client";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { AppContextType } from "@/types";

export default function AboutComponent() {
  const { clickPosition } = useAppContext() as AppContextType;
  console.log(clickPosition);

  return (
    <motion.div
      className="w-full overflow-hidden"
      initial={{
        opacity: 0,
        scale: 0,
        x: clickPosition.x - window.innerWidth / 2,
        y: clickPosition.y - window.innerHeight / 2,
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
      {" "}
      <div className="w-[150vw] flex ">
        {/* <h1 className="text-black/20 font-extrabold -mx-40 -mt-2 text-[400px] leading-[0.8] w-full">
          About Us
        </h1> */}
      </div>
    </motion.div>
  );
}
