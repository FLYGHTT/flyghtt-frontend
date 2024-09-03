"use client"
import React from "react";
import { plans } from "@/lib/data";
import { SiTicktick } from "react-icons/si";
import Back from "../Back";
import { motion } from "framer-motion";
import crown from "@/assets/icons/crown.svg";
import Image from "next/image";
const Content = () => {
  return (
    <div className="w-full h-screen flex flex-col pt-16 items-center justify-center z-[100] ">
      <Back background="bg-dark" textColor="text-white" />
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="text-6xl py-4 pb-16 font-bold"
      >
        <span className="text-green">Choose</span> your plan
      </motion.h1>
      <div className="flex gap-32">
        {plans.map((plan, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 200, x: i === 0 ? -200 : 200 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col relative rounded-2xl text-white items-center w-[300px] bg-dark justify-center h-[550px]"
              key={i}
            >
              {i === 0 && (
                <Image
                  src={crown}
                  alt="crown"
                  width={50}
                  height={50}
                  className="absolute -top-6 -right-4"
                />
              )}
              <div className="bg-black w-full rounded-2xl rounded-b-none py-5 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-light">{plan.name}</h1>
              </div>
              <div className="flex flex-col w-full h-full p-6 gap-3 px-12">
                {plan.features.map((feature, i) => {
                  return (
                    <div
                      className="flex w-full h-full gap-4 items-center"
                      key={i}
                    >
                      <SiTicktick
                        className={`text-green ${
                          feature.tick ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <p
                        className={`${
                          feature.tick ? "text-white" : " text-black/30"
                        }`}
                      >
                        {feature.title}
                      </p>
                    </div>
                  );
                })}
                <div className="w-full flex justify-center mt-12">
                  <button className="w-[60%] bg-green text-black py-2 rounded-2xl ">
                    Go
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
