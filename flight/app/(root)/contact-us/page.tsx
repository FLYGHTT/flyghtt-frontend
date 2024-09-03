"use client";
import React from "react";
import { styles } from "@/components/styles";

import Back from "@/components/Back";
import { FaArrowRight } from "react-icons/fa";
import instagram from "@/assets/icons/instagram1.svg";
import x from "@/assets/icons/x.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import facebook from "@/assets/icons/facebook.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const Contact = () => {
  const icons = [instagram, x, tiktok, facebook];
  return (
    <motion.div
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
      className="flex items-center justify-center h-screen  px-16"
    >
      <div className="absolute top-10 left-60">
        <Back className="bg-lightPurple " />
      </div>

      <div className="flex  items-center h-fit mt-8">
        <div className="flex flex-col items-center">
          {" "}
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="text-dark text-6xl font-bold my-4"
          >
            Contact Us
          </motion.h1>
          <motion.form
            action=""
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-10 w-[60%]"
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="name"
              className={`${styles.input} focus:bg-lightPurple/50`}
            />
            <label htmlFor="email" className="mt-3">
              Email
            </label>
            <input
              type="email"
              className={`${styles.input} focus:bg-lightPurple/50`}
            />
            <label htmlFor="message" className="mt-3">
              Message
            </label>
            <textarea
              className={`${styles.input} focus:bg-lightPurple/50 h-24`}
            />

            <button
              type="submit"
              className="bg-dark justify-center flex items-center gap-3 text-white py-2 mt-6 rounded-md w-[150px]"
            >
              Proceed <FaArrowRight />
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="bg-dark text-white text-xl w-[300px] rounded-md flex flex-col gap-6 justify-center p-6 h-[300px]"
        >
          <div className="flex gap-2 items-center">
            <p>Socials:</p>
            <div className="flex gap-3">
              {icons.map((icon, index) => (
                <Image key={index} src={icon} alt="icon" />
              ))}
            </div>
          </div>
          <p className="">
            Email: <span className="text-sm">help@flight.com</span>
          </p>
          <p className="">
            Phone: <span className="text-sm">09138281054</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
