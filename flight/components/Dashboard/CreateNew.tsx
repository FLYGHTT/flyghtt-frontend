import React from "react";
import pluscircle from "@/assets/icons/plus-circle.svg";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
const CreateNew = ({ title, path }: { title: string; path: string }) => {
  return (
    <Link href={`${path}`} className="flex gap-2 text-sm my-3">
      <Image src={pluscircle} alt="pluscircle" width={20} height={20} />
      {title}
    </Link>
  );
};

export default CreateNew;
