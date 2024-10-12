import React from "react";

import AddNew from "@/components/AddNewTool";
import Models from "@/components/ModelTable/ModelTable";
import { getCurrentUser } from "@/lib/actions";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = cookies();
  const cookieToken = cookieStore.get("flyghtt_token")?.value || "";

  const user = await getCurrentUser(cookieToken);

  const { firstName } = user;

  return (
    <div className="p-6">
      <h1 className="text-2xl">
        Welcome <b>{firstName}!</b>
      </h1>
      <div className="grid grid-cols-3 mt-6">
        <AddNew text="New File" />
      </div>
      <Models />
    </div>
  );
};

export default Page;
