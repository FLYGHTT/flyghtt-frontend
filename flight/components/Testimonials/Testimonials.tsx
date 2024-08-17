import { testimonials } from "@/lib/data";
import React from "react";
import { InfiniteMovingCards } from "../ui/MovingCards";

export function Testimonials() {
  return (
    <div className="rounded-md flex flex-col mt-12 antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
