"use client";
import React from "react";
import search from "@/assets/icons/search.svg";
import Image from "next/image";
import CommunityTools from "./CommunityTools";
import YourTools from "./YourTools";

const CreateToolSidebar = () => {
  
  return (
    <div className=" overflow-y-auto max-h-[calc(100vh-60px)] p-3 border-r-gray-600 h-full border">
      <h3 className="text-center text-sm font-medium">Start from a template</h3>
      <div className="flex items-center gap-2 rounded-xl border border-lightGray mt-3  pl-2 w-full">
        <Image src={search} alt="search" width={20} height={20} />
        <input
          type="text"
          className=" px-3 p-2  rounded-r-xl text-sm text-black ring-0 w-full transition-all  ease-in  outline-none focus:ring-2 focus:ring-green"
          placeholder="Search..."
        />
      </div>

      <CommunityTools />
      <YourTools />
    </div>
  );
};

export default CreateToolSidebar;
