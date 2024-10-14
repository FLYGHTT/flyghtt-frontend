import React from "react";

import Link from "next/link";
import { IconCirclePlus } from "@tabler/icons-react";
const CreateNew = ({ title, path }: { title: string; path: string }) => {
  return (
    <Link href={`${path}`} className="flex gap-2  items-center my-2 font-medium">
      {title}
      <IconCirclePlus className="w-5 h-5" />
    </Link>
  );
};

export default CreateNew;
