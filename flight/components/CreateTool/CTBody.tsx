"use client";
import React from "react";
import ModelHeader from "./ModelHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import Columns from "@/components/Column/Columns";
import { useAppContext } from "@/context";
import {
  convertToolColumnsToArray,
  convertToolColumnsToString,
} from "@/lib/convertToolColumns";
import { defaultColumns } from "@/lib/constants";
import CTBodyHeader from "./CTBodyHeader";
import { Tab } from "@/types";
const CTBody = ({ tab }: { tab: Tab }) => {
  const { setTabs, activeTabId } = useAppContext();

  const handleAddColumn = () => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              tabTool: {
                ...tab.tabTool,
                columns: `${tab.tabTool.columns}\n${convertToolColumnsToString(
                  defaultColumns
                )}`,
              },
            }
          : tab
      )
    );
  };

  const activeTool = tab.tabTool;
  const activeToolColumns = convertToolColumnsToArray(activeTool.columns);
  return (
    <div className="w-full relative overflow-y-auto max-h-[90%] p-3 px-5 ">
      <CTBodyHeader tab={tab} />
      <ModelHeader activeTool={activeTool} />
      <div className="mt-4">
        <p
          className="text-sm text-gray-700 flex gap-2 items-center cursor-pointer w-fit"
          onClick={handleAddColumn}
        >
          Add new model column
          <IoMdAddCircleOutline />
        </p>
        {activeToolColumns.length > 0 && (
          <Columns columns={activeToolColumns} />
        )}
      </div>
    </div>
  );
};

export default CTBody;
