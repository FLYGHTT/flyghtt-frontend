import React, { useState } from "react";
import { styles } from "../styles";

import { FaEye, FaEyeSlash } from "react-icons/fa";
const Password = ({
  value,
  id,
  onChange,
}: {
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className={styles.input}
        value={value}
        id={id}
        onChange={onChange}
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

export default Password;
