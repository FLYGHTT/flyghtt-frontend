import { Column } from "@/types";

const exampleContent =
  "PRIMARY ACTIVITIES^descriptionabout the tool|inbound logistics: something about inbound logistics|outbound logistics: something about outbound logistics|operations: something about operations|sales and marketing: something about sales and marketing|service: something about service\nCOMPLEMENTARY ACTIVITIES^description|firm infrastructure: something about firm infrastructure|human resources management: something about human resource management|technology development: something about techlology development|procurement: something about procurement";

function splitFactorNameToValue(factor: string) {
  const response = factor.split(": ");
  const name = response[0];
  const value = response[1];
  return { name, value };
}

function getColumns(content: string) {
  return content.split("\n");
}

function getNameDescriptionAndFactors(column: string) {
  // Split the title and description from the factors
  const titleDescriptionAndFactors = column.split("|");
  const titleDescription = titleDescriptionAndFactors[0].split("^");

  const name = titleDescription[0] || "";
  const description = titleDescription[1] || "";

  // For each factor (e.g., "inbound logistics: something"), split and map it to an object
  const factors = titleDescriptionAndFactors
    .slice(1)
    .map((factor) => splitFactorNameToValue(factor));

  return {
    name,
    description,
    factors: factors || [],
  };
}

export const convertToolColumnsToArray = (columns: string) => {
  const convertedColumns = getColumns(columns);
  return convertedColumns.map((column) => getNameDescriptionAndFactors(column));
};

export const convertToolColumnsToString = (data: Column[]) => {
  return data
    .map((item: Column) => {
      // Combine name and description
      const header = `${item.name}^${item.description}`;

      // Map columns array to "name: value" format
      const columnsString = item.factors
        .map((col) => `${col.name}: ${col.value}`)
        .join("|");

      // Join the header and the columns string with a separator "|"
      return `${header}|${columnsString}`;
    })
    .join("\n");
};
