import React from "react";
import FloatingLabelInput from "../ui/FloatingLabelInput";
import { FaRegTrashCan } from "react-icons/fa6";
import { Column } from "@/types";
const ColumnHeading = ({
  column,
  columnIndex,
  handleChange,
}: {
  column: Column;
  columnIndex: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}) => {
  return (
    <div className="flex justify-between items-center mt-3 gap-3">
      <div className={`${column.description ? "w-[95%]" : "w-[70%]"}`}>
        <FloatingLabelInput
          label="Column heading"
          id={`heading-${columnIndex}`}
          showLabel={true}
          name="heading"
          value={column.heading}
          onChange={(e) => handleChange(e, columnIndex)}
          className="text-xl font-semibold floating-label-input "
        />
      </div>
      <div
        className={` text-sm cursor-pointer ${
          column.description ? "w-[5%]" : "w-[30%]"
        }`}
      >
        <FaRegTrashCan className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ColumnHeading;
