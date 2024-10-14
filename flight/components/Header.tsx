import { UserDetails } from "@/types";
import React from "react";

const Header = ({ userDetails }: { userDetails: UserDetails | null }) => {
  return (
    <div className="w-full flex justify-between items-center p-6">
      <h1 className="text-2xl">
        Welcome {userDetails && <b>{userDetails?.firstName}</b>}!
      </h1>
      <div className="bg-darkPurple text-white cursor-pointer w-10 h-10 rounded-full flex items-center justify-center">
        {userDetails?.firstName.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

export default Header;
