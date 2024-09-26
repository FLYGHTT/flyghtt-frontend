import React from "react";
import { Tab } from "@/types";
const CTBodyHeader = ({ tab }: { tab: Tab }) => {
  const isEditMode = tab.mode === "edit";
  return (
    <div className="w-full justify-end flex">
      <div className="flex p-2 border bg-gray-100 px-4 text-sm border-gray-400 rounded-md items-center gap-3">
        <h2 className="font-semibold pr-4">
          {isEditMode ? "Editor Mode" : "Preview Mode"}
        </h2>
        {isEditMode ? (
          <>
            <button className="p-2 px-4 border-2 relative border-gray-300 rounded-lg">
              Preview
            </button>
            <button
              className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center"
              // onClick={openPublishModal}
            >
              Publish
            </button>
          </>
        ) : (
          <button className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center">
            Editor
          </button>
        )}
      </div>
    </div>
  );
};

export default CTBodyHeader;
