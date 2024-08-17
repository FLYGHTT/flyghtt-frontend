import React from "react";
import Link from "next/link";
import { BiLogOutCircle } from "react-icons/bi";

const Back = ({
  background,
  textColor,
}: {
  background: string;
  textColor?: string;
}) => {
  return (
    <Link href="/" className={`text-base absolute top-10 left-60 ${textColor}`}>
      <div
        className={` ${background} mb-1 w-fit rounded-full p-4 cursor-pointer`}
      >
        <BiLogOutCircle className="text-2xl" />
      </div>
      Go back
    </Link>
  );
};

export default Back;
