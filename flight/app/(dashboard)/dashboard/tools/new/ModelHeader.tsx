import React from "react";
import { ModelInputs } from "@/types";
import { Input } from "@/components/ui/GlowInput";
import { TextArea } from "@/components/ui/GlowTextArea";
const ModelHeader = ({
  setModalInputs,
  modelInputs,
}: {
  modelInputs: ModelInputs;
  setModalInputs: React.Dispatch<React.SetStateAction<ModelInputs>>;
}) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setModalInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value || "",
    }));
  };

  return (
    <div className="gap-6 mt-2  h-fit  bg-green/10 w-[60vw] rounded-xl p-8">
      <div className="w-full flex  ">
        <label
          htmlFor="modelName"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          Model Name
        </label>
        <div className="w-[80%]">
          <Input
            id="modelName"
            placeholder="e.g. Customer churn prediction"
            value={modelInputs.modelName}
            name="modelName"
            onChange={handleChange}
            className="text-xl font-bold placeholder:text-sm placeholder:font-normal"
          />
        </div>
      </div>

      <div className="mt-4 w-full flex ">
        <label
          htmlFor="modelDescription"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          Description
        </label>
        <div className="w-[80%]">
          <TextArea
            value={modelInputs.modelDescription}
            name="modelDescription"
            placeholder="Enter description"
            onChange={handleChange}
            className=" "
          />
        </div>
      </div>
      <div className="w-full flex mt-4 ">
        <label
          htmlFor="linkReference"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          External reference
        </label>
        <div className="w-[80%]">
          <Input
            id="linkReference"
            value={modelInputs.linkReference}
            name="linkReference"
            placeholder="Paste link here"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelHeader;
