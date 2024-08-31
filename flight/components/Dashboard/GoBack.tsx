"use client"
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className={`  mb-1 w-fit rounded-full p-2 bg-light cursor-pointer`}
    >
      <BiLogOutCircle size={20} />
    </div>
  );
};

export default GoBack;
