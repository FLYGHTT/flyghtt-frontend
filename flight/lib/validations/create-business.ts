import * as z from "zod";

export const BusinessSchema = z.object({
  businessName: z.string().min(3).max(30),
  description: z.string().min(3).max(1600),
  businessLogo: z.instanceof(File),
});
