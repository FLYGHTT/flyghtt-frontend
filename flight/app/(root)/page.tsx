import FirstGrid from "@/components/(website)/FirstGrid";
import SecondGrid from "@/components/(website)/SecondGrid";
import ThirdGrid from "@/components/(website)/ThirdGrid";
import React from "react";
const page = () => {
  return (
    <div className="h-screen relative grid grid-rows-3 w-full gap-6 p-6">
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
    </div>
  );
};

export default page;
