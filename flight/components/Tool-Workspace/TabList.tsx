"use client";
import React from "react";
import TabListHeader from "./TabListHeader";
import { useAppContext } from "@/context";

import ActiveTab from "./ActiveTab";
import useTab from "@/hooks/useTab";
const TabList = () => {
  const { tabs, activeTabId } = useAppContext();
  const { handleAddTab } = useTab();
  return (
    <div className="h-screen overflow-hidden">
      {tabs.length > 0 ? (
        <div className="h-full">
          <TabListHeader />
          {tabs.map((tab, index) => {
            if (activeTabId === tab.id) {
              return <ActiveTab key={tab.id} tab={tab} />;
            }
            return null;
          })}
        </div>
      ) : (
        <div className="h-screen w-full items-center flex flex-col justify-center">
          <h1 className="text-3xl font-bold">No tabs to show</h1>
          <button
            className="bg-green px-6 py-1.5 rounded-md mt-8"
            onClick={handleAddTab}
          >
            Add New Tab
          </button>
        </div>
      )}
    </div>
  );
};

export default TabList;
