"use client";
import React, { useState } from "react";
import useVerifyForm from "@/hooks/useVerifyForm";

import { useRouter } from "next/navigation";
import { useVerifyOtpMutation } from "@/hooks/reactQueryHooks";
import { FaCog } from "react-icons/fa";
const VerifyForm = () => {
  const { code, handleChange, handleKeyDown, handlePaste, handleRef } =
    useVerifyForm();
  const [error, setError] = useState("");
  const router = useRouter();

  const { mutate, isPending } = useVerifyOtpMutation({
    onError: (error) => {
      if (error && "response" in error && error.response.data.message) {
        setError(error.response.data.message);
        return;
      }
      console.log(error);
      setError("Verification failed.");
    },
    onSuccess: (data) => {
      console.log(data, "data");
      if (data && "emailVerified" in data) {
        setTimeout(() => {
          router.push("/email-verified");
        }, 1000);
        setError("");
      } else {
        if (data && "message" in data) {
          setError(data.message);
        }
        setError("Verification failed.");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: SUBMIT AUTOMATICALLY WHEN THE USER FILLS IN ALL THE FIELDS
    if (code.includes("")) {
      setError("Please fill in all fields");
      return;
    }
    setError("");

    const data = {
      otp: Number(code.join("")),
    };
    mutate(data);
  };
  return (
    <form
      className="mt-5 bg-white w-[500px] rounded-xl min-h-[300px] flex items-center p-8 flex-col"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-semibold mb-2">Verify email to continue</h1>
      <p className=" text-center mb-3">
        {" "}
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
        disabled={isPending}
        className="bg-dark text-white py-2 mt-6 rounded-md w-[150px] disabled:cursor-not-allowed disabled:opacity-50 flex gap-3 items-center justify-center "
      >
        {isPending ? "Please Wait" : "Continue"}
        {isPending ? <FaCog className="animate-spin text-green" /> : <></>}
      </button>
      <p className="text-red-500 text-xs mt-4">{error && error}</p>
    </form>
  );
};

export default VerifyForm;
