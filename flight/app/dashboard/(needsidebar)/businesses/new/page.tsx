import React from "react";

import CreateBusinessForm from "@/components/Form/CreateBusinessForm";
import GoBack from "@/components/Dashboard/GoBack";
const Page = () => {
  return (
    <div className=" max-h-[80vh] overflow-auto  relative">
      <GoBack />
      <div className="p-7">
        <h1 className="text-xl font-bold">My Businesses</h1>
        <CreateBusinessForm />
      </div>
    </div>
  );
};

export default Page;
