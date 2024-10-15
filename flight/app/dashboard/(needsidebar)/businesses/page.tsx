import React from "react";

import BusinessList from "@/components/BusinessList";
import CreateNew from "@/components/CreateNew";
import { getBusinesses } from "@/lib/actions/business.actions";
import BusinessHeader from "@/components/BusinessHeader";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";
import { Business } from "@/types";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const session = await auth();
  const token = session?.user.token;
  const businesses = await getBusinesses(token!);
  return businesses;
}
const Businesses = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const token = session.user.token;
  const userDetails = await getUserDetails(token);
  const businesses: Business[] | null = await getBusinesses(token);

  return (
    <>
      <BusinessHeader userDetails={userDetails} businesses={businesses} />
      <div className="px-6">
        <CreateNew title="New Business" path="/dashboard/businesses/new" />
        <BusinessList businesses={businesses} />
      </div>
    </>
  );
};

export default Businesses;
