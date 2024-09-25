import { convertToolColumnsToString } from "./convertToolColumns";
export const defaultColumns = [
  {
    name: "",
    description: "",
    factors: [
      {
        name: "",
        value: "",
      },
      {
        name: "",
        value: "",
      },
      {
        name: "",
        value: "",
      },
    ],
  },
];
export const newTool = {
  toolId: "",
  name: "",
  description: "",
  link: "",
  commentable: false,
  columns: convertToolColumnsToString(defaultColumns),
  public: false,
  createdAt: new Date(),
};
