import React from "react";

import { useCurrentUserQuery } from "@/lib/actions";
const Welcome = () => {
  const { data, isError, isPending } = useCurrentUserQuery();
  const user = data?.data;
  if (isPending || !user || isError) {
    return (
      <h1 className="text-2xl">
        Welcome <b>John Doe!</b>
      </h1>
    );
  }

  return (
    <h1 className="text-2xl">
      Welcome <b>{user.firstName}!</b>
    </h1>
  );
};

export default Welcome;
