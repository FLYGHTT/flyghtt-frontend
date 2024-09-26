"use client";
import { useAppContext } from "@/context";
import React from "react";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { newTab } from "@/lib/constants";
import { generateRandomString } from "@/lib/utils";
const CTInterfaceTabHeader = () => {
  const { tabs, setTabs, activeTabId, setActiveTabId } = useAppContext();
  const handleAddNewTab = () => {
    const newTabId = generateRandomString(20);
    setTabs((prevTabs) => [
      ...prevTabs,
      {
        ...newTab,
        id: newTabId,
        tabTool: { ...newTab.tabTool, toolId: generateRandomString(20) },
      },
    ]);
    setActiveTabId(newTabId);
  };
  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };
  return (
    <div className="w-full h-fit relative z-[3] flex gap-2 ">
      <div className="pl-2 h-fit flex gap-1 items-end">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              onClick={() => handleTabClick(tab.id)}
              className={`flex w-[150px]  items-center ${
                isActive
                  ? "bg-white border-green h-[45px] border-b"
                  : "bg-gray-200/50 border-gray-300 border-b-green group h-[40px] hover:h-[45px] hover:bg-white "
              }  justify-between border-2 cursor-pointer  z-[10] relative p-2  transition-all ease-in duration-100 rounded-t-md `}
              key={tab.id}
            >
              <div className="flex gap-2.5 items-center">
                <Image src={file} alt="file icon" className="w-4 h-4" />
                <h1 className={`${isActive ? "font-medium " : "font-normal"}`}>
                  {tab.name}
                </h1>
              </div>
              <button className="ml-2 cursor-default hover:bg-gray-200 rounded-full p-0.5 text-sm flex items-center justify-center">
                <IoMdClose className="text-green/80  " />
              </button>
              {/* <div
                className={`absolute -top-2 left-[50%] ${
                  isActive
                    ? "bg-green  "
                    : " bg-green/50 group-hover:bg-green/80"
                }   rounded-md h-4 text-white w-6 text-xs translate-x-[-50%] transition-all ease-in duration-100 items-center flex justify-center `}
              >
                E
              </div> */}
            </div>
          );
        })}
      </div>
      <button onClick={handleAddNewTab}>
        <FaPlus className="text-green text-2xl  hover:bg-gray-200 rounded-full p-1" />
      </button>
      <hr className="w-full border-t-2 z-[2] border-t-green absolute bottom-0" />
    </div>
  );
};

export default CTInterfaceTabHeader;
