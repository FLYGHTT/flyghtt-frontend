import React from "react";
import Image from "next/image";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import { FaEye } from "react-icons/fa";
import { Tool } from "@/types";
const SidebarTools = ({ type, data }: { type: string; data: Tool[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {data.map((tool) => (
        <div
          key={tool.toolId}
          className={`rounded-md w-full flex p-2 group hover:shadow-md  gap-3 items-center justify-between shadow-sm  cursor-pointer border-2 
   border-teal-200 bg-green/10 hover:border-teal-400
     `}
        >
          <div className="flex gap-2 items-center ">
            <Image
              src={type === "Private" ? privatefile : file}
              alt="file icon"
              className="w-5 h-5"
            />

            <h1 className="font-bold text-sm  capitalize truncate max-w-full">{tool.name}</h1>
          </div>
          <div className="flex gap-4 items-center">
            <FaEye
              className="text-gray-600 cursor-pointer text-xs group-hover:block hidden"
              title="View tool"
            />
            <p className="text-xs text-gray-600">Use</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarTools;
