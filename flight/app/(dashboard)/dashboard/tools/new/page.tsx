"use client";

import Back from "@/components/Back";
import React, { useState } from "react";
import NewToolHeader from "./NewToolHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import { newcolumn, newmodelInputs } from "@/lib/constants";
import { Column, Model, ModelInputs } from "@/types";

import Columns from "@/components/Column/Columns";

const Page = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [modelInputs, setModelInputs] = useState<ModelInputs>(newmodelInputs);

  const handleAddColumn = () => {
    setColumns((prevColumns) => [...prevColumns, newcolumn]);
  };

  return (
    <div className="w-full relative overflow-auto max-h-[90vh] overflow-x-hidden">
      <div className="flex ">
        <div className="absolute left-0 top-0 ">
          <Back className="bg-dark text-white" />
        </div>
        <div className="flex items-center px-48 w-full">
          <div className="bg-dark text-xl text-white rounded-md  p-4 px-16 flex items-center justify-center">
            Save Model
          </div>
        </div>
      </div>
      <NewToolHeader
        setModalInputs={setModelInputs}
        modelInputs={modelInputs}
      />
      <div className="mt-4">
        <p
          className="text-sm text-green flex gap-2 items-center cursor-pointer"
          onClick={handleAddColumn}
        >
          Add new model column
          <IoMdAddCircleOutline />
        </p>
        <Columns columns={columns} setColumns={setColumns} />
      </div>
    </div>
  );
};

export default Page;
