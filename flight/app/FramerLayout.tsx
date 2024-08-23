// "use client";
// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// const FramerLayout = ({ children }) => {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       {pathname === "/about" ? (
//         <motion.div
//           key={pathname}
//           initial={{ opacity: 0, x: 400 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -400 }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         >
//           {children}
//         </motion.div>
//       ) : (
//         <p>{children}</p>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FramerLayout;
