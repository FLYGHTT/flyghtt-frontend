import React from "react";
import { Business, UserDetails } from "@/types";
import UserImage from "./UserImage";
const BusinessHeader = ({
  userDetails,
  businesses,
}: {
  userDetails: UserDetails | null;
  businesses: Business[] | null;
}) => {
  return (
    <div className="w-full flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">
        My Businesses {businesses && `(${businesses.length})`}
      </h1>
      <UserImage userDetails={userDetails} />
    </div>
  );
};

export default BusinessHeader;
