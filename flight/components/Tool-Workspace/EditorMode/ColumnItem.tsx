import React from "react";
import { Column } from "@/types";
import { Input } from "@/components/ui/input";
import ColumnFactors from "./ColumnFactors";
import { RiDeleteBin5Fill } from "react-icons/ri";
const ColumnItem = ({
  index,
  column,
  onChange,
  onFactorChange,
  onAddFactor,
  onDelete,
}: {
  index: number;
  column: Column;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onFactorChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    columnIndex: number,
    factorIndex: number
  ) => void;
  onDelete: (index: number) => void;
  onAddFactor: (index: number) => void;
}) => {
  return (
    <div
      key={index}
      className="border-2 p-4 pr-8 group relative bg-white rounded-xl w-full"
    >
      <span
        className="absolute group-hover:block hidden cursor-pointer top-2 right-2"
        onClick={() => onDelete(index)}
      >
        <RiDeleteBin5Fill />
      </span>
      <div className="w-full flex">
        <label
          htmlFor="heading"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          Heading
        </label>
        <div className="w-[80%]">
          <Input
            name="name"
            placeholder="Enter Column Name"
            className="text-lg font-semibold placeholder:text-sm placeholder:font-normal"
            id={`name-${index}`}
            value={column.name}
            onChange={(e) => onChange(e, index)}
          />
        </div>
      </div>
      <div className="w-full flex mt-3">
        <label
          htmlFor="description"
          className="w-[20%] text-gray-600 font-semibold text-sm"
        >
          Description
        </label>
        <div className="w-[80%]">
          <Input
            name="description"
            className=""
            id={`description-${index}`}
            value={column.description}
            placeholder="Enter Description"
            onChange={(e) => onChange(e, index)}
          />
        </div>
      </div>
      <ColumnFactors
        factors={column.factors}
        index={index}
        onChange={onFactorChange}
        onAdd={onAddFactor}
      />
    </div>
  );
};

export default ColumnItem;
