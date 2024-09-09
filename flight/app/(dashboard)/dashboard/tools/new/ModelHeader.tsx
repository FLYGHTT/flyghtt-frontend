"use client";
import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { motion } from "framer-motion";
import { IoMdAddCircleOutline } from "react-icons/io";
import FloatingLabelTextArea from "@/components/ui/FloatingLabelTextArea";
import { ModelInputs } from "@/types";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
const ModelHeader = ({
  setModalInputs,
  modelInputs,
}: {
  modelInputs: ModelInputs;
  setModalInputs: React.Dispatch<React.SetStateAction<ModelInputs>>;
}) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const handleShowLinkInput = () => {
    setShowLinkInput(!showLinkInput);
  };
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

  const handleHideDescription = () => {
    setShowDescription(false);
  };
  const handleShowDescription = () => {
    setShowDescription(true);
  };
  const handleFormatDescription = (desc: string) => {
    return desc.length > 200 ? `${desc.slice(0, 200)}...` : desc;
  };

  return (
    <div className="flex gap-6 mt-2  h-fit z-[100]">
      <div className="w-[65%] ">
        <FloatingLabelInput
          label="Model name"
          showLabel={true}
          value={modelInputs.modelName}
          name="modelName"
          onChange={handleChange}
          className="text-xl font-bold"
        />
        {!showDescription && (
          <div className="flex justify-between items-center max-w-full">
            <div className="max-w-full">
              <div className="flex gap-3 items-center">
                {" "}
                <h1 className="text-gray-500 font-semibold text-sm">
                  Model Description
                </h1>
                <MdModeEdit
                  className="cursor-pointer text-sm text-gray-600"
                  onClick={handleShowDescription}
                />
              </div>
              <p className="mt-2 text-sm text-gray-800 break-words max-w-full">
                {modelInputs.modelDescription
                  ? handleFormatDescription(modelInputs.modelDescription)
                  : "No description"}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4">
          {showDescription && (
            <FloatingLabelTextArea
              label="Model description"
              showLabel={true}
              value={modelInputs.modelDescription}
              name="modelDescription"
              onChange={handleChange}
              onBlur={handleHideDescription}
            />
          )}
        </div>
      </div>

      <div className="w-[35%]">
        {showLinkInput ? (
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FloatingLabelInput
              label="External reference"
              showLabel={true}
              value={modelInputs.linkReference}
              onChange={handleChange}
              className="text-sm"
              name="linkReference"
            />
          </motion.div>
        ) : (
          <p
            className="text-sm text-green flex gap-2 cursor-pointer z-[100] items-center h-fit w-full"
            onClick={handleShowLinkInput}
          >
            Add links to external references
            <IoMdAddCircleOutline className="" />
          </p>
        )}
      </div>
    </div>
  );
};

export default ModelHeader;
