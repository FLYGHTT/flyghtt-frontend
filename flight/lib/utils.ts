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

console.log(generateRandomString(10));
