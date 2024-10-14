import React from "react";
import SignUpForm from "@/components/Form/SignUpForm";

import AuthHeading from "@/components/Form/AuthHeading";
const SignUp = () => {
  return (
    <div className="z-[10] flex flex-col">
      <AuthHeading text="Sign Up" />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
