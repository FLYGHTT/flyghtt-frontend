"use client";

import Back from "@/components/Back";
import React, { useState } from "react";
import ModelHeader from "../../../components/Dashboard/CreateTool/ModelHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import { newcolumn, newmodelInputs } from "@/lib/constants";
import { Column, Model, ModelInputs } from "@/types";
import { useSubmitModelMutation } from "@/hooks/reactQueryHooks";
import Columns from "@/components/Column/Columns";

const Page = () => {
  const [model, setModel] = useState<Model>();
  const [columns, setColumns] = useState<Column[]>([]);
  const [modelInputs, setModelInputs] = useState<ModelInputs>(newmodelInputs);

  const handleAddColumn = () => {
    setColumns((prevColumns) => [
      ...prevColumns,
      { ...newcolumn, id: Math.random() },
    ]);
  };
  const { mutate, data, isPending, isError, error } = useSubmitModelMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });
  if (isPending) {
    console.log("loading");
  }
  if (isError) {
    console.log("error", data);
    console.log(error);
  }
  const submitModel = () => {
    const newModel = {
      name: modelInputs.modelName,
      description: modelInputs.modelDescription,
      link: modelInputs.linkReference,
      commentable: true,
      columns: columns.map((column) => {
        return {
          name: column.heading,
          description: column.description,
          factors: column.items.map((item) => item.title),
        };
      }),
      public: true,
    };
    mutate(newModel);
  };
  return (
    <div className="w-full relative overflow-auto max-h-[95vh] overflow-x-hidden">
      <div className="flex ">
        <div className="absolute left-0 top-0 ">
          <Back className="bg-dark text-white" />
        </div>
        <div className="flex items-center px-48 w-full">
          <div
            className="bg-dark text-xl text-white rounded-md  p-4 px-16 flex items-center justify-center"
            onClick={submitModel}
          >
            Save Model
          </div>
        </div>
      </div>
      <ModelHeader setModalInputs={setModelInputs} modelInputs={modelInputs} />
      <div className="mt-4">
        <p
          className="text-sm text-green flex gap-2 items-center cursor-pointer w-fit"
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
