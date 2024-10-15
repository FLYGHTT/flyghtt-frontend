import React from "react";

import { Column } from "@/types";

import ColumnItem from "./ColumnItem";
import useColumn from "@/hooks/useColumn";

const ColumnList = ({ columns }: { columns: Column[] }) => {
  const {
    handleChange,
    handleAddNewFactor,
    handleFactorChange,
    handleDeleteColumn,
  } = useColumn(columns);
  return (
    <div className="flex flex-col gap-4 mt-4">
      {columns.map((column, columnIndex) => (
        <ColumnItem
          key={columnIndex}
          index={columnIndex}
          column={column}
          onChange={handleChange}
          onFactorChange={handleFactorChange}
          onAddFactor={handleAddNewFactor}
          onDelete={handleDeleteColumn}
        />
      ))}
    </div>
  );
};

export default ColumnList;
