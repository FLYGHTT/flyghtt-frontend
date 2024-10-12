import { Tool } from "@/types";
import React from "react";
import { convertToolColumnsToArray } from "@/lib/convertToolColumns";
import ToolHeadingAndDesc from "./ToolHeadingAndDesc";
import ColumnList from "./ColumnList";
const PreviewTool = ({ tool }: { tool: Tool }) => {
  const toolcolumns = tool.columns
    ? convertToolColumnsToArray(tool.columns)
    : [];

  return (
    <>
      <ToolHeadingAndDesc tool={tool} />
      {toolcolumns.length > 0 && <ColumnList columns={toolcolumns} />}
    </>
  );
};

export default PreviewTool;
