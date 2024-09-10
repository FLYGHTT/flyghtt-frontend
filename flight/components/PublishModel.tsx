import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import publish from "@/assets/images/publish.png";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
const PublishModel = () => {
  return (
    <div className="max-w-[400px]">
      <div className="flex flex-col items-center gap-2">
        <Image src={publish} alt="publish" className="w-14 h-14  " />
        <p className="text-gray-600 mt-1">Publish Model</p>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">
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
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">
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
          <button>Cancel</button>
          <button className="p-2 px-4 bg-green text-white rounded-lg flex gap-2 items-center justify-center">
            Publish
          </button>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <Checkbox id="terms" checked={true} className="rounded-sm" />
          <label
            htmlFor="terms"
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
