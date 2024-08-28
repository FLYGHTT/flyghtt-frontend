"use client";
import React, { useState } from "react";
import HeaderModels from "./HeaderModels";
import Recents from "./Recents";
import Favourites from "./Favourites";

const Models = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(true);
  };

  const handleRecents = () => {
    setIsFavorite(false);
  };

  // const togglePin = (id: number) => {
  //   setItems(
  //     items.map((item) =>
  //       item.id === id ? { ...item, isPinned: !item.isPinned } : item
  //     )
  //   );
  // };

  return (
    <div className="mt-8 px-6 text-base">
      <HeaderModels
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
        handleRecents={handleRecents}
      />
      <div
        className={`border-b-gray-200 border-b pb-2 flex items-center mt-4 pr-[20%] justify-between text-sm`}
      >
        <p>Name</p>
        <div className="flex gap-6">
          <div className={`flex gap-6 w-[200px] justify-between `}>
            <p>Status</p>
            <p>Modified</p>
          </div>
        </div>
      </div>
      {isFavorite ? <Favourites /> : <Recents />}

      {/* {items
        .filter((item) => item.favourite )
        .map((item) => (
          <ModelItem
            key={item.id}
            name={item.name}
            status={item.status}
            modified={item.modified}
            className2="text-sm"
            isBody={true}
            isFavorite={isFavorite}
            isPinned={item.isPinned}
            onPinToggle={() => togglePin(item.id)}
          />
        ))} */}
    </div>
  );
};

export default Models;
