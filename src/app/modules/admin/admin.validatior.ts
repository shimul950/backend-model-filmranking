import z from "zod";

export const updateAdminValidationSchema = z.object({
  name: z.string().optional(),
  image: z.url("Invalid URL format").optional(),
  contactNumber: z.string().optional(),
})  