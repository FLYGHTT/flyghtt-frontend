"use client";
import React from "react";

import { useModal } from "@/components/Modal";
import toast from "react-hot-toast";

import PublishModel from "@/components/Modals/PublishModel";
import { Tab } from "@/types";
import useTool from "@/hooks/useTool";
import http from "@/lib/http";
import {
  IconBrandTelegram,
  IconDeviceFloppy,
  IconEye,
} from "@tabler/icons-react";
import { updateTool } from "@/lib/actions/tools.action";
const EditorModeSidebar = ({ tab }: { tab: Tab }) => {
  const token = localStorage.getItem("token");

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
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handleSaveTool = async () => {
    console.log(tab.tabTool);
    const submittedTool = {
      toolName: tab.tabTool.name,
      toolDescription: tab.tabTool.description,
      link: tab.tabTool.link,
      public: tab.tabTool.public,
      columns: tab.tabTool.columns,
      commentable: tab.tabTool.commentable,
    };
    try {
      await http.put(`${baseURL}/tools/${tab.tabTool.toolId}`, submittedTool, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tool saved successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save tool");
    }
  };
  const buttonStyle =
    "flex items-center gap-2 hover:bg-green/20 rounded-md w-full py-2 px-4";
  return (
    <div className="w-full">
      {tab.tabTool.isPublished ? (
        <button className={buttonStyle} onClick={handleSaveTool}>
          <IconDeviceFloppy className="w-5 h-5" />
          Save
        </button>
      ) : (
        <button className={buttonStyle} onClick={handlePublish}>
          <IconBrandTelegram className="w-5 h-5" />
          Publish
        </button>
      )}

      <button className={buttonStyle} onClick={handlePreview}>
        <IconEye className="w-5 h-5" />
        Preview
      </button>
      {!tab.tabTool.isPublished && (
        <button className={buttonStyle} onClick={handlePreview}>
          <IconDeviceFloppy className="w-5 h-5" />
          Save and use
        </button>
      )}
    </div>
  );
};

export default EditorModeSidebar;
