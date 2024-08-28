import React, { use } from "react";
import { postData } from "@/lib/http";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
interface LoginInputs {
  email: string;
  password: string;
}
const useLoginAuth = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { mutate: cookieMutate } = useMutation({
    mutationKey: ["setcookie"],
    mutationFn: (data: { email: string; password: string }) =>
      postData({
        url: "http://localhost:3000/api/login",
        data: data,
      }),
    onError: () => {
      setError("Something went wrong");
    },
    onSuccess: (data) => {
      localStorage.setItem("flyghtt_token", data.token);

      router.push("/dashboard");
      return;
    },
  });

  const {
    mutate,
    data,
    isError,
    isPending,
    error: mutateError,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { token: string }) =>
      postData({
        url: "https://flyghtt-backend.onrender.com/api/v1/authentication/login",
        data: data,
      }),
    onError: () => {
      setError("Invalid email or password");
    },
    onSuccess: (data) => {
      if (data.message) {
        setError(data.message);
        return;
      }
      localStorage.setItem("flyghtt_token", data.token);
      if (!data.emailVerified) {
        router.push("/verify-email");
        return;
      }
      console.log(data);
      const cookieData = {
        token: data.token,
      };
      cookieMutate(cookieData);
      return;
    },
  });
  if (isPending) {
    console.log("loading");
  }
  if (isError) {
    console.log(mutateError);
    setError(mutateError.message);
  }
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs(inputs)) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    mutate(inputs);
  };
  return { inputs, handleChange, handleSubmit, error };
};

export default useLoginAuth;
