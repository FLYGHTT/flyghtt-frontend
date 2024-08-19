"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { useAnimate } from "framer-motion";

const useNavigate = () => {
  const router = useRouter();
  const [scope, animate] = useAnimate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, path: string) => {
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
