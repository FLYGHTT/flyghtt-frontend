"use client";
import Error from "@/app/(root)/error";
import AuthHeading from "@/components/Form/AuthHeading";
import LoginForm from "@/components/Form/LoginForm";
import useLoginAuth from "@/hooks/useLoginAuth";
import React from "react";
const Login = () => {
  const { isError } = useLoginAuth();
  if (isError) {
    return <Error />;
  }
  return (
    <div className="z-10">
      <AuthHeading text="Log In" />
      <LoginForm />
    </div>
  );
};

export default Login;
