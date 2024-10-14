"use client";
import React, { useState } from "react";
import useVerifyForm from "@/hooks/useVerifyForm";

import { useRouter } from "next/navigation";

import { FaCog } from "react-icons/fa";
import { toast } from "react-toastify";
import { verifyUser } from "@/lib/actions/user.actions";
const VerifyForm = () => {
  const { code, handleChange, handleKeyDown, handlePaste, handleRef } =
    useVerifyForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: SUBMIT AUTOMATICALLY WHEN THE USER FILLS IN ALL THE FIELDS
    if (code.includes("")) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const user = await verifyUser({ otp: Number(code.join("")) }, token!);

      setIsLoading(false);
      if (user.emailVerified) {
        router.push("/login");
      } else {
        toast.error("Verification failed");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };
  return (
    <form
      className="mt-5 bg-white w-[500px] rounded-xl min-h-[300px] flex items-center p-8 flex-col"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-semibold mb-2">Verify email to continue</h1>
      <p className=" text-center mb-3">
        Please check your email for a 6 digits code and enter the code in the
        box below
      </p>
      <div className="space-x-2 flex justify-center items-center mt-3">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            autoComplete="none"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => handleRef(el, index)}
            onPaste={handlePaste}
            className="w-10 h-10 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      {/* TODO: resend email */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-dark text-white py-2 mt-6 rounded-md w-[150px] disabled:cursor-not-allowed disabled:opacity-50 flex gap-3 items-center justify-center "
      >
        {isLoading ? "Please Wait" : "Continue"}
        {isLoading ? <FaCog className="animate-spin text-green" /> : <></>}
      </button>
    </form>
  );
};

export default VerifyForm;
