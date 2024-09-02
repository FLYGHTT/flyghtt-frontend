"use client"
import React, { useState } from "react";
import { SignUpInputs } from "@/types";
import { useMutation } from "@tanstack/react-query";
import http from "@/lib/http";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/lib/actions";
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
  });
  const [error, setError] = useState({
    ...inputs,
    remember: "",
  });

  const [unknownError, setUnknownError] = useState("");
  const { mutateAsync: cookieMutate, isPending: cookiePending } = useMutation({
    mutationKey: ["setcookie"],
    mutationFn: async (token: string) => {
      try {
        console.log(token, "tokencookie");

        const response = await http.post("http://localhost:3000/api/login");

        console.log(response.data, "Response from login API");
      } catch (error) {
        console.error("Error in login API request:", error);
        throw error;
      }
    },
    onError: () => {
      setUnknownError("Something went wrong");
    },
    onSuccess: () => {
      return;
    },
  });

  const {
    mutate: signupMutate,
    isError,
    isPending,
  } = useSignUpMutation({
    onError: () => {
      setUnknownError("Something went wrong");
    },
    onSuccess: (data) => {
      if (data && "message" in data) {
        setUnknownError(data.message);
        return;
      }
      if (data && data.token) {
        localStorage.setItem("flyghtt_token", data.token);
        cookieMutate(data.token);
      }
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
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
    cookiePending,
    isError,
    isPending,

    unknownError,
  };
};

export default useSignUpAuth;
