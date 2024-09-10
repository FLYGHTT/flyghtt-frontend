"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import eagle from "@/assets/images/logo.svg";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useModal } from "@/components/Modal";
import DiscardChanges from "@/components/DiscardChanges";
import PublishPopup from "./PublishPopup";
import PublishModel from "@/components/PublishModel";
const CreateToolHeader = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const handleBack = () => {
    router.back();
  };
  const openDiscardModal = () => {
    openModal(<DiscardChanges />);
  };
  const openPublishModal = () => {
    openModal(<PublishModel />);
  };

  return (
    <div className="flex row-span-1 justify-between shadow-sm w-full h-full items-center p-6  border border-b-gray-600">
      <div className="flex items-center justify-center gap-5">
        <IoIosArrowBack onClick={handleBack} className="cursor-pointer" />
        <p className="flex gap-1 items-center font-semibold">
          Create New Tool <Image src={eagle} alt="logo" className="w-12 h-12" />
        </p>
      </div>
      <div className="text-gray-700 flex gap-4 items-center text-sm font-medium h-full">
        <p className="p-2 px-4 relative flex gap-3 items-center rounded-full bg-gray-100">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Draft
        </p>
        <button
          className="p-2 px-4 border-2 border-gray-300 rounded-lg"
          onClick={openDiscardModal}
        >
          Discard
        </button>
        <button className="p-2 px-4 border-2 relative border-gray-300 rounded-lg">
          Save as Draft
        </button>
        <hr className="border border-t-gray-300 h-[30px]" />
        <button className="p-2 px-4 border-2 relative border-gray-300 rounded-lg">
          Preview
        </button>
        <button
          className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center"
          onClick={openPublishModal}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateToolHeader;
