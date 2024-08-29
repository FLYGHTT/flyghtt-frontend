import Loader from "@/components/ui/Loader";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen items-center justify-center flex flex-col gap-6">
      <Image src="/logo.svg" alt="Logo" width={150} height={150} />
      <Loader />
    </div>
  );
};

export default Loading;
