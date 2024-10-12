import React from "react";
import Image from "next/image";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import { FaEye } from "react-icons/fa";
import error from "@/assets/icons/error.png";
import { Tab, Tool } from "@/types";
import useTool from "@/hooks/useTool";
import { newTab } from "@/lib/constants";
const SidebarTools = ({
  type,
  data,
  isLoading,
  isError,
}: {
  type: string;
  data: Tool[] | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {
  const { handlePreviewTool, handleEditTool } = useTool();
  if (isLoading || !data) {
    return (
      <div className="flex h-full  items-center justify-center">
        <div className="animate-spin mt-8 rounded-full h-10 w-10 border-b-2 border-green"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex h-full items-center justify-center flex-col">
        <Image
          src={error}
          alt="error"
          width={100}
          height={100}
          className="mt-8"
        />
        <h2>An error occured</h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      {data.map((tool) => {
        const tabFromTool: Tab = {
          ...newTab,
          id: tool.toolId + Math.random() * 1000,
          name: tool.name,
          description: tool.description,
          mode: "preview",
          tabTool: {
            ...tool,
            isPublished: true,
          },
        };

        return (
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
                className="w-4 h-4"
              />

              <h1 className="font-medium text-sm  capitalize truncate max-w-full">
                {tool.name.toLowerCase()}
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              <FaEye
                className="text-gray-600 cursor-pointer text-xs group-hover:block hidden"
                title="View tool"
                onClick={() => handlePreviewTool(tabFromTool)}
              />
              <p
                className="text-xs text-gray-600 cursor-pointer"
                onClick={() => handleEditTool(tabFromTool)}
              >
                Use
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarTools;
