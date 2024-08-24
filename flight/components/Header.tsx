import React from "react";
import message from "@/assets/icons/message.svg";
import ellipse from "@/assets/icons/ellipse.svg";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-6">
      <div className="flex gap-6">
        <h3 className="font-semibold">Me</h3>
        <h3 className="font-semibold">Explore</h3>
      </div>
      <div className="flex gap-14 items-center justify-end">
        <Image src={message} alt="message" width={20} height={20} />
        <div className="flex items-center gap-2">
          <Image src={ellipse} alt="ellipse" width={60} height={60} />
          <h1>John Doe</h1>
          <FaAngleDown />
        </div>
        <button className="bg-darkPurple p-3 rounded-md text-white">
          Go Premium
        </button>
      </div>
    </div>
  );
};

export default Header;
