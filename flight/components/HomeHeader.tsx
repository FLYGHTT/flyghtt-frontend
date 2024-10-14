import { UserDetails } from "@/types";
import React from "react";
import UserImage from "./UserImage";

const Header = ({ userDetails }: { userDetails: UserDetails | null }) => {
  return (
    <div className="w-full flex justify-between items-center p-6">
      <h1 className="text-2xl">
        Welcome {userDetails && <b>{userDetails?.firstName}</b>}!
      </h1>
      <UserImage userDetails={userDetails} />
    </div>
  );
};

export default Header;
