import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
import { styles } from "@/components/styles";
import { Column } from "@/types";
import { WidthProvider, Responsive } from "react-grid-layout";
import ColumnHeading from "./ColumnHeading";
import ColumnDescription from "./ColumnDescription";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Columns = ({
  columns,
  setColumns,
}: {
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
}) => {
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

  // Define grid layout for the columns
  const [layouts, setLayouts] = useState({
    lg: [
      { i: "1", x: 0, y: 0, w: 1, h: 2 },
      { i: "2", x: 1, y: 0, w: 1, h: 2 },
      // { i: "3", x: 0, y: 1, w: 1, h: 2 },
      // { i: "4", x: 1, y: 1, w: 1, h: 2 },
    ],
  });

  // const onLayoutChange = (layout) => {
  //   setLayouts((prevLayouts) => ({
  //     ...prevLayouts,
  //     lg: layout,
  //   }));
  // };
  const getColumnHeight = (column: Column) => {
    const baseHeight = 1; // Base height for the column
    const itemHeight = 1; // Height for each item in the column
    return baseHeight + column.items.length * itemHeight;
  };

  return (
    <div className="h-full w-full">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }} // 2 columns grid for large screens
        rowHeight={100}
        // onLayoutChange={(layout) => onLayoutChange(layout)}
        draggableHandle=".drag-handle"
        isDraggable={true}
        isResizable={true}
        isDroppable={true}
        maxRows={80}
      >
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            data-grid={{
              i: columnIndex.toString(),
              x: columnIndex % 2, // Alternate between 0 and 1 for 2 columns
              y: Math.floor(columnIndex / 2), // Increment y for every 2 items
              w: 1, // Each column takes one column width
              h: getColumnHeight(column), // Default height
              minW: 1,
              minH: 2,
            }}
            className="border-2 column relative border-blue-500  mt-4 column p-4 rounded-md bg-white"
          >
            <div className="group absolute top-0 left-0 drag-handle h-4 z-[10] justify-center cursor-move w-full flex ">
              <div className="group-hover:block hidden  mt-0.5 h-2 rounded-md w-[20%]  bg-purple-800"></div>
            </div>
            <ColumnHeading
              column={column}
              columnIndex={columnIndex}
              handleChange={handleChange}
            />
            <ColumnDescription
              column={column}
              columnIndex={columnIndex}
              handleChange={handleChange}
            />
            <div className="mt-5">
              {column.items.map((item, index) => (
                <div className="mt-3" key={index}>
                  <div className="flex gap-2 items-center">
                    <div className="bg-gray-500 text-white rounded-full w-6 h-6 text-sm justify-center flex items-center">
                      {index + 1}
                    </div>
                    <div>
                      <FloatingLabelInput
                        label="Column item "
                        showLabel={true}
                        value={item.title}
                        name="title"
                        id={`title-${columnIndex}-${index}`}
                        onChange={(e) =>
                          handleItemChange(e, columnIndex, index)
                        }
                        className="font-semibold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Columns;
