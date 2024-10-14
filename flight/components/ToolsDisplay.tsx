"use client";
import React from "react";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
import Image from "next/image";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import Link from "next/link";
import { IconCirclePlus, IconEdit, IconEye } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import error from "@/assets/icons/error.png";
import useTab from "@/hooks/useTab";
const ToolsDisplay = ({
  token,
  isPublic,
  isPrivate,
}: {
  token: string;
  isPublic?: boolean;
  isPrivate?: boolean;
}) => {
  const { handleAddTab } = useTab();
  const { data: tools, isLoading, isError } = useGetToolsQuery(token);
  const publicTools = tools?.filter((tool) => tool.public);
  const privateTools = tools?.filter((tool) => !tool.public);
  let activeTools = tools;

  if (isPublic) {
    activeTools = publicTools;
  } else if (isPrivate) {
    activeTools = privateTools;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-md flex p-2 gap-3 items-center justify-between bg-blue-100 animate-pulse"
          >
            <div className="flex gap-3 items-center">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div>
                <Skeleton className="h-4 w-28 mb-2" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <div className="mr-2 gap-4 group-hover:flex hidden items-center">
              <Skeleton className="w-5 h-5" />
              <Skeleton className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Image src={error} alt="error" width={100} height={100} />
          <h1 className="text-lg font-semibold ">Error fetching tools</h1>
        </div>
      </div>
    );
  }
  if (!activeTools || activeTools.length === 0)
    return (
      <div className="h-full flex-col gap-4 flex items-center justify-center">
        <h1 className="text-xl font-bold">No tools</h1>
        <Link
          href="/dashboard/tool-workspace"
          onClick={handleAddTab}
          className=" w-[200px] p-6 hover:border-green border border-transparent rounded-xl bg-white flex flex-col items-center"
        >
          <IconCirclePlus className="w-8 h-8" />
          <span className="flex gap-2 font-bold text-sm mt-2 items-center">
            New Tool
          </span>
        </Link>
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-4">
      {activeTools.map((tool) => (
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
              <p className="text-sm text-gray-600 capitalize">Cafey Business</p>
            </div>
          </div>
          <div className="mr-2 gap-4 group-hover:flex hidden items-center">
            <Link
              href={`/dashboard/tool-workspace`}
              className="text-sm text-gray-600 cursor-pointer hover:text-black"
            >
              <IconEye className="w-5 h-5" />
            </Link>
            <Link
              href={`/dashboard/tool-workspace`}
              className="text-sm text-gray-600 cursor-pointer hover:text-black"
            >
              <IconEdit className="w-5 h-5" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsDisplay;
