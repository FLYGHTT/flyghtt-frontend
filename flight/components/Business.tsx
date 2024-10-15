import React from "react";
import Image from "next/image";

import tool from "@/assets/icons/tool.svg";

import share from "@/assets/icons/share.svg";
import trash from "@/assets/icons/trash.svg";
import eye from "@/assets/icons/eye.svg";

import { formatDateToMonthYear, getImageSrc, getInitials } from "@/lib/utils";

import type { Business } from "@/types";

import DeleteBusiness from "./DeleteBusiness";

const Business = ({
  business,
  token,
}: {
  business: Business;
  token: string;
}) => {
  const base64Data = business.businessLogoImageData;

  const imageSrc = getImageSrc(base64Data);

  const tools = [
    {
      name: "Porter's Strategic Tool",
      modified: "24 July, 2024",
    },
    {
      name: "Porter's Strategic Tool",
      modified: "24 July, 2024",
    },
  ];
  // TODO:TOOLS DISPLAY
  return (
    <div className="h-full relative">
      <div className="p-8 px-10 pb-16">
        <div className="flex justify-between items-center ">
          <div className="flex gap-6 ">
            {base64Data ? (
              <Image
                src={imageSrc}
                width={96}
                height={96}
                alt="business logo"
                className="object-cover rounded-md"
              />
            ) : (
              <div className="bg-gray-200 flex items-center justify-center w-32 h-32 rounded-md">
                <span className="text-xl font-bold max-w-full truncate">
                  {getInitials(business.businessName)}
                </span>
              </div>
            )}{" "}
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {business.businessName}
              </h1>
              <div className="flex gap-3 mb-2">
                {/* <p className="text-xs flex gap-2 items-center">
                  <Image src={user} width={15} height={15} alt="employees" />
                  {business.numberOfEmployees}
                </p> */}
                <p className="text-xs flex gap-2 items-center">
                  <Image src={tool} width={15} height={15} alt="tools" />
                  {business.numberOfBusinessTools}
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Date Created: {formatDateToMonthYear(business.createdAt)}{" "}
              </p>
            </div>
          </div>
          <DeleteBusiness id={business.businessId} token={token} />
        </div>
        <div className=" grid grid-cols-12 ">
          <div className="col-span-9">
            <div className="mt-8">
              <h3 className="font-bold my-2">Tools ({tools.length})</h3>
              <div className="mt-6">
                {tools.map((tool, index) => (
                  <div key={index} className="flex gap-4 w-full mb-6">
                    <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex items-center justify-between w-full ">
                      <div>
                        <h2>{tool.name}</h2>
                        <p className="text-sm text-gray-500">
                          Last Modified: {tool.modified}
                        </p>
                      </div>
                      <div className="flex gap-8 items-center justify-center">
                        <div>
                          <Image src={eye} alt="view" width={20} height={20} />
                          <p className="text-sm mt-1">Preview</p>
                        </div>
                        <div>
                          <Image
                            src={trash}
                            alt="trash"
                            width={20}
                            height={20}
                          />
                          <p className="text-sm mt-1">Delete</p>
                        </div>
                        <div>
                          <Image
                            src={share}
                            alt="share"
                            width={20}
                            height={20}
                          />
                          <p className="text-sm mt-1">Share</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="mt-8">
              <h3 className="font-bold my-2">
                Collaborators ({collaborators.length})
              </h3>
              <div className="mt-6">
                {collaborators.map((collaborator, index) => (
                  <div key={index} className="flex gap-4 w-full mb-6">
                    <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center"></div>
                    <div className="flex items-center justify-between w-full ">
                      <div>
                        <div className="flex gap-3">
                          <h2>{collaborator.name}</h2>
                          <p className="text-sm text-gray-500">
                            {collaborator.role}
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">
                          {collaborator.email}
                        </p>
                      </div>
                      <div className="flex gap-8 items-center justify-center">
                        <div>
                          <Image src={edit} alt="edit" width={20} height={20} />
                          <p className="text-sm mt-1">Edit</p>
                        </div>
                        <div>
                          <Image
                            src={trash}
                            alt="trash"
                            width={20}
                            height={20}
                          />
                          <p className="text-sm mt-1">Delete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
