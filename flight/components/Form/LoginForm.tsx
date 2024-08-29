"use client";
import React from "react";
import { styles } from "../styles";
import Link from "next/link";
import { motion } from "framer-motion";
import { authFormvariants } from "@/lib/variants";
import useLoginAuth from "@/hooks/useLoginAuth";
import Password from "../ui/Password";

const LoginForm = () => {
  const { inputs, handleChange, handleSubmit, error, isPending, isError } =
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
          className="bg-dark text-white py-2 mt-6 rounded-md w-[150px]"
        >
          Login
        </button>
        {error && <span className="text-red-500 text-xs ml-2">{error}</span>}
        {isPending && (
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green mt-3"></div>
        )}
      </div>
    </motion.form>
  );
};

export default LoginForm;
