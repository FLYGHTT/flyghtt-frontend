"use client";
import React, { useState } from "react";
import { styles } from "../styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const PasswordInput = ({ ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className={styles.input}
        {...props}
      />
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
