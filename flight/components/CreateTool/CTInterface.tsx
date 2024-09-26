"use client";
import React from "react";
import CTInterfaceTabHeader from "./CTInterfaceTabHeader";
import CTBody from "./CTBody";
import { useAppContext } from "@/context";
const CTInterface = () => {
  const { tabs, activeTabId } = useAppContext();
  return (
    <div className=" py-3 w-full h-screen col-span-10 ">
      <CTInterfaceTabHeader />
      {tabs.map((tab, index) => {
        if (activeTabId === tab.id) {
          return <CTBody key={tab.id} tab={tab} />;
        }
        return null;
      })}
    </div>
  );
};

export default CTInterface;
