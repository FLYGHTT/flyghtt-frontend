"use client";
import React from "react";
import ThirdGrid from "./ThirdGrid";
import SecondGrid from "./SecondGrid";
import FirstGrid from "./FirstGrid";

const Home = () => {
  return (
    <div className="h-screen relative grid grid-rows-12 w-full gap-8 p-10 py-4">
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
    </div>
  );
};

export default Home;
