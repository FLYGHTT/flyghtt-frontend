"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BeatLoader } from "react-spinners";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

import { Tab } from "@/types";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { useSubmitModelMutation } from "@/hooks/reactQueryHooks";
import { useModal } from "../Modal";
import toast from "react-hot-toast";
import check from "@/assets/icons/check.png";
import done from "@/assets/icons/done.gif";
import { useRouter } from "next/navigation";
import { queryClient } from "@/lib/http";
import useTab from "@/hooks/useTab";
import DiscardChanges from "./DiscardChanges";
import errorIcon from "@/assets/icons/error.png";
import { useAppContext } from "@/context";
const PublishModel = ({ tab }: { tab: Tab }) => {
  const { closeModal, openModal } = useModal();
  const { setTabs, tabs } = useAppContext();
  const { handleTabClose } = useTab();
  const { mutateAsync, isPending, isSuccess, isError } = useSubmitModelMutation(
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["tools"],
        });
        console.log("Published");
        handleTabClose(tab.id);
      },
    }
  );
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
    const submittedTool = {
      toolName: tab.tabTool.name,
      toolDescription: tab.tabTool.description,
      link: tab.tabTool.link,
      commentable: additionalFields.commentable,
      columns: tab.tabTool.columns,
      public: additionalFields.visibility === "public",
    };
    toast.promise(
      mutateAsync(submittedTool),
      {
        loading: "Publishing model...",
        success: "Model published successfully!",
        error: (err) => `Error: ${err.response.data.message}`,
      },
      {
        success: {
          duration: 5000,
          icon: "🔥",
        },
      }
    );
  };
  const handleDiscardTabs = () => {
    setTabs([]);
    localStorage.removeItem("flyghtt-tabs");
    localStorage.removeItem("tab-id");
    router.push("/dashboard/tools");
  };
  const handleGoToTools = () => {
    closeModal();
    if (tabs.length > 0) {
      openModal(
        <DiscardChanges
          tabId={tab.id}
          discardFunction={handleDiscardTabs}
          message="You have active tabs"
        />
      );
      return;
    }
    handleDiscardTabs();
  };
  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Image src={errorIcon} alt="Error" width={80} height={80} />
        <p className=" mt-2 font-semibold text-lg">An error occured</p>
        <div className="flex gap-6 items-center mt-4">
          <button
            className="disabled:cursor-not-allowed text-gray-700"
            onClick={closeModal}
          >
            Continue to editor
          </button>

          <button
            onClick={submitModel}
            className="p-2 px-4 bg-green text-white disabled:cursor-not-allowed  disabled:bg-green/70 rounded-lg flex gap-2 items-center justify-center"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-[400px]">
      <div className="flex flex-col items-center gap-2">
        {isSuccess ? (
          <>
            <img src={done.src} alt="Published" width={80} height={80} />
            <p className=" mt-2 font-semibold text-lg">Model Published</p>
            <div className="flex gap-6 items-center mt-4">
              <button
                className="disabled:cursor-not-allowed text-gray-700"
                onClick={closeModal}
              >
                Continue to editor
              </button>

              <button
                onClick={handleGoToTools}
                className="p-2 px-4 bg-green text-white disabled:cursor-not-allowed  disabled:bg-green/70 rounded-lg flex gap-2 items-center justify-center"
              >
                Go to tools
              </button>
            </div>
          </>
        ) : (
          <>
            {isPending ? (
              <BeatLoader color="green" />
            ) : (
              <Image src={check} alt="publish" className="w-14 h-14  " />
            )}
            <p className=" mt-2 font-semibold text-lg">
              {isPending ? "Publishing Model" : "Publish Model"}
            </p>
            <RadioGroup
              value={additionalFields.visibility}
              onValueChange={handleChange}
              disabled={isPending}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public">
                  <div>
                    <h1 className="text-sm">Public</h1>
                    <p className="text-gray-400 text-xs">
                      Your tool is made public for anyone to use for their
                      personal use
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
              <button
                onClick={closeModal}
                disabled={isPending}
                className="disabled:cursor-not-allowed text-gray-700"
              >
                Cancel
              </button>
              <button
                className="p-2 px-4 bg-green text-white disabled:cursor-not-allowed  disabled:bg-green/70 rounded-lg flex gap-2 items-center justify-center"
                onClick={submitModel}
                disabled={isPending}
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
                disabled={isPending}
              />
              <label
                htmlFor="commentable"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Allow Comments
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PublishModel;
