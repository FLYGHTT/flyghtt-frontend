// "use client";
// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useAppContext } from "@/context/AppContext";
// import { AppContextType } from "@/types";
// const FramerLayout = ({ children }) => {
//   const { clickPosition } = useAppContext() as AppContextType;
//   console.log(clickPosition);


//   const pathname = usePathname();
//   console.log(pathname);
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={pathname}
//         initial={{
//           opacity: 0,
//           scale: 0,
//           x: clickPosition.x - window.innerWidth / 2,
//           y: clickPosition.y - window.innerHeight / 2,
//         }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//           x: 0,
//           y: 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 30,
//         }}
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default FramerLayout;
