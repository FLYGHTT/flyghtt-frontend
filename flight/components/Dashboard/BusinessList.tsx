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
import { Skeleton } from "../ui/skeleton";
const BusinessList = () => {
  const pathname = usePathname();
  const { data, isPending, isError } = useBusinessesQuery();
  const businesses = data?.data;
  if (isPending) {
    return (
      <div className="h-[450px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="flex items-center justify-between p-4 rounded-lg  h-fit my-3 w-full"
          >
            <div className="flex items-center w-full">
              <Skeleton className="bg-green/10 w-20 h-20 rounded-md" />
              <div className="ml-8 w-full">
                <Skeleton className=" my-2 w-full h-[20px] bg-green/10" />
                <Skeleton className=" my-2 w-32 h-[20px] bg-green/10" />
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    );
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
              <div className="flex items-center ">
                {" "}
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
