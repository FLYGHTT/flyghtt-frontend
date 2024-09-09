import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import eagle from "@/assets/images/logo.svg";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
const CreateToolHeader = () => {
  return (
    <div className="flex row-span-1 justify-between shadow-sm w-full h-full items-center p-6  border border-b-gray-600">
      <div className="flex items-center justify-center gap-5">
        <IoIosArrowBack />
        <p className="flex gap-1 items-center font-semibold">
          Create New Tool <Image src={eagle} alt="logo" className="w-12 h-12" />
        </p>
      </div>
      <div className="text-gray-700 flex gap-4 items-center text-sm font-medium h-full">
        <p className="p-2 px-4 rounded-full bg-gray-100">Draft</p>
        <button className="p-2 px-4 border-2 border-gray-300 rounded-lg">
          Discard
        </button>
        <button className="p-2 px-4 border-2 border-gray-300 rounded-lg">
          Save as Draft
        </button>
        <hr className="border border-t-gray-300 h-[30px]" />
        <button className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center">
          Publish <FaChevronDown size={12} />
        </button>
      </div>
    </div>
  );
};

export default CreateToolHeader;
