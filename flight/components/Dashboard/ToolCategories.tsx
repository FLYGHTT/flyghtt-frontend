"use client";
import React from "react";
import Link from "next/link";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
const ToolCategories = () => {
  const baseUrl = "/dashboard/tools";
  const { data } = useGetToolsQuery();

  const publicTools = data?.filter((tool) => tool.public);
  const privateTools = data?.filter((tool) => !tool.public);

  const toolCategories = [
    {
      name: "Private tools",
      link: `${baseUrl}/private`,
      number: privateTools?.length || 0,
    },
    {
      name: "Public tools",
      link: `${baseUrl}/public`,
      number: publicTools?.length || 0,
    },
    {
      name: "Liked tools",
      link: `${baseUrl}/favourites`,
      number: 4,
    },
    {
      name: "Drafts",
      link: `${baseUrl}/draft`,
      number: 4,
    },
  ];
  return (
    <div className="w-[50%] flex flex-col gap-3">
      {toolCategories.map((category, index) => (
        <div
          key={index}
          className="flex items-center p-4 my-2  justify-between shadow-md"
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
