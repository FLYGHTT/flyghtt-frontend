import Business from "@/components/Business";
import { getBusinessById } from "@/lib/actions";
import React from "react";
import { queryClient } from "@/lib/http";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  await queryClient.prefetchQuery({
    queryKey: ["businesses", id],
    queryFn: () => getBusinessById(id),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Business id={id} />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
