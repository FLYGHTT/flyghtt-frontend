import React, { useState } from "react";
import { SignUpInputs } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { postData } from "@/lib/http";
import { useRouter } from "next/navigation";
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: "",
  });
  const [empty, setEmpty] = useState("");

  const { mutate, isError, isPending } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: (data: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      role: string;
    }) =>
      postData({
        url: "https://flyghtt-backend.onrender.com/api/v1/authentication/sign-up",
        data: data,
      }),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      if (data.message) {
        setEmpty(data.message);
        return;
      }
      console.log(data);
      router.push("/verify-email");
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
      setEmpty("Please fill in all fields");
      return false;
    } else {
      setEmpty("");
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateInputs(inputs);
    if (!isValid) return;
    const data = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      email: inputs.email,
      password: inputs.password,
      role: "USER",
    };
    mutate(data);

    return;
  };
  console.log(inputs);
  console.log(error);

  return {
    inputs,
    setInputs,
    handleChange,
    error,
    validateInputs,
    handleSubmit,
    empty,
    isError,
    isPending,
  };
};

export default useSignUpAuth;
