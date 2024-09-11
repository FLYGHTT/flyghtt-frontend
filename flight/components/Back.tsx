import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
const Back = ({ className }: { className: string }) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={` ${className} mb-1 w-fit rounded-full p-4 cursor-pointer`}
      >
        <BiLogOutCircle className="text-2xl" />
      </div>
      <p>Go back</p>
    </>
  );
};

export default Back;
