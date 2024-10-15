"use client";
import React from "react";
import Image from "next/image";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import { useAppContext } from "@/context";
import { Tab, Tool } from "@/types";

import { newTab } from "@/lib/constants";
import { IconEdit, IconEye } from "@tabler/icons-react";

const SidebarTools = ({ type, tools }: { type: string; tools: Tool[] }) => {
  const { setTabs, setActiveTabId , tabs} = useAppContext();
  const handlePreviewTool = (tab: Tab) => {
    const newTab = { ...tab, mode: "preview" };

    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(newTab.id);
    return;
  };
  const handleEditTool = (tab: Tab) => {
    const newTab = { ...tab, mode: "editor" };

    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(newTab.id);
    return;
  };
  
  return (
    <div className="flex flex-col gap-2">
      {tools.map((tool) => {
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
              <button
                onClick={() => handlePreviewTool(tabFromTool)}
                className="text-sm text-gray-600 cursor-pointer hover:text-black"
              >
                <IconEye title="View tool" className="w-4 h-4" />
              </button>
              <button
                className="text-sm text-gray-600 cursor-pointer hover:text-black"
                onClick={() => handleEditTool(tabFromTool)}
              >
                <IconEdit className="w-4 h-4" title="Edit tool" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarTools;
