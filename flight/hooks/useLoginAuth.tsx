import React from "react";
import http from "@/lib/http";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useLoginMutation } from "@/lib/actions";
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

  const { mutateAsync: cookieMutate, isPending: cookiePending } = useMutation({
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
      setError("Something went wrong");
    },

  });
  const {

    mutateAsync: loginMutate,
    isError,
    isPending,
  } = useLoginMutation({
    ...inputs,
    onSuccess: (res) => {
      const data = res.data;

      if (data.message) {
        setError(data.message);
        return;
      }

      return;
    },
    onError: () => {
      setError("Invalid email or password");
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
    try {
      const res = await loginMutate();
      localStorage.setItem("flyghtt_token", res.data.token);
      await cookieMutate(res.data.token);
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error) {
      setError("Invalid email or password");
    }
  };
  return {
    inputs,
    handleChange,
    handleSubmit,
    error,
    isPending: isPending || cookiePending,
    isError,
  };
};

export default useLoginAuth;
