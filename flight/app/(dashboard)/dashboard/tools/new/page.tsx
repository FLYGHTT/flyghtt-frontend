"use client";
import Back from "@/components/Back";
import React from "react";
import { Label } from "@/components/ui/GlowingLabel";
import { Input } from "@/components/ui/GlowingInput";
import { TextArea } from "@/components/ui/GlowingTextarea";

import { IoMdAddCircleOutline } from "react-icons/io";
const Page = () => {
  return (
    <div className="w-full h-screen">
      <Back className="bg-dark text-white =" />
      <div className="bg-dark text-xl text-white rounded-b-2xl w-[250px] h-[100px] p-8 absolute top-0 left-[30%] flex items-center justify-center">
        Create new model
      </div>
      <div className="flex gap-6  w-full">
        <div className="mt-12 w-[50%]">
          <div className="relative">
            <input
              className="mt-2 peer placeholder:text-transparent h-10   focus-visible:outline-none focus-visible:ring-[2px]  bg-gray-50  focus-visible:ring-neutral-400 border border-neutral-300 w-full shadow-input rounded-md px-3 py-2"
              placeholder="Model name"
            />
            <label className="peer-focus:text-gray-800 transition-all ease-in peer-focus:font-bold peer-focus:-top-6 peer-focus:left-0 peer-placeholder-shown:font-normal absolute peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:text-neutral-400 ">
              Model Name
            </label>
          </div>
          <TextArea className="mt-2" placeholder="Model description" />
        </div>
        <p className="text-sm text-green mt-12 flex gap-2 items-center h-fit">
          Add links to external references <IoMdAddCircleOutline />
        </p>
      </div>
    </div>
  );
};

export default Page;
