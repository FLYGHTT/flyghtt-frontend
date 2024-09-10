"use client";
import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import { HoverDiv } from "../HoverDiv";
import { Input } from "../ui/GlowInput";
import ColumnItems from "./ColumnItems";
import { Column } from "@/types";
import "react-grid-layout/css/styles.css";
import { useAppContext } from "@/context";
const ResponsiveGridLayout = WidthProvider(Responsive);

const Columns = () => {
  const { setColumns, columns } = useAppContext();
  const handleItemChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    columnIndex: number,
    itemIndex: number
  ) => {
    const { name, value } = e.target;
    setColumns((prevState) =>
      prevState.map((column, idx) =>
        idx === columnIndex
          ? {
              ...column,
              items: column.items.map((item, i) =>
                i === itemIndex ? { ...item, [name]: value } : item
              ),
            }
          : column
      )
    );
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setColumns((prevState) =>
      prevState.map((column, idx) =>
        idx === index ? { ...column, [name]: value } : column
      )
    );
  };
  const handleAddNewColumnItem = (index: number) => {
    setColumns((prevState) =>
      prevState.map((column, idx) =>
        idx === index
          ? {
              ...column,
              items: [...column.items, { id: Math.random(), title: "" }],
            }
          : column
      )
    );
  };
  // Set up grid layout for the columns
  const [layouts, setLayouts] = useState({
    lg: columns.map((_, index) => ({
      i: index.toString(),
      x: index % 2, // 2-column layout
      y: Math.floor(index / 2),
      w: 1,
      h: 2,
    })),
  });

  // const onLayoutChange = (newLayout: any) => {
  //   setLayouts((prevLayouts) => ({
  //     ...prevLayouts,
  //     lg: newLayout,
  //   }));
  // };

  const getColumnHeight = (column: Column) => {
    const baseHeight = 1;
    const itemHeight = 1;
    return baseHeight + column.items.length * itemHeight;
  };

  return (
    <div className="h-fit w-full bg-[#f8f9fa] rounded-xl mt-4 p-6">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={100}
        draggableHandle=".drag-handle"
        isDraggable={true}
        isResizable={true}
        isDroppable={true}
        // onLayoutChange={onLayoutChange}
      >
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            data-grid={{
              i: columnIndex.toString(),
              x: columnIndex % 2,
              y: Math.floor(columnIndex / 2),
              w: 1,
              h: getColumnHeight(column),
              minW: 1,
              minH: 2,
            }}
            className="border-2 p-4 relative bg-white rounded-md"
          >
            <div className="group absolute top-0 left-0 drag-handle h-4 z-[10] justify-center cursor-move w-full flex">
              <div className="group-hover:block hidden mt-0.5 h-2 rounded-md w-[20%] bg-purple-800"></div>
            </div>

            <div className="w-full flex">
              <label
                htmlFor="heading"
                className="w-[20%] text-gray-600 font-semibold text-sm"
              >
                Heading
              </label>
              <div className="w-[80%]">
                <Input
                  name="heading"
                  placeholder="Enter heading"
                  className="text-lg font-semibold placeholder:text-sm placeholder:font-normal"
                  id={`heading-${columnIndex}`}
                  value={column.heading}
                  onChange={(e) => handleChange(e, columnIndex)}
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
                  id={`description-${columnIndex}`}
                  value={column.description}
                  placeholder="Enter description"
                  onChange={(e) => handleChange(e, columnIndex)}
                />
              </div>
            </div>
            <ColumnItems
              column={column}
              index={columnIndex}
              handleChange={handleItemChange}
              handleAdd={handleAddNewColumnItem}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Columns;
