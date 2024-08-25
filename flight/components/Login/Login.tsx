import { styles } from "../styles";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";
const Login = ({
  setShowLogin,
}: {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const loginRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [loginRef, setShowLogin]);
  return (
    <motion.div
      ref={loginRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="bg-white text-sm shadow-2xl w-[450px] text-black top-4 right-10 rounded-2xl p-6 absolute "
    >
      <span
        className="absolute top-6  cursor-pointer text-2xl right-6"
        onClick={() => setShowLogin(false)}
      >
        <IoClose />
      </span>
      <h1 className="text-5xl text-center font-bold">Login</h1>
      <form action="" className="mt-10">
        <label htmlFor="email">Email</label>
        <input type="email" className={styles.input} />
        <label htmlFor="password" className="mt-3">
          Password
        </label>
        <input type="password" className={styles.input} />
        <span className="text-sm flex items-center mt-2">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2"
          />
          <label htmlFor="remember" className="text-xs">
            Remember me
          </label>
        </span>
        <span className="mt-24 text-xs">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-green">
            Sign Up
          </Link>
        </span>
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="bg-dark text-white py-2 mt-6 rounded-md w-[150px]"
          >
            Login
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
