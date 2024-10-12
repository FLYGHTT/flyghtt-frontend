import React from "react";
import message from "@/assets/icons/message.svg";
// import ellipse from "@/assets/icons/ellipse.svg";
import Image from "next/image";

import { getCurrentUser } from "@/lib/actions";
import MiniNav from "./MiniNav";
import { cookies } from "next/headers";
const Header = async () => {
  const cookieStore = cookies();
  const cookieToken = cookieStore.get("flyghtt_token")?.value || "";

  const user = await getCurrentUser(cookieToken);
  const { firstName, lastName } = user;

  return (
    <div className="w-full flex justify-between items-center p-6">
      <MiniNav />
      <div className="flex gap-14 items-center justify-end">
        <Image src={message} alt="message" width={20} height={20} />
        <div className="flex items-center gap-2 relative">
          {/* <Image src={ellipse} alt="ellipse" width={60} height={60} /> */}
          <h1>
            {firstName} {lastName}
          </h1>
        </div>
        <button className="bg-darkPurple p-3 rounded-md text-white">
          Go Premium
        </button>
      </div>
    </div>
  );
};

export default Header;
