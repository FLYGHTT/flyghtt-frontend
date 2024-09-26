"use client";
import React, { useState, useEffect, use } from "react";
import ModelHeader from "./ModelHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import Columns from "@/components/Column/Columns";
import { useAppContext } from "@/context";
import { convertToolColumnsToString } from "@/lib/convertToolColumns";
import { defaultColumns } from "@/lib/constants";
import CTBodyHeader from "./CTBodyHeader";
import { Tab } from "@/types";
const CTBody = ({ tab }: { tab: Tab }) => {
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
  // const openDiscardModal = () => {
  //   if (tool.name === "" || tool.description === "") {
  //     router.push("/dashboard");
  //     return;
  //   }
  //   openModal(<DiscardChanges />);
  // };
  return (
    <div className="w-full relative overflow-y-auto max-h-[90%] p-3 px-5 ">
      <CTBodyHeader tab={tab} />
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

export default CTBody;
