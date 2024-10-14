"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import Link from "next/link";
import { IconEdit, IconEye } from "@tabler/icons-react";
import useTool from "@/hooks/useTool";
import { Tool } from "@/types";
import NewTool from "./NewTool";
import { Tab } from "@/types";
import { newTab } from "@/lib/constants";
const ToolsDisplay = ({
  isPublic,
  isPrivate,
  tools,
}: {
  isPublic?: boolean;
  isPrivate?: boolean;
  tools: Tool[];
}) => {
  const router = useRouter();
  const { handlePreviewTool, handleEditTool } = useTool();

  const publicTools = tools?.filter((tool) => tool.public);
  const privateTools = tools?.filter((tool) => !tool.public);
  let activeTools = tools;

  if (isPublic) {
    activeTools = publicTools;
  } else if (isPrivate) {
    activeTools = privateTools;
  }

  if (!activeTools || activeTools.length === 0)
    return (
      <div className="h-full flex-col gap-4 flex items-center justify-center">
        <h1 className="text-xl font-bold">No tools</h1>
        <NewTool />
      </div>
    );
  const previewTool = (tab: Tab) => {
    handlePreviewTool(tab);
    router.push("/dashboard/tool-workspace");
  };
  const editTool = (tab: Tab) => {
    handleEditTool(tab);
    router.push("/dashboard/tool-workspace");
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {activeTools.map((tool) => {
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
            className={`rounded-md flex p-2 group hover:shadow-md gap-3 items-center justify-between shadow-sm cursor-pointer border-2 ${
              isPublic
                ? "border-teal-200 bg-green/10 hover:border-teal-400"
                : "bg-blue-100 border-[#4169E1]/40 hover:border-[#4169E1]"
            }`}
          >
            <div className="flex gap-3 items-center">
              <Image
                src={isPublic ? file : privatefile}
                alt="file icon"
                className="w-10 h-10"
              />
              <div>
                <h1 className="font-bold uppercase">{tool.name}</h1>
                <p className="text-sm text-gray-600 capitalize">
                  Cafey Business
                </p>
              </div>
            </div>
            <div className="mr-2 gap-4 group-hover:flex hidden items-center">
              <p
                onClick={() => previewTool(tabFromTool)}
                className="text-sm text-gray-600 cursor-pointer hover:text-black"
              >
                <IconEye className="w-5 h-5" />
              </p>
              <Link
                href={`/dashboard/tool-workspace`}
                onClick={() => editTool(tabFromTool)}
                className="text-sm text-gray-600 cursor-pointer hover:text-black"
              >
                <IconEdit className="w-5 h-5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToolsDisplay;
