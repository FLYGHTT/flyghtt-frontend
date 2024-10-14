import React from "react";

import ToolCategories from "@/components/ToolCategories";
import CreateNewTool from "@/components/CreateNewTool";

import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";
import ToolsHeader from "@/components/ToolsHeader";
const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const token = session.user.token;
  const userDetails = await getUserDetails(token);
 
  return (
    <div className="h-full w-full">
      <ToolsHeader userDetails={userDetails} token={token} />

      <div className="p-6">
        <CreateNewTool />
        <ToolCategories token={token} />
      </div>
    </div>
  );
};

export default Page;
