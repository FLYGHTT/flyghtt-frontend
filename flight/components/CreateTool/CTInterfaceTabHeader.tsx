"use client";
import { useAppContext } from "@/context";
import React from "react";
import file from "@/assets/icons/file.svg";
import privatefile from "@/assets/icons/privatefile.svg";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import useTab from "@/hooks/useTab";
import { useModal } from "../Modal";
import DiscardChanges from "../Modals/DiscardChanges";
const CTInterfaceTabHeader = () => {
  const { tabs, setTabs, activeTabId, setActiveTabId } = useAppContext();
  const { openModal, closeModal } = useModal();

  const { handleTabClose, handleAddTab, activeTab } = useTab();
  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    localStorage.setItem("tab-id", tabId);
  };
  const handleDiscard = (tabId: string) => {
    handleTabClose(tabId);
    closeModal();
  };
  const handleCloseTab = (tabId: string) => {
    if (activeTab?.tabTool?.name || activeTab?.tabTool?.description) {
      openModal(
        <DiscardChanges
          tabId={tabId}
          discardFunction={handleDiscard(tabId)}
          message="Discard changes, are you sure?"
        />
      );
      return;
    }
    handleTabClose(tabId);
  };
  console.log(activeTab);
  return (
    <div className="w-full h-fit relative z-[3] flex gap-2 ">
      <div className="pl-2 h-fit flex gap-2 items-end">
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              onClick={() => handleTabClick(tab.id)}
              className={`flex w-[250px]  items-center ${
                isActive
                  ? "bg-white border-green h-[45px] border-b"
                  : "bg-gray-200/50 border-gray-300 border-b-green group h-[40px] hover:h-[42px] hover:bg-gray-200 "
              }  justify-between border-2   z-[10] relative p-2  transition-all ease-in duration-100 rounded-t-md `}
              key={tab.id}
            >
              <div className="flex gap-2.5 items-center">
                <Image src={file} alt="file icon" className="w-4 h-4" />
                <h1
                  className={`${
                    isActive
                      ? "font-medium text-black"
                      : "font-normal text-gray-500"
                  } text-sm capitalize truncate`}
                >
                  {tab.name}
                </h1>
              </div>
              <button
                className="ml-2 cursor-default hover:bg-gray-200 rounded-full p-0.5 text-sm flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseTab(tab.id);
                }}
              >
                <IoMdClose className="text-green/80  " />
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleAddTab}>
        <FaPlus className="text-green text-2xl  hover:bg-gray-200 rounded-full p-1" />
      </button>
      <hr className="w-full border-t-2 z-[2] border-t-green absolute bottom-0" />
    </div>
  );
};

export default CTInterfaceTabHeader;
