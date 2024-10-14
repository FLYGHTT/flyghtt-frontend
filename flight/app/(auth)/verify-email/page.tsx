import AuthHeading from "@/components/Form/AuthHeading";
import VerifyForm from "@/components/Form/VerifyForm";
import React from "react";
const Verify = () => {
  return (
    <div className="z-[10]">
      <AuthHeading text="Verify Email" />
      <VerifyForm />
    </div>
  );
};

export default Verify;
