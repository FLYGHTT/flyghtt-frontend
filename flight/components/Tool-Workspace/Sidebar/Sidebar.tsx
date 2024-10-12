import React from "react";
import search from "@/assets/icons/search.svg";
import eagle from "@/assets/images/logo.svg";

import Image from "next/image";
import ToolDisplay from "./ToolDisplay";

const Sidebar = () => {
  return (
    <div className=" overflow-y-auto h-full  border-r-gray-600 border w-[280px]">
      <div className="flex w-full items-center p-3 justify-center gap-2">
        <p className="flex gap-2 items-center text-lg font-semibold">
          Tool Workspace
        </p>
        <Image src={eagle} alt="Flyghtt logo" className="w-12 h-12" />
      </div>
      <div className="border-t w-full p-3 border-t-gray-200">
        {" "}
        <h3 className="text-center text-sm font-medium">View Existing tools</h3>
        <div className="flex items-center gap-2 rounded-xl border border-lightGray mt-2 pl-2 w-full">
          <Image src={search} alt="search" width={20} height={20} />
          <input
            type="text"
            className=" px-3 p-2  rounded-r-xl text-sm text-black ring-0 w-full transition-all  ease-in  outline-none focus:ring-2 focus:ring-green"
            placeholder="Search..."
          />
        </div>
        <ToolDisplay />
      </div>
    </div>
  );
};

export default Sidebar;
