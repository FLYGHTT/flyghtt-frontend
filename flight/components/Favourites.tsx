import React from "react";
import { models } from "@/lib/data";
import ModelItem from "./ModelItem";
const Favourites = () => {
  return (
    <>
      {models
        .filter((model) => model.isFavorite)
        .map((model) => (
          <ModelItem key={model.id} model={model} isFavorites={true} />
        ))}
    </>
  );
};

export default Favourites;
