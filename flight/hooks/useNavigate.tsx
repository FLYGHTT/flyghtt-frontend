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

    // Animate only the clicked element
    animate(e.currentTarget, {
      opacity: 0,
      scale: 1.8,
    }, {
      duration: 0.3,
      ease: "easeInOut",
    });

    // Delay navigation to allow the animation to complete
    setTimeout(() => {
      router.push(path);
    }, 100); // Adjust the delay to match your animation duration
  };

  return { handleClick, scope };
};

export default useNavigate;
