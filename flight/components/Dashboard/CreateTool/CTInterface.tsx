"use client";
import React, { useState } from "react";
import ModelHeader from "@/app/(dashboard)/dashboard/tools/new/ModelHeader";
import { IoMdAddCircleOutline } from "react-icons/io";

import { newcolumn, newmodelInputs } from "@/lib/constants";
import { Column, Model, ModelInputs } from "@/types";
import { useSubmitModelMutation } from "@/hooks/reactQueryHooks";
import Columns from "@/components/Column/Columns";

const CTInterface = () => {
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
    <div className="w-full relative overflow-y-auto max-h-[90%] col-span-10 px-10 p-6">
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

export default CTInterface;
