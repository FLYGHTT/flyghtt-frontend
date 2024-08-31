import { useCurrentUserQuery } from "@/lib/actions";
const useGetCurrentUser = () => {
  const { data, isError, error, isPending } = useCurrentUserQuery();
  if (isError) {
    console.error("Error fetching current user", error);
  }
  if (data) {
    console.log(data, "user dataaaaaaaa");
  }
  console.log(data, "user data");
  return { data, isError, isPending };
};

export default useGetCurrentUser;
