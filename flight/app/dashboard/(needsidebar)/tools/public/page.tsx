import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { toast } from "react-toastify";

import { getUserDetails } from "@/lib/actions/user.actions";

import ToolsHeader from "@/components/ToolsHeader";
import ToolsDisplay from "@/components/ToolsDisplay";
import { getTools } from "@/lib/actions/tools.action";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const session = await auth();
  const token = session?.user.token;
  const tools = await getTools(token!);
  return tools;
}
const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const token = session.user.token;
  const tools = await getTools(token!);
  const userDetails = await getUserDetails(token);

  return (
    <div className="h-full w-full">
      <ToolsHeader userDetails={userDetails} isPublic={true} tools={tools} />

      <div className="px-6  py-4">
        <ToolsDisplay isPublic={true} tools={tools} />
      </div>
    </div>
  );
};

export default Page;
