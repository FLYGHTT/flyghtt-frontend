import React from "react";
import { styles } from "../styles";
import Link from "next/link";
import { motion } from "framer-motion";
import useAuth from "@/hooks/useSignUpAuth";
import Password from "../ui/Password";
import { authFormvariants } from "@/lib/variants";
import { FaCog } from "react-icons/fa";
const SignUpForm = () => {
  const { handleChange, handleSubmit, error, inputs, isPending, unknownError } =
    useAuth();

  return (
    <motion.form
      onSubmit={(e) => handleSubmit(e)}
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
          value={inputs.firstName}
          id="firstName"
          onChange={handleChange}
        />
        {error.firstName && (
          <span className="text-red-500 text-xs">{error.firstName}</span>
        )}
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className={styles.input}
          value={inputs.lastName}
          id="lastName"
          onChange={handleChange}
        />
        {error.lastName && (
          <span className="text-red-500 text-xs">{error.lastName}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={styles.input}
          value={inputs.email}
          id="email"
          onChange={handleChange}
        />
        {error.email && (
          <span className="text-red-500 text-xs">{error.email}</span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="mt-3">
          Password
        </label>
        <Password
          value={inputs.password}
          id="password"
          onChange={handleChange}
        />
        {error.password && (
          <span className="text-red-500 text-xs">{error.password}</span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="mt-3">
          Confirm Password
        </label>
        <Password
          value={inputs.confirmPassword}
          id="confirmPassword"
          onChange={handleChange}
        />

        {error.confirmPassword && (
          <span className="text-red-500 text-xs">{error.confirmPassword}</span>
        )}
      </div>
      <span className="text-sm flex items-center mt-2">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          className="mr-2"
          onChange={handleChange}
          checked={inputs.remember}
        />
        <label htmlFor="remember" className="text-xs">
          I have read the Terms and Conditions and agree to everything stated
        </label>
      </span>
      <span className="text-sm flex items-center mt-2">
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          className="mr-2"
          onChange={handleChange}
          checked={inputs.newsletter}
        />
        <label htmlFor="remember" className="text-xs">
          Flyghtt is allowed to send its daily newsletters to my email
        </label>
      </span>

      <div className="w-full flex flex-col items-center justify-center">
        <button
          type="submit"
          disabled={isPending}
          className="bg-dark text-white py-2 mt-6 rounded-md w-[150px] disabled:cursor-not-allowed disabled:opacity-50 flex gap-3 items-center justify-center "
        >
          {isPending ? "Please Wait" : "Sign up"}
          {isPending ? <FaCog className="animate-spin text-green" /> : <></>}
        </button>
        <span className="mt-4 text-xs flex justify-center gap-2">
          Already have an account?{" "}
          <Link href="/login" className="text-green">
            Login
          </Link>
        </span>

        {unknownError && (
          <span className="text-red-500 text-xs  mt-4">{unknownError}</span>
        )}
      </div>
    </motion.form>
  );
};

export default SignUpForm;
