"use client";
import React from "react";
import eagle from "@/assets/images/logo.svg";
import Image from "next/image";
import { useAppContext } from "@/context";
import { sidebartop, sidebarbottom } from "@/lib/data";
const Sidebar = () => {
  const { setActivePage, activePage } = useAppContext();
  const handleActivePage = (title: string) => {
    const page = title.toLowerCase();
    setActivePage(page);
  };
  return (
    <aside className="w-[20%] p-2 h-screen ">
      <div className="flex justify-center h-[15%]">
        <Image src={eagle} alt="logo" width={60} height={60} />
      </div>
      <div className="bg-gray-50 shadow-lg rounded-2xl mt-4 py-6  h-[70%] flex flex-col justify-between">
        <div>
          {sidebartop.map((item, index) => (
            <div
              className={`flex items-center p-4 px-6  cursor-pointer ${
                activePage === item.title.toLowerCase()
                  ? "bg-green/30"
                  : "hover:bg-green/20 "
              }`}
              key={index}
              onClick={() => handleActivePage(item.title)}
            >
              <Image src={item.icon} alt={item.title} width={20} height={20} />
              <p className="ml-4">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="">
          {sidebarbottom.map((item, index) => (
            <div
              className={`flex items-center p-4 px-6 hover:bg-gray-100 cursor-pointer ${
                activePage === item.title.toLowerCase()
                  ? "bg-green/30"
                  : "hover:bg-green/20 "
              }`}
              key={index}
              onClick={() => handleActivePage(item.title)}
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
