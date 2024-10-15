"use client";
import React from "react";

import { IconTrash } from "@tabler/icons-react";
import { deleteBusiness } from "@/lib/actions/business.actions";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
const DeleteBusiness = ({ id, token }: { id: string; token: string }) => {
  const handleDelete = async () => {
    await deleteBusiness(id, token);
    toast.success("Business deleted successfully");
    redirect("/dashboard/businesses");
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className="bg-green rounded-md py-2 px-6 flex items-center gap-2"
        onClick={handleDelete}
      >
        <IconTrash className="w-5 h-5" /> Delete Business
      </button>
    </div>
  );
};

export default DeleteBusiness;
