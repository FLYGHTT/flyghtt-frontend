import React from "react";
import tool from "@/assets/icons/tool.svg";
import user from "@/assets/icons/user.svg";
import Link from "next/link";

import Image from "next/image";

import { getImageSrc } from "@/lib/utils";
import { Business } from "@/types";
const BusinessList = ({ businesses }: { businesses: Business[] | null }) => {
  if (!businesses) return null;
  return (
    <div className="overflow-y-auto max-h-[70vh] mb-24 relative">
      {businesses.map((business, index) => {
        const base64Data = business.businessLogoImageData;
        const imageSrc = getImageSrc(base64Data);
        return (
          <Link
            key={index}
            href={`dashboard/businesses/${business.businessId}`}
          >
            <div className="flex items-center justify-between cursor-pointer bg-white shadow-md p-4 rounded-lg my-3 mb-5">
              <div className="flex items-center">
                {base64Data ? (
                  <div className="w-20 h-20 flex items-center justify-center rounded-md bg-green/20">
                    <Image
                      src={imageSrc}
                      width={60}
                      height={60}
                      alt="business logo"
                      className="object-cover rounded-md"
                    />
                  </div>
                ) : (
                  <div className="bg-green/20 w-20 h-20 rounded-md"></div>
                )}
                <div className="ml-8">
                  <h1 className="font-bold my-1">{business.businessName}</h1>
                  <div className="flex gap-3">
                    <p className="text-sm flex gap-2 items-center">
                      <Image
                        src={user}
                        width={15}
                        height={15}
                        alt="employees"
                      />
                      {business.numberOfEmployees}
                    </p>
                    <p className="text-sm flex gap-2 items-center">
                      <Image src={tool} width={15} height={15} alt="tools" />
                      {business.numberOfBusinessTools}
                    </p>
                  </div>
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
