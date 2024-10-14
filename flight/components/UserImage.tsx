import React from "react";
import { UserDetails } from "@/types";
const UserImage = ({ userDetails }: { userDetails: UserDetails | null }) => {
  return (
    <div className="bg-darkPurple text-white cursor-pointer w-10 h-10 rounded-full flex items-center justify-center">
      {userDetails?.firstName.charAt(0).toUpperCase()}
    </div>
  );
};

export default UserImage;
