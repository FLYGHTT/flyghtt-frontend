"use client";
import React, { useState } from "react";
import { styles } from "../styles";
import Link from "next/link";
import { motion } from "framer-motion";

import Password from "../ui/Password";
import { authFormvariants } from "@/lib/variants";
import { FaCog } from "react-icons/fa";
import PasswordInput from "../ui/Password";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

import { signUpUser } from "@/lib/actions/user.actions";

const SignUpForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const validateInputs = (inputs: any) => {
    const { firstName, lastName, email, password, confirmPassword } = inputs;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.toString().length < 8) {
      toast.error("Password must be more than 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!email.toString().includes("@")) {
      toast.error("Invalid email");
      return;
    }
  };
  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const inputs = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      isAcceptTerms: formData.get("isAcceptTerms"),
      role: "USER",
    };
    validateInputs(inputs);
    setIsLoading(true);
    try {
      const user = await signUpUser(inputs);
      setIsLoading(false);
      toast.success("Sign in successful", {
        autoClose: 1000,
      });
      console.log(user);
      localStorage.setItem("token", user.token);
      if (user.emailVerified) {
        console.log("verified");
        router.push("/dashboard");
      } else {
        console.log("not-verified");
        router.push("/verify-email");
      }
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="initial"
      animate="visible"
      variants={authFormvariants}
      transition={{
        delay: 0.5,
      }}
      className="mt-4 bg-white p-8 w-[500px] rounded-xl"
    >
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className={styles.input}
          name="firstName"
          id="firstName"
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className={styles.input}
          id="lastName"
          name="lastName"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" className={styles.input} name="email" />
      </div>
      <div>
        <label htmlFor="password" className="mt-3">
          Password
        </label>
        <PasswordInput name="password" />
      </div>
      <div>
        <label htmlFor="password" className="mt-3">
          Confirm Password
        </label>
        <Password name="confirmPassword" />
      </div>
      {/* <span className="text-sm flex items-center mt-2">
        <input type="checkbox" name="isAcceptTerms" className="mr-2" />
        <label htmlFor="isAcceptTerms" className="text-xs">
          I have read the{" "}
          <Link href="#" className="text-green">
            Terms and Conditions
          </Link>{" "}
          and agree to everything stated
        </label>
      </span> */}
      {/* <span className="text-sm flex items-center mt-2">
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          className="mr-2"
         
        />
        <label htmlFor="remember" className="text-xs">
          Flyghtt is allowed to send its daily newsletters to my email
        </label>
      </span> */}

      <div className="w-full flex flex-col items-center justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-dark text-white py-2 mt-6 rounded-md w-[150px] disabled:cursor-not-allowed disabled:opacity-50 flex gap-3 items-center justify-center "
        >
          {isLoading ? "Please Wait..." : "Sign up"}
          {isLoading ? <FaCog className="animate-spin text-green" /> : <></>}
        </button>
        <span className="mt-4 text-xs flex justify-center gap-2">
          Already have an account?{" "}
          <Link href="/login" className="text-green">
            Login
          </Link>
        </span>
      </div>
    </motion.form>
  );
};

export default SignUpForm;
