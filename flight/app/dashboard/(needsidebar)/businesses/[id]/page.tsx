import BusinessComponent from "@/components/Business";
import { getBusinessById } from "@/lib/actions/business.actions";
import React from "react";

import { auth } from "@/auth";
import BusinessHeader from "@/components/BusinessHeader";
import { getBusinesses } from "@/lib/actions/business.actions";

import { getUserDetails } from "@/lib/actions/user.actions";
import { Business } from "@/types";

import { notFound, redirect } from "next/navigation";
export const revalidate = 60;
export const dynamicParams = true;

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const token = session?.user.token;
  const business = await getBusinessById(id, token!);
  const userDetails = await getUserDetails(token);
  const businesses: Business[] | null = await getBusinesses(token!);

  if (business.message === "BUSINESS NOT FOUND") return notFound();
  return (
    <div>
      <BusinessHeader userDetails={userDetails} businesses={businesses} />
      <BusinessComponent business={business} token={token} />
    </div>
  );
};

export default Page;
