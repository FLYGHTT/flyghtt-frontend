"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { IconCirclePlus } from "@tabler/icons-react";
import useTab from "@/hooks/useTab";
const CreateNewTool = () => {
  const { handleAddTab } = useTab();
  const router = useRouter();
  const addTab = () => {
    handleAddTab();
    router.push("/dashboard/tool-workspace");
  };
  return (
    <p className="flex gap-2 items-center font-medium" onClick={addTab}>
      New Tool
      <IconCirclePlus className="w-5 h-5" />
    </p>
  );
};

export default CreateNewTool;
