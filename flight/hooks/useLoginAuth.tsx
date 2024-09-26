"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useLoginMutation } from "@/hooks/reactQueryHooks";
import { LoginInputs } from "@/types";

const useLoginAuth = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(baseUrl, "baseUrl");
  const {
    mutate: loginMutate,
    isError,
    isPending,
  } = useLoginMutation({
    onSuccess: async (data) => {
      if (data && "message" in data) {
        setError(data.message);
        return;
      }
      console.log(data, "data");
      if (data && data.token) {
        localStorage.setItem("flyghtt_token", data.token);

        await fetch(`${baseUrl}/api/cookies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: data.token }),
        });
        console.log("Success");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }

      return;
    },
    onMutate: () => {
      console.log("onMutate");
    },
    onError: () => {
      setError("Something went wrong, are your credentials correct?");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const validateInputs = (inputs: LoginInputs) => {
    const { email, password } = inputs;
    if (!email || !password) {
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs(inputs)) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    loginMutate(inputs);
  };
  return {
    inputs,
    handleChange,
    handleSubmit,
    error,
    isPending: isPending,

    isError,
  };
};

export default useLoginAuth;
