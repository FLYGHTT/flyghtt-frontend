"use client";
import React, { useState } from "react";
import Star from "./Star";
import Pin from "./Pin";
import { Model } from "@/types";

const ModelItem = ({
  model,
  isFavorites,
}: {
  model: Model;
  isFavorites?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = () => {
    setHoveredIndex(model.id);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className={`border-b-gray-200 border-b pb-2 flex items-center mt-4 pr-[20%] justify-between `}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <p>{model.name}</p>
      <div className="flex gap-6">
        <div className="flex items-center gap-4">
          <Star hoveredIndex={hoveredIndex} isStarred={model.isFavorite} />
          {!isFavorites && (
            <Pin hoveredIndex={hoveredIndex} isPinned={model.isPinned} />
          )}
        </div>

        <div className={`flex gap-6 w-[200px] justify-between text-sm `}>
          <p>{model.status}</p>
          <p>{model.modified}</p>
        </div>
      </div>
    </div>
  );
};

export default ModelItem;
