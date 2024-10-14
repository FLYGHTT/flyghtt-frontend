"use client";
import React from "react";
import Link from "next/link";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
const ToolCategories = ({ token }: { token: string }) => {
  const baseUrl = "/dashboard/tools";
  const { data: tools } = useGetToolsQuery(token);

  const publicTools = tools?.filter((tool) => tool.public);
  const privateTools = tools?.filter((tool) => !tool.public);

  const toolCategories = [
    {
      name: "Public tools",
      link: `${baseUrl}/public`,
      number: publicTools?.length || 0,
    },
    {
      name: "Private tools",
      link: `${baseUrl}/private`,
      number: privateTools?.length || 0,
    },
    // {
    //   name: "Liked tools",
    //   link: `${baseUrl}/favourites`,
    //   number: 4,
    // },
    // {
    //   name: "Drafts",
    //   link: `${baseUrl}/draft`,
    //   number: 4,
    // },
  ];
  return (
    <div className=" flex flex-col gap-4 mt-8">
      {toolCategories.map((category, index) => (
        <div
          key={index}
          className="flex  rounded-lg bg-white items-center p-4 w-[50%]  justify-between shadow-md"
        >
          <h3>
            {category.name} ({category.number})
          </h3>
          <Link
            href={category.link}
            className="text-green text-sm cursor-pointer"
          >
            See all
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ToolCategories;
