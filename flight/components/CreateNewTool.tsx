"use client";
import React from "react";
import Link from "next/link";
import { IconCirclePlus } from "@tabler/icons-react";
import useTab from "@/hooks/useTab";
const CreateNewTool = () => {
  const { handleAddTab } = useTab();
  return (
    <Link
      href="/dashboard/tool-workspace"
      className="flex gap-2 items-center font-medium"
      onClick={handleAddTab}
    >
      New Tool
      <IconCirclePlus className="w-5 h-5" />
    </Link>
  );
};

export default CreateNewTool;
