"use client";
import React, { ChangeEvent, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import pluscircle from "@/assets/icons/plus-circle.svg";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { BusinessSchema } from "@/lib/validations/create-business";
import Image from "next/image";

const CreateBusinessForm = () => {
  const [files, setFiles] = useState<File[]>([]);
 
  const form = useForm({
    resolver: zodResolver(BusinessSchema),
    defaultValues: {
      logo: "",
      name: "",
      description: "",
    },
  });
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      if (!file.type.includes("image")) {
        return;
      }
      fileReader.onload = async (e) => {
        const imageDataUrl = e.target?.result?.toString() || "";

        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };
  function onSubmit(values: z.infer<typeof BusinessSchema>) {
    const blob = values.logo;
    console.log("values", values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-8 max-w-xl"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center  gap-3 w-full">
              <FormLabel className="text-base font-medium text-gray-700">
                Name of Business
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="business-form_input no-focus"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col  gap-3 w-full">
              <FormLabel className="text-base font-medium text-gray-700">
                Description
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Textarea
                  rows={10}
                  className="business-form_input no-focus"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-2 text-sm my-2">
          <Image src={pluscircle} alt="pluscircle" width={20} height={20} />
          Add collaborators
        </div>
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700">
                Business Logo
              </FormLabel>
              <div className="flex items-center gap-4">
                <div className="business-form_image-label">
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt="business_logo"
                      width={96}
                      height={96}
                      priority
                      className="rounded-md object-contain"
                    />
                  ) : (
                    <Image
                      src="/profile.svg"
                      alt="business_logo"
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  )}
                </div>
                <FormControl className="flex-1 text-base font-semibold text-gray-200">
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="Upload logo"
                    className="business-form_image-input"
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-green mb-16 text-black ">
          Create Business
        </Button>
      </form>
    </Form>
  );
};

export default CreateBusinessForm;
