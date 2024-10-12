import { Tab } from "@/types";
import React from "react";
import { useAppContext } from "@/context";
const useTool = () => {
  const { setTabs, tabs, setActiveTabId, activeTabId } = useAppContext();
  const handlePreviewTool = (tab: Tab) => {
    const newTab = { ...tab, mode: "preview" };

    if (tab.tabTool.isPublished) {
      setTabs((prev) => [...prev, newTab]);
      setActiveTabId(newTab.id);
      return;
    }
    setTabs((prev) => {
      return prev.map((t) => {
        if (t.id === tab.id) {
          return newTab;
        }
        return t;
      });
    });
  };
  const handleEditTool = (tab: Tab) => {
    const newTab = { ...tab, mode: "editor" };
    if (tab.tabTool.isPublished) {
      setTabs((prev) => [...prev, newTab]);
      setActiveTabId(newTab.id);
      return;
    }
    setTabs((prev) => {
      return prev.map((t) => {
        if (t.id === tab.id) {
          return newTab;
        }
        return t;
      });
    });
  };
  console.log(tabs, "Tabsusetool");
  return {
    handlePreviewTool,
    handleEditTool,
  };
};

export default useTool;
