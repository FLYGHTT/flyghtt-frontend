import React from "react";
import { dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import BusinessList from "@/components/Dashboard/BusinessList";
import CreateNew from "@/components/Dashboard/CreateNew";
import { getBusinesses } from "@/lib/actions";
import { queryClient } from "@/lib/http";
const Businesses = async () => {
  
  await queryClient.prefetchQuery({
    queryKey: ["businesses"],
    queryFn: getBusinesses,
  });

  return (
    <div className="p-7">
      <h1 className="text-xl font-bold">My Businesses</h1>
      <CreateNew title="New Business" path="/create-business" />
   
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BusinessList />
      </HydrationBoundary>
    </div>
  );
};

export default Businesses;
