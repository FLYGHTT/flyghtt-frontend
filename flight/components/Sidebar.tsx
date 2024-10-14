"use client";
import React from "react";
import eagle from "@/assets/images/logo.svg";
import Image from "next/image";

import { sidebartop } from "@/lib/data";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { IconLogout2 } from "@tabler/icons-react";
import { signOutUser } from "@/lib/actions/user.actions";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] p-6  bg-white h-screen ">
      <div className="flex ml-4 gap-3 items-center ">
        <Image src={eagle} alt="logo" width={25} height={25} />
        <h1 className="font-bold text-lg">Flyghtt</h1>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {sidebartop.map((item, index) => {
          const active = item.link.split("/")[2];
          const path = pathname?.split("/")[2];

          console.log(active);
          const isActive = active === path;
          const href = item.link === "/" ? `/dashboard` : item.link;
          return (
            <Link
              href={href}
              className={`flex items-center w-full p-2 rounded-lg cursor-pointer ${
                isActive ? "bg-green/30" : "hover:bg-green/10 "
              }`}
              key={index}
            >
              <Image src={item.icon} alt={item.title} width={20} height={20} />
              <p className="ml-4">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <hr className="w-full border-t border-t-gray-300 my-4" />
      <p
        className={`flex items-center w-full p-2 gap-4 rounded-lg mt-3 hover:bg-green/10 cursor-pointer`}
        onClick={async () => {
          await signOutUser();
          redirect("/login");
        }}
      >
        <IconLogout2 />
        Logout
      </p>
    </aside>
  );
};

export default Sidebar;
