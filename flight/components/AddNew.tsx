import React from "react";
import plus from "@/assets/icons/plus.svg";
import Image from "next/image";
const AddNew = ({ className, text }: { className?: string; text: string }) => {
  return (
    <div className={`bg-green items-center justify-center p-6 rounded-2xl flex gap-2 flex-col`}>
      <Image src={plus} alt="plus" width={60} height={60} />
      <h2 className="text-xl">{text}</h2>
    </div>
  );
};

export default AddNew;
