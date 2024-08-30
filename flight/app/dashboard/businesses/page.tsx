import React from "react";

import BusinessList from "@/components/Dashboard/BusinessList";
import CreateNew from "@/components/Dashboard/CreateNew";
const Businesses = () => {
  return (
    <div className="p-7 ">
      <h1 className="text-xl font-bold">My Businesses</h1>
      <CreateNew title="New Business" path="/create-business" />
      <BusinessList />
    </div>
  );
};

export default Businesses;
