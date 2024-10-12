"use client";
import { Tool } from "@/types";
import React, { useState } from "react";

const ToolHeadingAndDesc = ({ tool }: { tool: Tool }) => {
  const [showDesc, setShowDesc] = useState(false);
  const formatDescription = (desc: string) => {
    return desc.length > 350 ? desc.substring(0, 347) + "..." : desc;
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>

      <p className="text-gray-600 text-base max-w-2xl mb-4">
        {showDesc ? tool.description : formatDescription(tool.description)}
        {tool.description.length > 350 && (
          <span
            className="text-blue-500 ml-2 cursor-pointer"
            onClick={() => setShowDesc(!showDesc)}
          >
            {showDesc ? "Read Less" : "Read More"}
          </span>
        )}
      </p>
    </>
  );
};

export default ToolHeadingAndDesc;
