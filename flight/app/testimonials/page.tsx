"use client"
import TestimonialComponent from "@/components/Testimonials/TestimonialComponent";
import { AnimatePresence } from "framer-motion";
import React from "react";

const Testimonials = () => {
  return (
    <AnimatePresence mode="wait">
      <TestimonialComponent />
    </AnimatePresence>
  );
};

export default Testimonials;
