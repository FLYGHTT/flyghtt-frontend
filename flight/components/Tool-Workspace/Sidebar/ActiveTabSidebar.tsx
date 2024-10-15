import React from "react";
import { Tab } from "@/types";

import EditorModeSidebar from "./EditorModeSidebar";
import PreviewModeSidebar from "./PreviewModeSidebar";

const ActiveTabSidebar = ({ tab }: { tab: Tab }) => {
  return (
    <div className="w-[200px] bg-white h-fit p-4 rounded-xl shadow-md">
      <h2 className="font-semibold capitalize text-sm ">{tab.mode}</h2>
      <div className="mt-3 flex flex-col gap-3">
        {tab.mode == "editor" && <EditorModeSidebar tab={tab} />}
        {tab.mode === "preview" && <PreviewModeSidebar tab={tab} />}
      </div>
    </div>
  );
};

export default ActiveTabSidebar;
