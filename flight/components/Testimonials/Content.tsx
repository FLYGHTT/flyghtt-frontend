import React from "react";

import { motion } from "framer-motion";
import { Testimonials } from "./Testimonials";
import Back from "../Back";
const Content = () => {
  return (
    <div className="w-full h-full flex flex-col items-center  z-[100] justify-center text-black  ">
      <Back background="bg-lightGreen z-[100] " />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,

          y: 200,
        }}
        animate={{
          opacity: 1,
          scale: 1,

          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full flex flex-col  items-center"
      >
        <h1 className="text-3xl font-bold my-4">Hear from our users</h1>
        <p className="text-xl">
          Our users are loving it, take your business to the next level with
          <span className="font-bold"> Flyghtt</span>
        </p>
      </motion.div>
      <Testimonials />
    </div>
  );
};

export default Content;
