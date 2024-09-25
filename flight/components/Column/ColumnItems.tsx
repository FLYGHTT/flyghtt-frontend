import React from "react";
import { Input } from "../ui/GlowInput";

import { IoMdAddCircleOutline } from "react-icons/io";
import { Factor } from "@/types";
const ColumnItems = ({
  factors,
  onChange,
  columnIndex,
  onAdd,
}: {
  factors: Factor[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    columnIndex: number,
    factorIndex: number
  ) => void;
  columnIndex: number;
  onAdd: (index: number) => void;
}) => {
  return (
    <div className="mt-5 w-full flex flex-col gap-2">
      {factors.map((item, idx) => (
        <div className="flex gap-2 items-center w-full " key={idx}>
          <div>
            <div className="bg-gray-500 text-white rounded-full w-6 h-6 text-sm justify-center flex items-center">
              {idx + 1}
            </div>
          </div>
          <div className="w-full">
            <Input
              value={item.name}
              name="name"
              id={`name-${columnIndex}-${idx}`}
              onChange={(e) => onChange(e, columnIndex, idx)}
              className="font-semibold w-full placeholder:font-normal"
              placeholder="Enter Factor Name"
            />
          </div>
        </div>
      ))}
      <IoMdAddCircleOutline
        className="cursor-pointer  text-xl text-gray-500"
        onClick={() => onAdd(columnIndex)}
      />
    </div>
  );
};

export default ColumnItems;
