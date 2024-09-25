"use client";
import React, { useState, useEffect, use } from "react";
import ModelHeader from "./ModelHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import Columns from "@/components/Column/Columns";
import { useAppContext } from "@/context";
import { convertToolColumnsToString } from "@/lib/convertToolColumns";
import { defaultColumns } from "@/lib/constants";
const CTInterface = () => {
  const { tool, setTool, toolColumns, setToolColumns } = useAppContext();
  console.log(tool);

  const handleAddColumn = () => {
    setTool((prevTool) => ({
      ...prevTool,
      columns: `${prevTool.columns}\n${convertToolColumnsToString(
        defaultColumns
      )}`,
    }));
    setToolColumns((prevState) => [...prevState, ...defaultColumns]);
  };

  return (
    <div className="w-full relative overflow-y-auto max-h-[90%] col-span-10 px-10 p-6 ">
      <ModelHeader />
      <div className="mt-4">
        <p
          className="text-sm text-gray-700 flex gap-2 items-center cursor-pointer w-fit"
          onClick={handleAddColumn}
        >
          Add new model column
          <IoMdAddCircleOutline />
        </p>
        {toolColumns.length > 0 && (
          <Columns columns={toolColumns} setColumns={setToolColumns} />
        )}
      </div>
    </div>
  );
};

export default CTInterface;
