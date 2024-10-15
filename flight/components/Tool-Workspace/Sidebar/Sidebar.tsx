import React from "react";
import search from "@/assets/icons/search.svg";
import eagle from "@/assets/images/logo.svg";

import Image from "next/image";
import ToolDisplay from "./ToolDisplay";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { getUserDetails } from "@/lib/actions/user.actions";
import { getTools } from "@/lib/actions/tools.action";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const session = await auth();
  const token = session?.user.token;
  const tools = await getTools(token!);
  return tools;
}
const Sidebar = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const token = session.user.token;
  const tools = await getTools(token!);
  const userDetails = await getUserDetails(token);
  return (
    <div className=" overflow-y-auto h-full  border-r-gray-600 border w-[280px]">
      <div className="flex w-full items-center p-3 justify-center gap-2">
        <p className="flex gap-2 items-center text-lg font-semibold">
          Tool Workspace
        </p>
        <Image src={eagle} alt="Flyghtt logo" className="w-12 h-12" />
      </div>
      <div className="border-t w-full p-3 border-t-gray-200">
        {" "}
        <h3 className="text-center text-sm font-medium">View Existing tools</h3>
        <div className="flex items-center gap-2 rounded-xl border border-lightGray mt-2 pl-2 w-full">
          <Image src={search} alt="search" width={20} height={20} />
          <input
            type="text"
            className=" px-3 p-2  rounded-r-xl text-sm text-black ring-0 w-full transition-all  ease-in  outline-none focus:ring-2 focus:ring-green"
            placeholder="Search..."
          />
        </div>
        <ToolDisplay tools={tools}/>
      </div>
    </div>
  );
};

export default Sidebar;
