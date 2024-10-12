import React from "react";

import { useAppContext } from "@/context";
import { convertToolColumnsToString } from "@/lib/convertToolColumns";
import { defaultColumns } from "@/lib/constants";
import { Column } from "@/types";

const useColumn = (columns: Column[]) => {
  const { setTabs, tabs, activeTabId } = useAppContext();

  const handleFactorChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    columnIndex: number,
    factorIndex: number
  ) => {
    const { name, value } = e.target;
    const newToolColumns = columns.map((column, idx) =>
      idx === columnIndex
        ? {
            ...column,
            factors: column.factors.map((item, i) =>
              i === factorIndex ? { ...item, [name]: value } : item
            ),
          }
        : column
    );
    setTabs((prevTabs) => {
      const newTabs = prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              tabTool: {
                ...tab.tabTool,
                columns: convertToolColumnsToString(newToolColumns),
              },
            }
          : tab
      );
      localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
      return newTabs;
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newToolColumns = columns.map((column, idx) =>
      idx === index ? { ...column, [name]: value } : column
    );
    setTabs((prevTabs) => {
      const newTabs = prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              tabTool: {
                ...tab.tabTool,
                columns: convertToolColumnsToString(newToolColumns),
              },
            }
          : tab
      );
      localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
      return newTabs;
    });
  };
  const handleAddNewFactor = (index: number) => {
    const newFactor = { name: "", value: "" };
    const newToolColumns = columns.map((column, idx) =>
      idx === index
        ? { ...column, factors: [...column.factors, newFactor] }
        : column
    );
    setTabs((prevTabs) => {
      const newTabs = prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              tabTool: {
                ...tab.tabTool,
                columns: convertToolColumnsToString(newToolColumns),
              },
            }
          : tab
      );
      localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
      return newTabs;
    });
  };
  const handleDeleteColumn = (index: number) => {
    const newToolColumns = columns.filter((_, idx) => idx !== index);
    setTabs((prevTabs) => {
      const newTabs = prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              tabTool: {
                ...tab.tabTool,
                columns: convertToolColumnsToString(newToolColumns),
              },
            }
          : tab
      );
      localStorage.setItem("flyghtt-tabs", JSON.stringify(newTabs));
      return newTabs;
    });
  };
  const handleAddColumn = () => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === activeTabId
          ? {
              ...tab,
              tabTool: {
                ...tab.tabTool,
                columns: `${tab.tabTool.columns}\n${convertToolColumnsToString(
                  defaultColumns
                )}`,
              },
            }
          : tab
      )
    );
  };
  console.log(tabs);
  return {
    handleAddColumn,
    handleFactorChange,
    handleChange,
    handleAddNewFactor,
    handleDeleteColumn,
  };
};

export default useColumn;
