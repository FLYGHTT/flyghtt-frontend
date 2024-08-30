import React from "react";
import { useCurrentUserQuery } from "@/lib/actions";
const Username = () => {
  const { data, isError, isPending } = useCurrentUserQuery();
  const user = data?.data;
  if (isPending || !user || isError) {
    return <h1>John Doe</h1>;
  }
  return (
    <h1>
      {user.firstName} {user.lastName}
    </h1>
  );
};

export default Username;
