import React from "react";
import search from "@/assets/icons/search.svg";
import Image from "next/image";
import filter from "@/assets/icons/filter.svg";
const HeaderModels = ({
  isFavorite,
  handleFavorite,
  handleRecents,
}: {
  isFavorite: boolean;
  handleFavorite: () => void;
  handleRecents: () => void;
}) => {
  return (
    <div className="flex items-center justify-between pr-[20%]">
      <div className="flex gap-8 items-center ">
        <menu className="flex gap-4 pr-12">
          <p
            onClick={handleRecents}
            className={`${!isFavorite ? " border-b-4  border-b-black" : ""} cursor-pointer`}
          >
            Recents
          </p>
          <p
            onClick={handleFavorite}
            className={`${isFavorite ? " border-b-4  border-b-black" : ""} cursor-pointer`}
          >
            Favorites
          </p>
        </menu>
        <div className="bg-gray-100 rounded-full flex gap-2 p-2">
          <Image src={search} alt="search" />
          <input
            type="search"
            name=""
            id=""
            className="outline-none  bg-gray-100 rounded-full p-1"
          />
        </div>
      </div>
      <Image src={filter} alt="filter" width={20} height={20} />
    </div>
  );
};

export default HeaderModels;
