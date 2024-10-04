"use client";
import React from "react";
import CTInterfaceTabHeader from "./CTInterfaceTabHeader";
import CTBody from "./CTBody";
import { useAppContext } from "@/context";
import { generateRandomString } from "@/lib/utils";
import { newTab } from "@/lib/constants";
import useCreateNewTab from "@/hooks/useTab";
const CTInterface = () => {
  const { tabs, activeTabId, setTabs, setActiveTabId } = useAppContext();
  const { handleAddTab } = useCreateNewTab();
  return (
    <div className=" py-3 w-full h-screen col-span-10 ">
      {tabs.length > 0 ? (
        <>
          <CTInterfaceTabHeader />
          {tabs.map((tab, index) => {
            if (activeTabId === tab.id) {
              return <CTBody key={tab.id} tab={tab} />;
            }
            return null;
          })}
        </>
      ) : (
        <div className="h-full w-full items-center flex flex-col justify-center">
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

export default CTInterface;
