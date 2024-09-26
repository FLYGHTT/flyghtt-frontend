"use client";
import React from "react";

import { Input } from "@/components/ui/GlowInput";
import { TextArea } from "@/components/ui/GlowTextArea";
import { useAppContext } from "@/context";
const ModelHeader = () => {
  const { tool, setTool, modelHeaderRef } = useAppContext();
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTool((prevTool) => ({
      ...prevTool,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="gap-6 mt-4  h-fit  bg-green/10 w-[60vw] rounded-xl p-8"
      ref={modelHeaderRef}
    >
      <div className="w-full flex  ">
        <label
          htmlFor="name"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          Model Name
        </label>
        <div className="w-[80%]">
          <Input
            id="name"
            placeholder="e.g. Customer churn prediction"
            value={tool.name}
            name="name"
            onChange={handleChange}
            className="text-xl font-bold placeholder:text-sm placeholder:font-normal"
          />
        </div>
      </div>

      <div className="mt-4 w-full flex ">
        <label
          htmlFor="description"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          Description
        </label>
        <div className="w-[80%]">
          <TextArea
            id="description"
            value={tool.description}
            name="description"
            placeholder="Enter description"
            onChange={handleChange}
            className=" "
          />
        </div>
      </div>
      <div className="w-full flex mt-4 ">
        <label
          htmlFor="link"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          External reference
        </label>
        <div className="w-[80%]">
          <Input
            id="linke"
            value={tool.link}
            name="link"
            placeholder="Paste link here"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelHeader;
