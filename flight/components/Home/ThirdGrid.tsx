import React from "react";
import useNavigate from "@/hooks/useNavigate";
import { styles } from "../styles";
const ThirdGrid = () => {
  return (
    <div className="row-span-4 w-full grid grid-cols-12 gap-8">
      <div
        className={`${styles.mat} col-span-7 text-[230px] overflow-hidden  `}
      >
        <span className="-mr-8 text-clip">Plans</span>
      </div>
      <div className={`${styles.mat} col-span-5 text-[85px] overflow-hidden  `}>
        About Us
      </div>
    </div>
  );
};

export default ThirdGrid;
