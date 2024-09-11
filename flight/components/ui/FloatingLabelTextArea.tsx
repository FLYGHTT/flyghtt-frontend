import React from "react";
import { styles } from "../styles";

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  showLabel?: boolean;
}

const FloatingLabelTextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ className, type, label, showLabel, ...props }, ref) => {
  return (
    <div className="relative">
      <textarea
        placeholder={label}
        className={`${styles.input} placeholder:text-transparent h-full ${className} `}
        {...props}
        draggable={true}
      />
      <label
        htmlFor={label}
        className={`text-gray-500  peer-focus:block peer-focus:absolute peer-focus:transition-all peer-placeholder-shown:block text-sm  ease-in peer-focus:font-semibold font-semibold peer-focus:-top-3.5 peer-focus:left-0 ${
          showLabel ? "absolute -top-3.5 left-0 transition-all" : "hidden"
        } peer-placeholder-shown:font-normal  peer-placeholder-shown:top-5 peer-placeholder-shown:left-3 peer-placeholder-shown:transition-all peer-placeholder-shown:absolute peer-placeholder-shown:text-neutral-400 `}
      >
        {label}
      </label>
    </div>
  );
});
FloatingLabelTextArea.displayName = "TextArea";

export default FloatingLabelTextArea;
