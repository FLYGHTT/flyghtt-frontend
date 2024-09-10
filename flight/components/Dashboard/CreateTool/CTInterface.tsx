"use client";
import React, { useState } from "react";
import ModelHeader from "./ModelHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import { newcolumn, newmodelInputs } from "@/lib/constants";

import Columns from "@/components/Column/Columns";
import { useAppContext } from "@/context";
const CTInterface = () => {
  const { setColumns, columns } = useAppContext();
  const handleAddColumn = () => {
    setColumns((prevColumns) => [
      ...prevColumns,
      { ...newcolumn, id: Math.random() },
    ]);
  };

  return (
    <div className="w-full relative overflow-y-auto max-h-[90%] col-span-10 px-10 p-6 ">
      <ModelHeader />
      <div className="mt-4">
        <p
          className="text-sm text-gray-700 flex gap-2 items-center cursor-pointer w-fit"
          onClick={handleAddColumn}
        >
          Add new model column
          <IoMdAddCircleOutline />
        </p>
        {columns.length > 0 && <Columns />}
      </div>
    </div>
  );
};

export default CTInterface;
