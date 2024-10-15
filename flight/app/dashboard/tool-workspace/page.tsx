import TabList from "@/components/Tool-Workspace/TabList";
import React from "react";
import { auth } from "@/auth";

import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <TabList />
    </div>
  );
};

export default Page;
