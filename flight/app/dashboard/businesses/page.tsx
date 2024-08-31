import React from "react";

import BusinessList from "@/components/Dashboard/BusinessList";
import CreateNewBusiness from "@/components/Dashboard/CreateNewBusiness";

const Businesses = () => {
  return (
    <div className="p-7 ">
      <h1 className="text-xl font-bold">My Businesses</h1>
      <CreateNewBusiness />

      <BusinessList />
    </div>
  );
};

export default Businesses;
