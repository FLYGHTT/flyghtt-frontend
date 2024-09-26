import React from "react";
import { cookies } from "next/headers";

import BusinessList from "@/components/BusinessList";
import CreateNew from "@/components/CreateNew";
import { getBusinesses } from "@/lib/actions";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const cookieStore = cookies();
  const cookieToken = cookieStore.get("flyghtt_token")?.value || "";

  const businesses = await getBusinesses(cookieToken);
  return businesses;
}
const Businesses = async () => {
  const cookieStore = cookies();
  const cookieToken = cookieStore.get("flyghtt_token")?.value || "";

  const businesses = await getBusinesses(cookieToken);

  return (
    <div className="p-7">
      <h1 className="text-xl font-bold">My Businesses</h1>
      <CreateNew title="New Business" path="/dashboard/businesses/new" />

      <BusinessList businesses={businesses} />
    </div>
  );
};

export default Businesses;
