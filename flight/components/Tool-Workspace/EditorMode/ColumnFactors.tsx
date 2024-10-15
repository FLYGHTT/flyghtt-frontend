import React from "react";
import { Input } from "@/components/ui/GlowInput";

import { IoMdAddCircleOutline } from "react-icons/io";
import { Factor } from "@/types";
const ColumnFactors = ({
  factors,
  onChange,
  index,
  onAdd,
}: {
  factors: Factor[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    factorIndex: number
  ) => void;
  index: number;
  onAdd: (index: number) => void;
}) => {
  return (
    <div className="mt-4 w-full flex flex-col gap-4">
      {factors.map((item, idx) => (
        <div className="flex gap-2 w-full " key={idx}>
          <div>
            <div className="bg-gray-500 text-white rounded-full w-6 h-6 text-sm justify-center flex items-center">
              {idx + 1}
            </div>
          </div>
          <div className="w-full">
            <Input
              value={item.name}
              name="name"
              id={`name-${index}-${idx}`}
              onChange={(e) => onChange(e, index, idx)}
              className="font-semibold w-full placeholder:font-normal"
              placeholder="Enter Factor Name"
            />
          </div>
        </div>
      ))}
      <IoMdAddCircleOutline
        className="cursor-pointer  text-xl text-gray-500"
        onClick={() => onAdd(index)}
      />
    </div>
  );
};

export default ColumnFactors;
