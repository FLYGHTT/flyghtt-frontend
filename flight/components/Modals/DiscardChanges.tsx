"use client";
import React from "react";
import info from "@/assets/icons/info.svg";
import Image from "next/image";
import { useModal } from "../Modal";
import { useRouter } from "next/navigation";
const DiscardChanges = () => {
  const router = useRouter();
  const { closeModal } = useModal();
  const handleDiscard = () => {
    router.back();
    closeModal();
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <Image src={info} alt="info" className="w-10 h-10" />
        <p className="">Discard changes, are you sure?</p>
        <div className="flex gap-6 items-center mt-4 text-sm">
          <button onClick={handleDiscard}>Discard</button>
          <button
            className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center"
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
