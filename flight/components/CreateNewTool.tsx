"use client";
import React from "react";
import CreateNew from "@/components/CreateNew";
import pluscircle from "@/assets/icons/plus-circle.svg";
import Image from "next/image";
import { useAppContext } from "@/context";
import useCreateNewTab from "@/hooks/useTab";
import Link from "next/link";
const CreateNewTool = () => {
  const { setTabs, setActiveTabId, tabs } = useAppContext();
  const { handleAddTab } = useCreateNewTab();

  return (
    <Link
      href="/dashboard/create-tool"
      className="flex gap-2 text-sm my-3"
      onClick={handleAddTab}
    >
      <Image src={pluscircle} alt="pluscircle" width={20} height={20} />
      New Tool
    </Link>
  );
};

export default CreateNewTool;
