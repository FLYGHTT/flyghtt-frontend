"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import { FaAngleDown } from "react-icons/fa";
const ProfileLogout = () => {
  const ref = useRef(null);

  const [clickedProfile, setClickedProfile] = useState(false);
  useOutsideClick(ref, () => {
    setClickedProfile(false);
  });

  const handleClickProfile = () => {
    setClickedProfile(!clickedProfile);
  };

  const handleLogout = () => {};

  return (
    <>
      <FaAngleDown
        className="cursor-pointer select-none "
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
    </>
  );
};

export default ProfileLogout;
