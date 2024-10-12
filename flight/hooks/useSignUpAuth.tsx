"use client";
import React, { useState } from "react";
import { SignUpInputs } from "@/types";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/hooks/reactQueryHooks";

const useSignUpAuth = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState<SignUpInputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
    newsletter: false,
    role: "USER",
  });
  const [error, setError] = useState({
    ...inputs,
    remember: "",
  });

  const [unknownError, setUnknownError] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    mutate: signupMutate,
    isError,
    isPending,
  } = useSignUpMutation({
    onError: (error) => {
      if (error && "response" in error && error.response.data.message) {
        console.log("error", error);
        setUnknownError(error.response.data.message);
        return;
      }
      setUnknownError("Something went wrong");
    },
    onSuccess: async (data) => {
      if (data && "message" in data) {
        setUnknownError(data.message);
        return;
      }
      if (data && data.token) {
        console.log("data", data);
        localStorage.setItem("flyghtt_token", data.token);
        await fetch(`${baseUrl}/api/cookies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: data.token }),
        });
        if (data.emailVerified) {
          console.log("verified");
          router.push("/dashboard");
        } else {
          setTimeout(() => {
            router.push("/verify-email");
          }, 1000);
        }
        return;
      }
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      remember: e.target.checked,
      // newsletter: e.target.checked,
    }));
  };

  const validateInputs = (inputs: SignUpInputs) => {
    const { firstName, lastName, email, password, confirmPassword, remember } =
      inputs;
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !remember
    ) {
      setUnknownError("Please fill in all fields");
      return false;
    } else {
      setUnknownError("");
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError((prev) => ({
        ...prev,
        email: "Invalid email",
      }));
      return false;
    } else {
      setError((prev) => ({
        ...prev,
        email: "",
      }));
    }

    if (password.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      return false;
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{8,16}$/;
    if (!passwordRegex.test(password)) {
      setError((prev) => ({
        ...prev,
        password:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and between 8-16 characters",
      }));
      console.log("wrong password", password);
      return false;
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }

    if (confirmPassword !== password) {
      setError((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return false;
    } else {
      setError((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateInputs(inputs);
    if (!isValid) return;
    signupMutate(inputs);
  };

  return {
    inputs,
    setInputs,
    handleChange,
    error,
    validateInputs,
    handleSubmit,

    isError,
    isPending,

    unknownError,
  };
};

export default useSignUpAuth;
