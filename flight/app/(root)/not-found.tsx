"use client";
import Background from "@/components/Background";
import Link from "next/link";
import React from "react";
const NotFound = () => {
  return (
    <div className=" justify-center w-full overflow-hidden  py-10 flex flex-col items-center  h-full">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p className="my-4">
        Oops...this page does not exist or may have been moved
      </p>
      <Link
        href="/"
        className="border-b-4 z-[100] cursor-pointer border-b-green"
      >
        Back to home
      </Link>
      <Background
        text="404"
        className="text-[700px] -mt-[200px] text-[#343434]/10"
      />
      <div className=" h-[80px] bg-gradient1 gradient w-full fixed bottom-0" />
    </div>
  );
};

export default NotFound;
