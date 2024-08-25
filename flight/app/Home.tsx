"use client";
import React, { useState } from "react";

import ThirdGrid from "../components/Home/ThirdGrid";
import SecondGrid from "../components/Home/SecondGrid";
import FirstGrid from "../components/Home/FirstGrid";

import Login from "@/components/Login/Login";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="h-screen relative grid grid-rows-12 w-full gap-8 p-10 py-4">
      <FirstGrid setShowLogin={setShowLogin} />
      <SecondGrid />
      <ThirdGrid />
      <AnimatePresence mode="wait">
        {showLogin && <Login setShowLogin={setShowLogin} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
