import React from "react";

import AddNew from "@/components/AddNewTool";
import Models from "@/components/ModelTable/ModelTable";

import { auth } from "@/auth";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";
import Header from "@/components/HomeHeader";
import ToolAndBusinessStat from "@/components/ToolAndBusinessStat";
import QuickLinks from "@/components/QuickLinks";
const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const token = session.user.token;
  const userDetails = await getUserDetails(token);
  if (!userDetails) {
    toast.error("Couldn't fetch user");
  }
  return (
    <div className="h-full w-full">
      <Header userDetails={userDetails} />
      <div className="px-6">
        <ToolAndBusinessStat token={token} />
        <QuickLinks />
        <Models />
      </div>
    </div>
  );
};

export default Page;
