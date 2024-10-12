import React from "react";
import { FiSave } from "react-icons/fi";

import { useModal } from "@/components/Modal";

import { FaEye } from "react-icons/fa";

import { PiTelegramLogo } from "react-icons/pi";
import toast from "react-hot-toast";
import { useAppContext } from "@/context";
import PublishModel from "@/components/Modals/PublishModel";
import { Tab } from "@/types";
import useTool from "@/hooks/useTool";
const EditorModeSidebar = ({ tab }: { tab: Tab }) => {
  const { openModal } = useModal();
  const { handlePreviewTool } = useTool();
  const handlePublish = () => {
    if (tab.description === "") {
      toast.error("Cannot publish model without a description");
      return;
    } else if (tab.name === "") {
      toast.error("Cannot publish model without a name");
    }
    openModal(<PublishModel tab={tab} />);
  };
  const handlePreview = () => {
    if (tab.name === "") {
      toast.error("Cannot preview model without a name");
      return;
    } else if (tab.description === "") {
      toast.error("Cannot preview model without a description");
      return;
    }
    handlePreviewTool(tab);
  };
  const buttonStyle =
    "flex items-center justify-center gap-1 flex-col hover:bg-green/20 rounded-md p-2";
  return (
    <div className="w-full flex flex-col items-center">
      {tab.tabTool.isPublished ? (
        <button className={buttonStyle}>
          <FiSave className="text-xl" />
          Save
        </button>
      ) : (
        <button className={buttonStyle} onClick={handlePublish}>
          <PiTelegramLogo className="text-xl" />
          Publish
        </button>
      )}
      <button className={buttonStyle} onClick={handlePreview}>
        <FaEye className="text-xl" />
        Preview
      </button>
    </div>
  );
};

export default EditorModeSidebar;
