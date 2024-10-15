import React from "react";

import AddNew from "@/components/AddNewTool";
import Models from "@/components/ModelTable/ModelTable";

import { auth } from "@/auth";
import { getBusinesses } from "@/lib/actions/business.actions";
import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";
import Header from "@/components/HomeHeader";
import ToolAndBusinessStat from "@/components/ToolAndBusinessStat";
import QuickLinks from "@/components/QuickLinks";
import { getTools } from "@/lib/actions/tools.action";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const session = await auth();
  const token = session?.user.token;
  const businesses = await getBusinesses(token!);
  return businesses;
}
const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const token = session.user.token;
  const businesses = await getBusinesses(token!);
  const tools = await getTools(token);
  const userDetails = await getUserDetails(token);

  return (
    <div className="h-full w-full">
      <Header userDetails={userDetails} />
      <div className="px-6">
        <ToolAndBusinessStat businesses={businesses} tools={tools} />
        <QuickLinks />
        <Models />
      </div>
    </div>
  );
};

export default Page;
