"use client";
import * as React from "react";

import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
export interface HoverDivProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  className?: string;
}

const HoverDiv = ({ children, className }: HoverDivProps) => {
  const radius = 100; // Increase the radius to change the size of the gradient effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        borderImageSource: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              var(--emerald-300),
              transparent 80%
            )
          `,
        borderImageSlice: 1,
      }}
      className={`${className} border-2 `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
    </motion.div>
  );
};
HoverDiv.displayName = "HoverDiv";

export { HoverDiv };
