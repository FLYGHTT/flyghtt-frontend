import React from "react";

import CreateBusinessForm from "@/components/Form/CreateBusinessForm";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";

import CreateBusinessHeader from "@/components/CreateBusinessHeader";
const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const token = session.user.token;
  const userDetails = await getUserDetails(token);
  return (
    <div className=" h-full  relative">
      <CreateBusinessHeader userDetails={userDetails} />
      <div className="px-6">
        <CreateBusinessForm token={token} />
      </div>
    </div>
  );
};

export default Page;
