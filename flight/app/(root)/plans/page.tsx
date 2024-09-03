"use client"
import PlanComponent from "@/components/Plans/PlanComponent";
import { AnimatePresence } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <AnimatePresence mode="wait">
      <PlanComponent />
    </AnimatePresence>
   
  );
};

export default page;
