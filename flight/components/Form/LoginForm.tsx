"use client";
import React from "react";
import { styles } from "../styles";
import Link from "next/link";
import { motion } from "framer-motion";
import { authFormvariants } from "@/lib/variants";
import useLoginAuth from "@/hooks/useLoginAuth";
import Password from "../ui/Password";
import { FaCog } from "react-icons/fa";

const LoginForm = () => {
  const { inputs, handleChange, handleSubmit, error, isPending } =
    useLoginAuth();

  return (
    <motion.form
      onSubmit={(e) => handleSubmit(e)}
      className="mt-10 bg-white p-8 w-[500px] rounded-xl"
      initial="initial"
      animate="visible"
      variants={authFormvariants}
      transition={{
        delay: 0.5,
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className={styles.input}
        value={inputs.email}
        id="email"
        onChange={handleChange}
        autoComplete="email"
      />
      <label htmlFor="password" className="mt-3">
        Password
      </label>
      <Password id="password" value={inputs.password} onChange={handleChange} />

      <span className="mt-24 text-xs">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-green">
          Sign Up
        </Link>
      </span>
      <div className="w-full flex items-center justify-center flex-col gap-2">
        <button
          type="submit"
          disabled={isPending}
          className="bg-dark text-white py-2 mt-6 rounded-md w-[150px] disabled:cursor-not-allowed disabled:opacity-50 flex gap-3 items-center justify-center "
        >
          {isPending ? "Please Wait" : "Log in"}
          {isPending ? <FaCog className="animate-spin text-green" /> : <></>}
        </button>
        {error && <span className="text-red-500 text-xs ml-2">{error}</span>}
      </div>
    </motion.form>
  );
};

export default LoginForm;
