import React from "react";
import { models } from "@/lib/data";
import ModelItem from "./ModelItem";
const Recents = () => {
  return (
    <>
      {models.map((model) => (
        <ModelItem model={model} key={model.id} />
      ))}
    </>
  );
};

export default Recents;
