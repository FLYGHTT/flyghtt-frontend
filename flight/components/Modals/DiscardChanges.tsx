"use client";
import React from "react";
import exclaim from "@/assets/icons/exclaim.png";
import Image from "next/image";
import { useModal } from "../Modal";

const DiscardChanges = ({
  tabId,
  discardFunction,
  message,
}: {
  tabId: string;
  discardFunction: any;
  message: string;
}) => {
  const { closeModal } = useModal();

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <Image src={exclaim} alt="Exclamation mark" className="w-16 h-16" />
        <p className="mt-2">{message}</p>
        <div className="flex gap-6 items-center mt-4 text-sm">
          <button onClick={() => discardFunction(tabId)}>Discard</button>
          <button
            className="p-2 px-4 bg-green  rounded-lg flex gap-2 items-center justify-center"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscardChanges;
