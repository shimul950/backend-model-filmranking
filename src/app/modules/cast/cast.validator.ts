import { z } from "zod";

export const createCastZodSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().optional(),
  imageUrl: z.string().optional(),
  birthDate: z.string().optional(),
  nationality: z.string().optional(),
});

export const updateCastZodSchema = createCastZodSchema.partial();
