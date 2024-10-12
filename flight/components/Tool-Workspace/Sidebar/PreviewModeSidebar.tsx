import React from "react";
import { FaRegEdit } from "react-icons/fa";
import useTool from "@/hooks/useTool";
import { Tab } from "@/types";
const PreviewModeSidebar = ({ tab }: { tab: Tab }) => {
  const { handleEditTool } = useTool();

  const buttonStyle =
    "flex items-center justify-center gap-1 flex-col hover:bg-green/20 rounded-md p-2";
  return (
    <div>
      <button className={buttonStyle} onClick={() => handleEditTool(tab)}>
        <FaRegEdit className="text-xl" />
        {tab.tabTool.isPublished ? "Editor Mode" : "Back to Editor"}
      </button>
    </div>
  );
};

export default PreviewModeSidebar;
