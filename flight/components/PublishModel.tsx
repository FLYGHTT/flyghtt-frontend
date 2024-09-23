"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import publish from "@/assets/images/publish.png";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppContext } from "@/context";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { useSubmitModelMutation } from "@/hooks/reactQueryHooks";
import { useModal } from "./Modal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const PublishModel = () => {
  const { modelInputs, columns, modelSnapshot } = useAppContext();
  const { closeModal } = useModal();
  const { mutateAsync, isPending } = useSubmitModelMutation({
    onSuccess: () => {
      console.log("Model published successfully");
    },
  });
  if (isPending) {
    console.log("Model is being published");
  }
  const [additionalFields, setAdditionalFields] = useState({
    visibility: "public",
    commentable: true,
  });

  const handleChange = (value: string) => {
    setAdditionalFields((prevFields) => ({
      ...prevFields,
      visibility: value,
    }));
  };

  const handleCheckboxChange = (checked: CheckedState) => {
    setAdditionalFields((prevFields) => ({
      ...prevFields,
      commentable: Boolean(checked),
    }));
  };
  const router = useRouter();
  const submitModel = async () => {
    const newModel = {
      name: modelInputs.modelName,
      description: modelInputs.modelDescription,
      link: modelInputs.linkReference,
      commentable: additionalFields.commentable,
      columns: columns.map((column) => {
        return {
          name: column.heading,
          description: column.description,
          factors: column.items.map((item) => item.title),
        };
      }),
      public: additionalFields.visibility === "public",
    };
    toast.promise(
      mutateAsync(newModel),
      {
        loading: "Publishing model...",
        success: "Model published successfully!",
        error: (err) => `Failed to publish model: ${err.message}`,
      },
      {
        success: {
          duration: 5000,
          icon: "🔥",
        },
      }
    );

    closeModal();
    await mutateAsync(newModel);
    router.push("/dashboard/tools");
  };
  return (
    <div className="max-w-[400px]">
      <div className="flex flex-col items-center gap-2">
        <Image src={publish} alt="publish" className="w-14 h-14  " />

        <p className=" mt-1">Publish Model</p>

        <RadioGroup
          value={additionalFields.visibility}
          onValueChange={handleChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="public" id="public" />
            <Label htmlFor="public">
              <div>
                <h1 className="text-sm">Public</h1>
                <p className="text-gray-400 text-xs">
                  Your tool is made public for anyone to use for their personal
                  use
                </p>
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="private" />
            <Label htmlFor="private">
              <div>
                <h1 className="text-sm">Private</h1>
                <p className="text-gray-400 text-xs break-words w-full">
                  Only you and others you allow can view or use this tool
                </p>
              </div>
            </Label>
          </div>
        </RadioGroup>

        <div className="flex gap-6 items-center mt-4">
          <button onClick={closeModal}>Cancel</button>
          <button
            className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center"
            onClick={submitModel}
          >
            Publish
          </button>
        </div>

        <div className="flex gap-2 items-center mt-3">
          <Checkbox
            id="commentable"
            checked={additionalFields.commentable}
            className="rounded-sm"
            onCheckedChange={handleCheckboxChange}
          />
          <label
            htmlFor="commentable"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Allow Comments
          </label>
        </div>
      </div>
    </div>
  );
};

export default PublishModel;
