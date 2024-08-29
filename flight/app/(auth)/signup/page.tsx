"use client";
import React from "react";
import SignUpForm from "@/components/Form/SignUpForm";

import AuthHeading from "@/components/Form/AuthHeading";
import useSignUpAuth from "@/hooks/useSignUpAuth";
import Error from "@/app/(root)/error";
const SignUp = () => {
  const { isError } = useSignUpAuth();
  if (isError) {
    return <Error />;
  }
  return (
    <div className="z-[10] flex flex-col">
      <AuthHeading text="Sign Up" />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
