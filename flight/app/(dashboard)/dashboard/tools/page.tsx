import React from "react";
import CreateNew from "@/components/Dashboard/CreateNew";
import Header from "@/components/Header";
const Page = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="p-7 ">
        <h1 className="text-xl font-bold">My Tools</h1>
        <CreateNew title="New Tool" path="/dashboard/tools/new" />
        <div className="w-[50%] flex flex-col gap-3">
          <div className="flex items-center p-4 my-2  justify-between shadow-md">
            <h3>Private tools (4)</h3>
            <p className="text-green text-sm cursor-pointer">See all</p>
          </div>
          <div className="flex items-center p-4 my-2  justify-between shadow-md ">
            <h3>Published tools (4)</h3>
            <p className="text-green text-sm cursor-pointer">See all</p>
          </div>
          <div className="flex items-center p-4 my-2  justify-between shadow-md ">
            <h3>Liked tools (4)</h3>
            <p className="text-green text-sm cursor-pointer">See all</p>
          </div>
          <div className="flex items-center  p-4 my-2 justify-between shadow-md">
            <h3> Drafts (4)</h3>
            <p className="text-green text-sm cursor-pointer">See all</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
