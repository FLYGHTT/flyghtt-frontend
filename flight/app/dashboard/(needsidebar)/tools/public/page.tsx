import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { toast } from "react-toastify";

import { getUserDetails } from "@/lib/actions/user.actions";

import ToolsHeader from "@/components/ToolsHeader";
import ToolsDisplay from "@/components/ToolsDisplay";
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
      <ToolsHeader userDetails={userDetails} token={token} isPublic={true} />

      <div className="px-6  py-4">
        <ToolsDisplay token={token} isPublic={true} />
      </div>
    </div>
  );
};

export default Page;
