import React from "react";
import {
  IconBriefcase2,
  IconCirclePlus,
  IconSettings,
  IconTool,
} from "@tabler/icons-react";
import Link from "next/link";
const QuickLinks = () => {
  const quickLinks = [
    {
      icon: <IconSettings className="w-5 h-5" />,
      title: "New Tool",
      link: "/dashboard/tool-workspace",
    },
    {
      icon: <IconBriefcase2 className="w-5 h-5" />,
      title: "New Business",
      link: "/dashboard/businesses/new",
    },
  ];
  return (
    <div className="mt-4">
      <h1 className="mb-4 font-semibold">Quick Links</h1>
      <div className=" flex gap-4">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className=" w-[200px] p-6 hover:border-green border border-transparent rounded-xl bg-white flex flex-col items-center"
          >
            <IconCirclePlus className="w-8 h-8" />
            <span className="flex gap-2 font-bold text-sm mt-2 items-center">
              {link.title}
              {/* {link.icon} */}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
