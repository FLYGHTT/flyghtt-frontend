import React from "react";

import AddNew from "@/components/AddNewTool";
import Models from "@/components/ModelTable/ModelTable";

import { auth } from "@/auth";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";
const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  console.log(session, "session");
  const token = session.user.token;
  const userDetails = await getUserDetails(token);
  if (!userDetails) {
    toast.error("Couldn't fetch user");
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl">
        Welcome <b>{userDetails?.firstName}!</b>
      </h1>
      <div className="grid grid-cols-3 mt-6">
        <AddNew text="New File" />
      </div>
      <Models />
    </div>
  );
};

export default Page;
