"use client"
import React, { useCallback, useRef } from "react";
import { useAppContext } from "../context";
const useContextMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { setContextMenu, contextMenu } = useAppContext();

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.pageX, y: e.pageY });
  };

  const handleContextMenuClose = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  const getAdjustedPosition = useCallback(
    (x: number, y: number, menuRef: React.RefObject<HTMLDivElement>) => {
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
      const { offsetWidth: menuWidth, offsetHeight: menuHeight } =
        menuRef.current || { offsetWidth: 0, offsetHeight: 0 };

      let adjustedX = x;
      let adjustedY = y;

      if (x + menuWidth > windowWidth) {
        adjustedX = windowWidth - menuWidth - 30;
      }

      if (y + menuHeight > windowHeight) {
        adjustedY = windowHeight - menuHeight - 10;
      }

      return { adjustedX, adjustedY };
    },
    []
  );

  return {
    handleRightClick,
    handleContextMenuClose,
    menuRef,
    getAdjustedPosition,
  };
};

export default useContextMenu;
