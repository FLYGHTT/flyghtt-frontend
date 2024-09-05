"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { IoMdAddCircleOutline } from "react-icons/io";
import FloatingLabelTextArea from "@/components/ui/FloatingLabelTextArea";
import { ModelInputs } from "@/types";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
const NewToolHeader = ({
  setModalInputs,
  modelInputs,
}: {
  modelInputs: ModelInputs;
  setModalInputs: React.Dispatch<React.SetStateAction<ModelInputs>>;
}) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkInputs, setLinkInputs] = useState<string>("");
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
  const handleLinkReferenceChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLinkInputs(e.target.value);
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const externalReferences = linkInputs.split(",");
    console.log(externalReferences);
    setModalInputs((prevState) => ({
      ...prevState,
      externalReferences,
    }));
  };
  const handleShowDescription = () => {
    setShowDescription(false);
  };
  const handleFormatDescription = (desc: string) => {
    return desc.length > 200 ? `${desc.slice(0, 200)}...` : desc;
  };

  return (
    <div className="flex gap-6   mt-12   h-fit z-[100]">
      <div className="w-[65%] ">
        <FloatingLabelInput
          label="Model name"
          showLabel={true}
          value={modelInputs.modelName}
          name="modelName"
          onChange={handleChange}
          className="text-xl font-bold"
        />
        {modelInputs.modelDescription && !showDescription && (
          <>
          <h1 className="text-gray-500 font-semibold text-sm">Description</h1>
            <p className="mt-2 text-sm text-gray-800 break-words">
              {handleFormatDescription(modelInputs.modelDescription)}
            </p>
          </>
        )}
        <div className="mt-4">
          {showDescription && (
            <FloatingLabelTextArea
              label="Model description"
              showLabel={true}
              value={modelInputs.modelDescription}
              name="modelDescription"
              onChange={handleChange}
              onBlur={handleShowDescription}
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
            <FloatingLabelTextArea
              label="External references"
              showLabel={true}
              value={linkInputs}
              onChange={handleLinkReferenceChange}
              onBlur={handleBlur}
              className="text-sm"
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

export default NewToolHeader;
