import React from "react";

import { Tab } from "@/types";

import ActiveTabSidebar from "./Sidebar/ActiveTabSidebar";
import PreviewTool from "./PreviewMode/PreviewTool";
import EditToolMode from "./EditorMode/EditToolMode";
const ActiveTab = ({ tab }: { tab: Tab }) => {
  const activeTool = tab.tabTool;

  return (
    <div className="w-full flex justify-between gap-4 h-full p-6 ">
      <div className="w-[calc(100%-150px)] h-full">
        {tab.mode === "editor" && <EditToolMode tool={activeTool} />}
        {tab.mode === "preview" && <PreviewTool tool={activeTool} />}
      </div>
      <ActiveTabSidebar tab={tab} />
    </div>
  );
};

export default ActiveTab;
