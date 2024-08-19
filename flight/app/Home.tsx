"use client";
import React from "react";

import ThirdGrid from "../components/Home/ThirdGrid";
import SecondGrid from "../components/Home/SecondGrid";
import FirstGrid from "../components/Home/FirstGrid";
import { useAppContext } from "@/context/AppContext";
import { AppContextType } from "@/types";
import Login from "@/components/Login/Login";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  const { showLogin } = useAppContext() as AppContextType;
  return (
    <div className="h-screen relative grid grid-rows-12 w-full gap-8 p-10 py-4">
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
      <AnimatePresence mode="wait">{showLogin && <Login />}</AnimatePresence>
    </div>
  );
};

export default Home;
