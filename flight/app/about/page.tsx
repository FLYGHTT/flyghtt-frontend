"use client";
import AboutComponent from "@/components/About/AboutComponent";
import React from "react";
import { AnimatePresence } from "framer-motion";
const About = () => {
  return (
    <AnimatePresence  mode="wait">
      <AboutComponent />
    </AnimatePresence>
  );
};

export default About;
