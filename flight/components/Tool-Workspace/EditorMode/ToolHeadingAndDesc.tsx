"use client";
import React from "react";

import { Input } from "@/components/ui/GlowInput";
import { TextArea } from "@/components/ui/GlowTextArea";
import { useAppContext } from "@/context";
import { Tool } from "@/types";
const ToolHeadingAndDesc = ({ tool }: { tool: Tool }) => {
  const { modelHeaderRef, setTabs, activeTabId } = useAppContext();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const isHeadingEmpty = e.target.name === "name" && e.target.value === "";
    setTabs((prevTabs) => {
      const newTabs = prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              name: isHeadingEmpty
                ? "New Tab"
                : e.target.name === "name"
                ? e.target.value
                : tab.name,
              tabTool: { ...tab.tabTool, [e.target.name]: e.target.value },
              description:
                e.target.name === "description"
                  ? e.target.value
                  : tab.description,
            }
          : tab
      );
      localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
      return newTabs;
    });
  };

  return (
    <div
      className="gap-6 mt-4  h-fit  bg-green/10 w-full rounded-xl p-8"
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
            id="link"
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

export default ToolHeadingAndDesc;
