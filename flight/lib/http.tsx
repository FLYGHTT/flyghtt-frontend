import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export const postData = async ({
  url,
  data,
  token,
}: {
  url: string;
  data: any;
  token?: string;
}) => {
  console.log(data);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
export const fetchData = async ({
  url,
  token,
}: {
  url: string;
  token: string;
}) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
