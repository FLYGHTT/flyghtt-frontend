import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
const Back = ({
  background,
  textColor,
}: {
  background: string;
  textColor?: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <div
      onClick={handleClick}
      className={`text-base absolute top-10 left-60 ${textColor}`}
    >
      <div
        className={` ${background} mb-1 w-fit rounded-full p-4 cursor-pointer`}
      >
        <BiLogOutCircle className="text-2xl" />
      </div>
      Go back
    </div>
  );
};

export default Back;
