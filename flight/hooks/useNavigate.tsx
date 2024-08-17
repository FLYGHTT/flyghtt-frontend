"use client";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import React, { useState } from "react";
import { AppContextType } from "@/types";
import { useAnimate } from "framer-motion";

const useNavigate = () => {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const { setClickPosition } = useAppContext() as AppContextType;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, path: string) => {
    setClickPosition({
      x: e.clientX,
      y: e.clientY,
    });
    animate(
      e.currentTarget,
      {
        opacity: 0,
        scale: 1.8,
      },
      {
        duration: 0.2,
        ease: "easeInOut",
      }
    );

    setTimeout(() => {
      router.push(path);
    }, 100);
  };

  return { handleClick, scope };
};

export default useNavigate;
