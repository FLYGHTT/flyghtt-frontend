import React from "react";
import { Input } from "../ui/GlowInput";
import { Column } from "@/types";
import { IoMdAddCircleOutline } from "react-icons/io";

const ColumnItems = ({
  column,
  index,
  handleChange,
  handleAdd,
}: {
  column: Column;
  index: number;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    columnIndex: number,
    itemIndex: number
  ) => void;
  handleAdd: (index: number) => void;
}) => {
  return (
    <div className="mt-5 w-full flex flex-col gap-2">
      {column.items.map((item, idx) => (
        <div className="flex gap-2 items-center w-full " key={idx}>
          <div>
            <div className="bg-gray-500 text-white rounded-full w-6 h-6 text-sm justify-center flex items-center">
              {idx + 1}
            </div>
          </div>
          <div className="w-full">
            <Input
              value={item.title}
              name="title"
              id={`title-${index}-${idx}`}
              onChange={(e) => handleChange(e, index, idx)}
              className="font-semibold w-full placeholder:font-normal"
              placeholder="Column item"
            />
          </div>
        </div>
      ))}
      <IoMdAddCircleOutline
        className="cursor-pointer  text-xl text-gray-500"
        onClick={() => handleAdd(index)}
      />
    </div>
  );
};

export default ColumnItems;
