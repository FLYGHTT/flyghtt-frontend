import React from "react";
import CreateNew from "@/components/Dashboard/CreateNew";
import { queryClient } from "@/lib/http";

import { getTools } from "@/lib/actions";
import { HydrationBoundary } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import ToolCategories from "@/components/Dashboard/ToolCategories";
const Page = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["tools"],
    queryFn: getTools,
  });
  return (
    <div className="p-7 ">
      <h1 className="text-xl font-bold">My Tools</h1>
      <CreateNew title="New Tool" path="/dashboard/create-tool" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ToolCategories />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
