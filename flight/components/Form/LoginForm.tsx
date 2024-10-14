"use client";
import React, { useState } from "react";
import { styles } from "../styles";
import Link from "next/link";
import { motion } from "framer-motion";
import { authFormvariants } from "@/lib/variants";
import { toast } from "react-toastify";
import Password from "../ui/Password";
import { FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signInUser } from "@/lib/actions/user.actions";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password.toString().length < 8) {
      toast.error("Password must be more than 8 characters");
      return;
    }
    if (!email.toString().includes("@")) {
      toast.error("Invalid email");
      return;
    }
    setLoading(true);
    try {
      const response = await signInUser(email, password);
      console.log(response, "response");
      setLoading(false);
      toast.success("Sign in successful", {
        autoClose: 1000,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong. Try again later.");
    }
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
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
        name="email"
        className={styles.input}
        autoComplete="email"
      />
      <label htmlFor="password" className="mt-3">
        Password
      </label>
      <Password name="password" />

      <span className="mt-24 text-xs">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-green">
          Sign Up
        </Link>
      </span>
      <div className="w-full flex items-center justify-center flex-col gap-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-dark text-white py-2 mt-6 rounded-md w-[150px] disabled:cursor-not-allowed disabled:opacity-50 flex gap-3 items-center justify-center "
        >
          {loading ? "Please Wait..." : "Log in"}
          {loading ? <FaCog className="animate-spin text-green" /> : <></>}
        </button>
      </div>
    </motion.form>
  );
};

export default LoginForm;
