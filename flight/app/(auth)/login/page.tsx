"use client";
import AuthHeading from "@/components/Form/AuthHeading";
import LoginForm from "@/components/Form/LoginForm";
import React from "react";
const Login = () => {
  return (
    <div className="z-10">
      <AuthHeading text="Log In" />
      <LoginForm />
    </div>
  );
};

export default Login;
