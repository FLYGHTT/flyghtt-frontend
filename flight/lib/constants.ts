import { convertToolColumnsToString } from "./convertToolColumns";
import { generateRandomString } from "./utils";
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
  toolId: generateRandomString(20),
  name: "",
  description: "",
  link: "",
  commentable: false,
  columns: convertToolColumnsToString(defaultColumns),
  public: false,
  createdAt: new Date(),
};
export const newTab = {
  id: generateRandomString(20),
  name: "New Tab",
  thumbnail: "",
  tabTool: newTool,
  mode: "preview",
};
