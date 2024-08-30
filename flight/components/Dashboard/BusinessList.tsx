"use client";
import React from "react";

import tool from "@/assets/icons/tool.svg";
import user from "@/assets/icons/user.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useBusinessesQuery } from "@/lib/actions";
import { getImageSrc } from "@/lib/utils";
import Loading from "@/app/(root)/loading";
import Error from "@/app/(root)/error";
const BusinessList = () => {
  const pathname = usePathname();
  const { data, isPending, isError } = useBusinessesQuery();
  const businesses = data?.data;
  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  if (!businesses)
    return <div className="mt-4 text-sm">No business to display</div>;
  return (
    <div className="overflow-auto  max-h-[450px] mb-24 relative">
      {businesses.map((business, index) => {
        const base64Data = business.businessLogoImageData;

        const imageSrc = getImageSrc(base64Data);
        return (
          <Link
            key={index}
            href={`${pathname}/${business.businessName}?id=${business.businessId}`}
          >
            <div className="flex items-center justify-between cursor-pointer bg-white shadow-md p-4 rounded-lg my-3 mb-5">
              <div className="flex items-center">
                {" "}
                {base64Data ? (
                  <Image
                    src={imageSrc}
                    width={60}
                    height={60}
                    alt="business logo"
                    className="object-cover rounded-md"
                  />
                ) : (
                  <div className="bg-gray-200 w-16 h-16 rounded-md"></div>
                )}
                <div className="ml-4">
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
