import React from "react";
import { styles } from "../styles";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showLabel?: boolean;
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, showLabel, ...props }, ref) => {
    const { id } = props;
    return (
      <div className="relative">
        <input
          id={id}
          className={`${styles.input} placeholder:text-transparent ${className}`}
          {...props}
          placeholder={label}
        />

        <label
          htmlFor={label}
          id={id}
          className={`text-gray-500  peer-focus:block peer-focus:absolute peer-focus:transition-all peer-placeholder-shown:block text-sm  ease-in peer-focus:font-semibold font-semibold peer-focus:-top-3.5 peer-focus:left-0 ${
            showLabel ? "absolute -top-3.5 left-0 transition-all" : "hidden"
          } peer-placeholder-shown:font-normal  peer-placeholder-shown:top-5 peer-placeholder-shown:left-3 peer-placeholder-shown:transition-all peer-placeholder-shown:absolute peer-placeholder-shown:text-neutral-400 `}
        >
          {label}
        </label>
      </div>
    );
  }
);
FloatingLabelInput.displayName = "Input";

export default FloatingLabelInput;
