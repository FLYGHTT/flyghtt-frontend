"use client";
import React, { useState, useRef } from "react";
import message from "@/assets/icons/message.svg";
// import ellipse from "@/assets/icons/ellipse.svg";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { useAppContext } from "@/context";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import http from "@/lib/http";

import Error from "@/app/(root)/error";
import { useCurrentUserQuery } from "@/lib/actions";
const Header = () => {
  const router = useRouter();
  const [clickedProfile, setClickedProfile] = useState(false);

  const { activePage, setActivePage } = useAppContext();
  const ref = useRef(null);

  const { mutate: cookieMutate } = useMutation({
    mutationKey: ["setcookie"],
    mutationFn: (token: string) =>
      http.post("http://localhost:3000/api/logout", token),

    onError: () => {
      return <Error />;
    },
    onSuccess: () => {
      router.push("/login");
      return;
    },
  });
  useOutsideClick(ref, () => {
    setClickedProfile(false);
  });

  const goHome = () => {
    setActivePage("home");
  };

  const goExplore = () => {
    setActivePage("explore community");
  };

  const handleClickProfile = () => {
    setClickedProfile(!clickedProfile);
  };
  const handleLogout = () => {
    localStorage.removeItem("flyghtt_token");
    const token = localStorage.getItem("flyghtt_token");
    cookieMutate(token || "");
  };

  const { data, isError, isPending } = useCurrentUserQuery();
  const user = data?.data;
  if (isPending || !user) {
    return null;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full flex justify-between items-center p-6">
      <div className="flex gap-6">
        <h3
          className={`font-semibold ${
            activePage === "home" ? "border-b-4 border-b-black" : ""
          } cursor-pointer`}
          onClick={goHome}
        >
          Me
        </h3>
        <h3
          className={`font-semibold ${
            activePage === "explore community"
              ? "border-b-4 border-b-black"
              : ""
          } cursor-pointer`}
          onClick={goExplore}
        >
          Explore
        </h3>
      </div>
      <div className="flex gap-14 items-center justify-end">
        <Image src={message} alt="message" width={20} height={20} />
        <div className="flex items-center gap-2 relative">
          {/* <Image src={ellipse} alt="ellipse" width={60} height={60} /> */}
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <FaAngleDown
            className="cursor-pointer select-none"
            onClick={handleClickProfile}
          />
          {clickedProfile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 rounded-2xl absolute right-0 -bottom-24 py-2"
              ref={ref}
            >
              <p className="hover:bg-green/20 p-2 px-4 cursor-pointer">
                My Profile
              </p>
              <p
                className="hover:bg-green/20 p-2 px-4 cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </p>
            </motion.div>
          )}
        </div>
        <button className="bg-darkPurple p-3 rounded-md text-white">
          Go Premium
        </button>
      </div>
    </div>
  );
};

export default Header;
