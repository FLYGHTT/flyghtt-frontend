import React from "react";

import Link from "next/link";

import Image from "next/image";

import { MdOutlineHandshake } from "react-icons/md";
import { getImageSrc, getInitials } from "@/lib/utils";
import { Business } from "@/types";
import { IconTool } from "@tabler/icons-react";

const BusinessList = ({ businesses }: { businesses: Business[] | null }) => {
  console.log(businesses);
  if (businesses?.length === 0 || !businesses)
    return (
      <div className="h-full flex-col gap-4 flex items-center justify-center">
        <h1 className="text-xl font-bold">No Businesses</h1>
      </div>
    );

  return (
    <div className="overflow-y-auto max-h-[70vh] mt-4 relative flex flex-col gap-2">
      {businesses.map((business, index) => {
        const base64Data = business.businessLogoImageData;
        const imageSrc = getImageSrc(base64Data);
        return (
          <Link
            key={index}
            href={`/dashboard/businesses/${business.businessId}`}
            className="flex justify-between cursor-pointer hover:border-green border border-transparent bg-white shadow-md p-4 rounded-lg "
          >
            <div className="flex">
              {base64Data ? (
                <Image
                  src={imageSrc}
                  width={80}
                  height={80}
                  alt="business logo"
                  className="object-cover rounded-md"
                />
              ) : (
                <div className="bg-green/20 w-20 h-20 rounded-md flex items-center justify-center">
                  <p className="font-bold truncate max-w-full">
                    {getInitials(business.businessName)}
                  </p>
                </div>
              )}
              <div className="ml-8">
                <h1 className="font-bold my-1 text-lg">
                  {business.businessName}
                </h1>
                <div className="flex gap-3">
                  {/* <p className="text-sm flex gap-2 items-center">
                      <MdOutlineHandshake size={16} />
                      {business.numberOfEmployees}
                    </p> */}
                  <p className="text-sm flex gap-2 items-center">
                    <IconTool className="w-4 h-4" />
                    {business.numberOfBusinessTools}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BusinessList;
