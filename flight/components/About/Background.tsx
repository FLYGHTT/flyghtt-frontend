import React from 'react'
import { motion } from 'framer-motion'
const Background = () => {
  return (
    <div className=" absolute top-0 left-0 w-[150vw]">
    <motion.h1
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="text-lightGray absolute font-extrabold -mx-40 -mt-2 text-[400px] leading-[0.8] w-full"
    >
      About Us
    </motion.h1>
  </div>
  )
}

export default Background