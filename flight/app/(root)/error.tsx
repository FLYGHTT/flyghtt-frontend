"use client";
import Image from "next/image";
import React from "react";
const Error = () => {
  return (
    <div className="flex items-center justify-center  flex-col h-screen w-full bg-white absolute">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold">Something wen&apos;t wrong...</h1>
        <p className="my-4">Our devs are on it, please try again later.</p>
        <Image src="/working.png" alt="working" width={500} height={500} />
      </div>
      <div className=" h-[80px] bg-gradient1 gradient w-full fixed bottom-0" />
    </div>
  );
};

export default Error;
