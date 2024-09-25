"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { authFormvariants } from "@/lib/variants";
import { useRouter } from "next/navigation";
const EmailVerified = () => {
  const router = useRouter();
  const handleProceed = () => {
    router.push("/dashboard");
  };
  return (
    <motion.div
      className="flex items-center flex-col z-10 bg-white p-8 w-[500px] rounded-xl"
      initial="initial"
      animate="visible"
      variants={authFormvariants}
      transition={{
        delay: 0.5,
      }}
    >
      <motion.div
        className="bg-green p-6 w-fit rounded-full"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 0.6,
        }}
      >
        <FaCheck className="text-6xl text-white" />
      </motion.div>
      <h1 className="text-2xl font-semibold mt-4">Email Verified</h1>
      <p className="max-w-xs my-4 text-center">
        Your email has been verified. Let&apos;s setup your account.
      </p>
      <button
        onClick={handleProceed}
        className="w-full bg-dark text-white py-2 mt-6 rounded-md flex items-center justify-center"
      >
        Proceed to Dashboard
      </button>
    </motion.div>
  );
};

export default EmailVerified;
