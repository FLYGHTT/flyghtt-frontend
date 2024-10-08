"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import tool from "@/assets/icons/tool.svg";
import user from "@/assets/icons/user.svg";
import share from "@/assets/icons/share.svg";
import trash from "@/assets/icons/trash.svg";
import eye from "@/assets/icons/eye.svg";
import edit from "@/assets/icons/edit.svg";
import { BiLogOutCircle } from "react-icons/bi";
import {
  useBusinessesQuery,
  useDeleteBusinessMutation,
  useGetBusinessByIdQuery,
} from "@/hooks/reactQueryHooks";
import { getImageSrc } from "@/lib/utils";
import Loading from "@/app/(root)/loading";
import Error from "@/app/(root)/error";
import { queryClient } from "@/lib/http";
import toast from "react-hot-toast";
import type { Business } from "@/types";
const Business = ({ id }: { id: string }) => {
  const router = useRouter();

  const { data: businessData, isPending, isError } = useGetBusinessByIdQuery(id);
  const { mutate } = useDeleteBusinessMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });

      router.push("/dashboard/businesses");
      toast.success("Business deleted successfully", {
        id: "delete-business-success",
      });
    },
  });

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }

  if (!businessData) {
    return <div>Business not found</div>;
  }
  const handleDelete = () => {
    mutate(businessData.businessId);
  };

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
  const collaborators = [
    {
      name: "John Doe",
      email: "taiwoonileowo17@gmail.com",
      role: "Administrator",
    },
    {
      name: "John Doe",
      email: "taiwoonileowo17@gmail.com",
      role: "Administrator",
    },
  ];
  const base64Data = businessData.businessLogoImageData;

  const imageSrc = getImageSrc(base64Data);
  return (
    <div className="overflow-y-auto max-h-[85vh] relative">
      <div
        onClick={() => router.back()}
        className={`  mb-1 w-fit rounded-full p-2 bg-light cursor-pointer`}
      >
        <BiLogOutCircle size={20} />
      </div>
      <div className="p-8 px-10 pb-16">
        <div className="flex justify-between items-center ">
          <div className="flex gap-6  items-center">
            {base64Data ? (
              <Image
                src={imageSrc}
                width={96}
                height={96}
                alt="business logo"
                className="object-cover rounded-md"
              />
            ) : (
              <div className="bg-gray-200 w-32 h-32 rounded-md"></div>
            )}{" "}
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {businessData.businessName}
              </h1>
              <div className="flex gap-3 mb-2">
                <p className="text-xs flex gap-2 items-center">
                  <Image src={user} width={15} height={15} alt="employees" />
                  {businessData.numberOfEmployees}
                </p>
                <p className="text-xs flex gap-2 items-center">
                  <Image src={tool} width={15} height={15} alt="tools" />
                  {businessData.numberOfBusinessTools}
                </p>
              </div>
              <p className="text-sm text-gray-500">Date Created: July 2024 </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="bg-gray-200 p-2 w-fit rounded-md mb-2 cursor-pointer"
              onClick={handleDelete}
            >
              <Image src={trash} alt="delete" width={20} height={20} />
            </div>
            <button className="bg-green w-[200px] rounded-md py-2">
              Open in Editor
            </button>
          </div>
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
            <div className="mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
