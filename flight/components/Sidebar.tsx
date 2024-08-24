import React from "react";
import eagle from "@/assets/images/logo.svg";
import Image from "next/image";
import { sidebartop, sidebarbottom } from "@/lib/data";
const Sidebar = () => {
  return (
    <aside className="w-[20%] p-2 h-screen">
      <Image src={eagle} alt="logo" width={60} height={60} />
      <div className="bg-white shadow-lg rounded-2xl py-4  h-[70%] flex flex-col justify-between">
        <div>
          {sidebartop.map((item, index) => (
            <div
              className="flex items-center p-4 hover:bg-gray-100  cursor-pointer"
              key={index}
            >
              <Image src={item.icon} alt={item.title} width={20} height={20} />
              <p className="ml-4">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="">
          {sidebarbottom.map((item, index) => (
            <div
              className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
              key={index}
            >
              <Image src={item.icon} alt={item.title} width={20} height={20} />
              <p className="ml-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
