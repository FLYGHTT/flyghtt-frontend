"use client";
import React, { useState, useRef } from "react";
import search from "@/assets/icons/search.svg";
import Image from "next/image";
import filter from "@/assets/icons/filter.svg";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { motion } from "framer-motion";
const HeaderModels = ({
  isFavorite,
  handleFavorite,
  handleRecents,
}: {
  isFavorite: boolean;
  handleFavorite: () => void;
  handleRecents: () => void;
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setShowFilter(false);
  });
  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex items-center justify-between pr-[20%]">
      <div className="flex gap-8 items-center ">
        <menu className="flex gap-4 pr-12">
          <p
            onClick={handleRecents}
            className={`${
              !isFavorite ? " border-b-4  border-b-black" : ""
            } cursor-pointer`}
          >
            Recents
          </p>
          <p
            onClick={handleFavorite}
            className={`${
              isFavorite ? " border-b-4  border-b-black" : ""
            } cursor-pointer`}
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
      <div className="w-fit relative">
        <Image
          src={filter}
          alt="filter"
          width={20}
          height={20}
          onClick={handleFilter}
          className="cursor-pointer"
        />
        {showFilter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 absolute -right-40 -top-40 text-sm w-[300px] p-4"
          >
            <h3 className=" text-base mb-2">Status</h3>
            <div className="flex gap-3 my-2">
              <input type="radio" name="completed" id="completed" />
              <label htmlFor="completed">Completed</label>
            </div>
            <div className="flex gap-3 my-2">
              <input type="radio" name="incomplete" id="incomplete" />
              <label htmlFor="incomplete">Incomplete</label>
            </div>
            <div className="flex gap-3 my-2">
              <label htmlFor="sort-date">Show results from </label>
              <input type="date" name="sort-date" id="sort-date" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeaderModels;
