"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";
import useContextMenu from "../hooks/useContextMenu";
import ContextMenuItem from "./ContextMenuItem";
import { useOutsideClick } from "@/hooks/useOutsideClick";
const ContextMenu = ({ position }: { position: { x: number; y: number } }) => {
  const { menuRef, getAdjustedPosition } = useContextMenu();
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const { setContextMenu } = useAppContext();
  useOutsideClick(menuRef, () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  });
  useEffect(() => {
    if (menuRef.current) {
      const { adjustedX, adjustedY } = getAdjustedPosition(
        position.x,
        position.y,
        menuRef
      );

      setAdjustedPosition({ x: adjustedX, y: adjustedY });
    }
  }, [position, menuRef, getAdjustedPosition]);

  return (
    <motion.div
      className="bg-gray-50 text-black shadow-lg rounded-2xl py-4 w-[200px]"
      style={{
        top: adjustedPosition.y,
        left: adjustedPosition.x,
        position: "absolute",
        zIndex: 1000,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      ref={menuRef}
    >
      <ul>
        <ContextMenuItem text="Pin" />
        <ContextMenuItem text="Mark as Favorite" />
        <ContextMenuItem text="Mark as Completed" />
        <ContextMenuItem text="Share" />
        <ContextMenuItem text="Delete " />
      </ul>
    </motion.div>
  );
};

export default ContextMenu;
