import { Column } from "@/types";
import React from "react";
import { GoQuestion } from "react-icons/go";
import ColumnFactors from "./ColumnFactors";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ColumnList = ({ columns }: { columns: Column[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {columns.map((column, columnIndex) => (
        <>
          {column.name && (
            <div
              className="border-2 p-6 relative bg-white rounded-md"
              key={columnIndex}
            >
              <div className="w-full flex items-center">
                <h2 className="text-xl font-semibold">{column.name}</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <GoQuestion className="text-gray-500 ml-2" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{column.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <ColumnFactors factors={column.factors} />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ColumnList;
