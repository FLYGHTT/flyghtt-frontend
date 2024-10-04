import React from "react";
import { useAppContext } from "@/context";
import { generateRandomString } from "@/lib/utils";
import { newTab } from "@/lib/constants";
const useTab = () => {
  const { tabs, activeTabId, setTabs, setActiveTabId } = useAppContext();
  const handleAddTab = () => {
    const newTabId = generateRandomString(20);
    const newTabs = [
      ...tabs,
      {
        ...newTab,
        id: newTabId,
        tabTool: { ...newTab.tabTool, toolId: generateRandomString(20) },
      },
    ];
    setTabs(newTabs);
    setActiveTabId(newTabId);
    localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
    localStorage.setItem("tab-id", newTabId);
  };
  const activeTab = tabs.find((tab) => tab.id === activeTabId);
  const handleTabClose = (tabId: string) => {
    console.log("hey");
    const findTabIndex = tabs.findIndex((tab) => tab.id === tabId);
    const tabIsActive = activeTabId === tabId;
    const nextTab = tabs[findTabIndex - 1];
    let nextTabId = nextTab ? nextTab.id : "";
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    console.log(newTab, "newTab");
    setTabs(newTabs);
    localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
    if (tabIsActive) {
      setActiveTabId(nextTabId);
      localStorage.setItem("tab-id", nextTabId);
    }
  };
  console.log(tabs);
  return { handleAddTab, handleTabClose, activeTab };
};

export default useTab;
