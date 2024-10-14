import Business from "@/components/Business";
import { getBusinessById } from "@/lib/actions/business.actions";
import React from "react";
import { queryClient } from "@/lib/http";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
export const revalidate = 60;
export const dynamicParams = true;

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const cookieStore = cookies();
  const cookieToken = cookieStore.get("flyghtt_token")?.value || "";

  const business = await getBusinessById(id, cookieToken);
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Business business={business} />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
