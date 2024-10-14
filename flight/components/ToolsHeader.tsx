"use client";
import { useGetToolsQuery } from "@/hooks/reactQueryHooks";
import { UserDetails } from "@/types";
import React from "react";
import UserImage from "./UserImage";

const ToolsHeader = ({
  userDetails,
  token,
}: {
  userDetails: UserDetails | null;
  token: string;
}) => {
  const { data: tools } = useGetToolsQuery(token);
  return (
    <div className="w-full flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">
        My Tools {tools && `(${tools.length})`}
      </h1>
      <UserImage userDetails={userDetails} />
    </div>
  );
};

export default ToolsHeader;
