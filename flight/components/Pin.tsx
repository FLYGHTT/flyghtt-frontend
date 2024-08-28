"use client";
import React from "react";
import pin from "@/assets/icons/pin.svg";
import Image from "next/image";
import { models } from "@/lib/data";
import { RiUnpinLine } from "react-icons/ri";

const Pin = ({
  hoveredIndex,
  isPinned,
}: {
  hoveredIndex: number | null;
  isPinned: boolean;
}) => {
  const handlePin = () => {
    {
      models.map((model) => {
        if (model.id === hoveredIndex) {
          model.isPinned = !model.isPinned;
        }
      });
    }
  };
  return (
    <>
      {hoveredIndex && !isPinned && (
        <Image src={pin} alt="pin" width={15} height={15} onClick={handlePin} />
      )}
      {isPinned && !hoveredIndex && (
        <Image src={pin} alt="pin" width={15} height={15} onClick={handlePin} />
      )}
      {isPinned && hoveredIndex && <RiUnpinLine onClick={handlePin} />}
    </>
  );
};

export default Pin;
