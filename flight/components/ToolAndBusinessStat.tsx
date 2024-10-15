import React from "react";

import { IconBriefcase2, IconTool } from "@tabler/icons-react";
import { Business, Tool } from "@/types";
const ToolAndBusinessStat = ({
  businesses,
  tools,
}: {
  businesses: Business[];
  tools: Tool[];
}) => {
  const stats = [
    {
      icon: <IconTool className="w-5 h-5" />,
      title: "Tools",
      value: tools ? tools.length : "N/A",
    },
    {
      icon: <IconBriefcase2 className="w-5 h-5" />,
      title: "Businesses",
      value: businesses ? businesses.length : "N/A",
    },
  ];
  return (
    <div className="flex gap-4">
      {stats.map((stat, index) => {
        return (
          <div key={index} className="w-[200px] p-6 rounded-xl bg-white">
            <div className="flex justify-between">
              <p className="text-sm font-semibold">{stat.title}</p>
              {stat.icon}
            </div>
            <p className=" text-3xl mt-2 font-bold">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToolAndBusinessStat;
