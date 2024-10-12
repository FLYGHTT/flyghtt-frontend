"use client";
import React from "react";
import ToolHeadingAndDesc from "./ToolHeadingAndDesc";
import { Tool } from "@/types";

import { IoMdAddCircleOutline } from "react-icons/io";

import { convertToolColumnsToArray } from "@/lib/convertToolColumns";
import useColumn from "@/hooks/useColumn";
import ColumnList from "./ColumnList";
const EditToolMode = ({ tool }: { tool: Tool }) => {
  const activeToolColumns = tool.columns
    ? convertToolColumnsToArray(tool.columns)
    : [];
  const { handleAddColumn } = useColumn(activeToolColumns);
  return (
    <div className="w-full h-full">
      <ToolHeadingAndDesc tool={tool} />
      <div className="mt-4">
        <p
          className="text-sm text-gray-700 font-medium flex gap-2 items-center cursor-pointer w-fit"
          onClick={handleAddColumn}
        >
          Add new model column
          <IoMdAddCircleOutline />
        </p>
        {activeToolColumns.length > 0 && (
          <ColumnList columns={activeToolColumns} />
        )}
      </div>
    </div>
  );
};

export default EditToolMode;
