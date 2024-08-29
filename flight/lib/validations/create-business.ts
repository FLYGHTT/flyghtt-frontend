import * as z from "zod";

export const BusinessSchema = z.object({
  name: z.string().min(3).max(30),

  description: z.string().min(3).max(1600),

  logo: z.string().url().min(1),
});
