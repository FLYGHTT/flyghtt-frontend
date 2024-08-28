import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
export const getCurrentUser = async (token: RequestCookie) => {
  const res = await fetch(
    "https://flyghtt-backend.onrender.com/api/v1/users",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token.value)}`,
      },
    }
  );
  const data = await res.json();
  console.log(data, "user data");

  return data;
};
export default getCurrentUser;
