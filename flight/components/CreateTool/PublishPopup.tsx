"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { useRef } from "react";
const PublishPopup = ({ onClose }: { onClose: () => void }) => {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);
  return (
    <div
      className="bg-emerald-300 text-white  p-4 px-0 rounded-xl absolute -bottom-32 text-sm whitespace-nowrap right-0"
      ref={ref}
    >
      <p className="cursor-pointer py-2 hover:bg-gray-300 px-4 z-[11]">
        Publish as Private
      </p>
      <p className="cursor-pointer py-2  mt-2 hover:bg-gray-300 px-4 z-[11]">
        Publish as Public
      </p>
    </div>
  );
};

export default PublishPopup;
