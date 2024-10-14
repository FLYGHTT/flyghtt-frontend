"use client";
import React from "react";
import useTab from "@/hooks/useTab";

import { useRouter } from "next/navigation";
import { IconCirclePlus } from "@tabler/icons-react";

const NewTool = () => {
  const { handleAddTab } = useTab();
  const router = useRouter();
  const addTab = () => {
    handleAddTab();
    router.push("/dashboard/tool-workspace");
  };
  return (
    <p className=" w-[200px] p-6 hover:border-green border border-transparent rounded-xl bg-white flex flex-col items-center">
      <IconCirclePlus className="w-8 h-8" />
      <span className="flex gap-2 font-bold text-sm mt-2 items-center">
        New Tool
      </span>
    </p>
  );
};

export default NewTool;
