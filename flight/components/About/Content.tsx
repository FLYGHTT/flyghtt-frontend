import React, { useState } from "react";
import back from "@/assets/icons/back.svg";
import Image from "next/image";
import Link from "next/link";
import instagram from "@/assets/icons/instagram.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import { motion } from "framer-motion";
const Content = () => {
  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: "https://randomuser.me/api/port",
    },
    {
      name: "Jane Doe",
      role: "COO",
      image: "https://randomuser.me/api/port",
    },
    {
      name: "John Doe",
      role: "CTO",
      image: "https://randomuser.me/api/port",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div className="max-w-4xl z-[100]">
      <Link href="/">
        <div className="bg-dark mb-1 w-fit rounded-full p-4 cursor-pointer">
          <Image src={back} alt="back" />
        </div>
        Go back
      </Link>
      <motion.div
        initial={{
          opacity: 0,
          x: 400,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div>
          <h1 className="mt-20 text-5xl">Who are we?</h1>
          <p className="my-8 text-white/80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui totam
            natus earum pariatur, inventore quibusdam illum, suscipit cum quod
            harum maxime debitis odit. Quibusdam fugiat repellendus facere,
            perspiciatis eos iusto.
          </p>
          <p className=" text-white/80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui totam
            natus earum pariatur, inventore quibusdam illum, suscipit cum quod
            harum maxime debitis odit. Quibusdam fugiat repellendus facere,
            perspiciatis eos iusto.
          </p>
        </div>
        <div className="mt-20 ">
          <h1 className="text-5xl">Meet the team!</h1>
          <div className="grid grid-cols-3 gap-24 mt-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex   gap-6 col-span-1 items-center my-4"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="bg-lightGray mb-3 w-[200px] h-[200px] rounded-full"
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(-1);
                    }}
                  />
                  <h2 className="text-xl">{member.name}</h2>
                  <p className="text-sm mt-1">{member.role}</p>
                </div>
                <div className="h-fit w-[100px] flex items-center flex-col gap-12  -mt-12">
                  {hoveredIndex === index && (
                    <>
                      <motion.div
                        className={`bg-white rounded-md p-2 w-[55px] h-[55px] `}
                        initial={{
                          opacity: 0,
                          x: -150,
                          y: 50,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <Image
                          src={instagram}
                          alt="instagram"
                          width={50}
                          height={50}
                        />
                      </motion.div>
                      <motion.div
                        initial={{
                          x: -150,
                          y: -50,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className={`bg-white rounded-md w-[55px] h-[55px] p-2 `}
                      >
                        <Image
                          src={linkedin}
                          alt="linkedin"
                          width={50}
                          height={50}
                        />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
