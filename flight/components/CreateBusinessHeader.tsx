import React from "react";
import { UserDetails } from "@/types";
import UserImage from "./UserImage";
const CreateBusinessHeader = ({
  userDetails,
}: {
  userDetails: UserDetails | null;
}) => {
  return (
    <div className="w-full flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">New Business</h1>
      <UserImage userDetails={userDetails} />
    </div>
  );
};

export default CreateBusinessHeader;
