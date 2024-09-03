"use client";
import React, { ChangeEvent, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import pluscircle from "@/assets/icons/plus-circle.svg";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { BusinessSchema } from "@/lib/validations/create-business";
import Image from "next/image";
import { useCreateBusinessMutation } from "@/hooks/reactQueryHooks";
import { FaCog } from "react-icons/fa";
import { queryClient } from "@/lib/http";
import toast from "react-hot-toast";
const CreateBusinessForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  const { mutate, isPending } = useCreateBusinessMutation({
    onSuccess: (data) => {
      if ("message" in data) {
        setError(data.message);
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
      router.push("/dashboard/businesses");
      toast.success("Business created successfully", {
        id: "create-business-success",
      });
    },
    onError: (data) => {
      setError(data.response.data.message);
      toast.error(data.response.data.message, {
        id: "create-business-error",
      });
    },
  });
  const emptyFile = new File([], "");
  const form = useForm({
    resolver: zodResolver(BusinessSchema),
    defaultValues: {
      businessLogo: emptyFile,
      businessName: "",
      description: "",
    },
  });
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: File) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      setFiles(Array.from(e.target.files));
      if (!file.type.includes("image")) {
        return;
      }
      fieldChange(file);
      // fileReader.onload = async (e) => {
      //   const imageDataUrl = e.target?.result?.toString() || "";

      //   // fieldChange(imageDataUrl);
      // };
      fileReader.readAsDataURL(file);
    }
  };
  function onSubmit(values: z.infer<typeof BusinessSchema>) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-8 max-w-xl"
      >
        <FormField
          control={form.control}
          name="businessName"
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
              <FormControl className="flex-1 text-base-semibold ">
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
          name="businessLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium text-gray-700">
                Business Logo
              </FormLabel>

              <FormControl className="flex-1 text-base font-semibold ">
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Upload logo"
                  className="business-form_image-input"
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-green py-2 rounded-md hover:opacity-75 text-black flex gap-3 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 "
        >
          {isPending ? "Please Wait" : "Create Business"}
          {isPending && <FaCog className="animate-spin text-white" />}
        </button>
        {error && <p className="text-sm text-red-500 mx-auto">{error}</p>}
      </form>
    </Form>
  );
};

export default CreateBusinessForm;
