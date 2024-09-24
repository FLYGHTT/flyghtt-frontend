import * as z from "zod";

export const BusinessSchema = z.object({
  businessName: z
    .string()
    .min(3, {
      message: "Business name must be at least 3 characters",
    })
    .max(30, {
      message: "Business name must be at most 30 characters",
    }),
  description: z
    .string()
    .min(3, {
      message: "Description must be at least 3 characters",
    })
    .max(1600, {
      message: "Description must be at most 1600 characters",
    }),
  businessLogo: z.instanceof(File),
});
