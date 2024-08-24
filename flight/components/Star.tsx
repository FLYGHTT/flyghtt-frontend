import React from "react";
import star from "@/assets/icons/star.svg";
import starFilled from "@/assets/icons/starfilled.svg";
import Image from "next/image";
import { models } from "@/lib/data";
const Star = ({
  hoveredIndex,
  isStarred,
}: {
  hoveredIndex: number | null;
  isStarred: boolean;
}) => {
  const handleStar = () => {
    models.map((model) => {
      if (model.id === hoveredIndex) {
        model.isFavorite = !model.isFavorite;
      }
    });
  };

  return (
    <>
      {hoveredIndex && !isStarred && (
        <Image
          src={star}
          alt="star"
          width={15}
          height={15}
          onClick={handleStar}
        />
      )}
      {!hoveredIndex && isStarred && (
        <Image
          src={starFilled}
          alt="star"
          width={15}
          height={15}
          onClick={handleStar}
        />
      )}
      {isStarred && hoveredIndex && (
        <Image
          src={starFilled}
          alt="star"
          width={15}
          height={15}
          onClick={handleStar}
        />
      )}
    </>
  );
};

export default Star;
