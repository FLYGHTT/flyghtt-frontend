"use client";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import { AppContextType } from "@/types";

const useNavigate = () => {
  const router = useRouter();
  const { setClickPosition, clickPosition } = useAppContext() as AppContextType;
  console.log(clickPosition);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, path: string) => {
    setClickPosition({
      x: e.clientX,
      y: e.clientY,
    });

    setTimeout(() => {
      router.push(path);
    }, 100);
  };
  console.log(clickPosition);
  return { handleClick };
};

export default useNavigate;
