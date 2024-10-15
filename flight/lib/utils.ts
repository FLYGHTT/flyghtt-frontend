import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageSrc = (base64Data: string) => {
  let mimeType = "image/png";
  if (base64Data) {
    if (base64Data?.startsWith("/9j/")) {
      mimeType = "image/jpeg";
    } else if (base64Data?.startsWith("iVBORw0KGgo")) {
      mimeType = "image/png";
    } else if (base64Data?.startsWith("PHN2Zy")) {
      mimeType = "image/svg+xml";
    }
  }
  return `data:${mimeType};base64,${base64Data}`;
};

export function generateRandomString(length: number) {
  return crypto.randomBytes(length).toString("hex");
}
export function getInitials(businessName: string) {
  return businessName
    .split(" ") // Split by space
    .map((word) => word[0]) // Get the first letter of each word
    .join(""); // Join the letters together
}
export function formatDateToMonthYear(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleString("default", { month: "long", year: "numeric" });
}
