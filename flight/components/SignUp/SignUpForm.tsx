import React from "react";
import { styles } from "../styles";
import Link from "next/link";
import { motion } from "framer-motion";
const SignUpForm = () => {
  return (
    <motion.form
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
      action=""
      className="mt-4 bg-white p-8 w-[500px] rounded-xl"
    >
      <label htmlFor="first-name">First Name</label>
      <input type="first-name" className={styles.input} />
      <label htmlFor="last-name">Last Name</label>
      <input type="last-name" className={styles.input} />
      <label htmlFor="email">Email</label>
      <input type="email" className={styles.input} />
      <label htmlFor="password" className="mt-3">
        Password
      </label>
      <input type="password" className={styles.input} />
      <label htmlFor="password" className="mt-3">
        Confirm Password
      </label>
      <input type="confirm" className={styles.input} />
      <span className="text-sm flex items-center mt-2">
        <input type="checkbox" name="remember" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-xs">
          I have read the Terms and Conditions and agree to everything stated
        </label>
      </span>
      <span className="text-sm flex items-center mt-2">
        <input type="checkbox" name="remember" id="remember" className="mr-2" />
        <label htmlFor="remember" className="text-xs">
          Flyghtt is allowed to send its daily newsletters to my email
        </label>
      </span>

      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          className="bg-dark text-white py-2 mt-6 rounded-md w-[150px]"
        >
          Signup
        </button>
      </div>
      <span className="mt-4 text-xs flex justify-center gap-2">
        Already have an account?{" "}
        <Link href="/" className="text-green">
          Login
        </Link>
      </span>
    </motion.form>
  );
};

export default SignUpForm;
