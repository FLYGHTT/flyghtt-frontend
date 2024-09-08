"use client";
import React, { useState } from "react";
import { Column } from "@/types";
import { styles } from "../styles";
import { MdModeEdit } from "react-icons/md";
import FloatingLabelInput from "../ui/FloatingLabelInput";
import FloatingLabelTextArea from "../ui/FloatingLabelTextArea";
const ColumnDescription = ({
  column,
  columnIndex,
  handleChange,
}: {
  column: Column;
  columnIndex: number;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => void;
}) => {
  const [showDescription, setShowDescription] = useState(true);
  const handleFormatDescription = (desc: string) => {
    return desc.length > 200 ? `${desc.slice(0, 200)}...` : desc;
  };
  const handleShowDescription = () => {
    setShowDescription(true);
  };
  const handleHideDescription = () => {
    setShowDescription(false);
  };
  return (
    <>
      {!showDescription && (
        <div className="flex justify-between items-center max-w-full">
          <div className="max-w-full">
            <div className="flex gap-3 items-center">
              {" "}
              <h1 className="text-gray-500 font-semibold text-sm">
                Column Description
              </h1>
              <MdModeEdit
                className="cursor-pointer text-sm text-gray-600"
                onClick={handleShowDescription}
              />
            </div>
            <p className="mt-2 text-xs text-gray-800 break-words max-w-full">
              {column.description
                ? handleFormatDescription(column.description)
                : "No description"}
            </p>
          </div>
        </div>
      )}
      {showDescription && (
        <div className="mt-3">
          <FloatingLabelTextArea
            id="description"
            label="Column description"
            className={`${styles.input} h-30 placeholder:text-sm text-sm`}
            placeholder="Enter description"
            value={column.description}
            showLabel={true}
            onBlur={handleHideDescription}
            onChange={(e) => handleChange(e, columnIndex)}
            name="description"
          />
        </div>
      )}
    </>
  );
};

export default ColumnDescription;
