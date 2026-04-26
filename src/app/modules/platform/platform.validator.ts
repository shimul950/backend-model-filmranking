import { z } from "zod";

export const createPlatformSchema = z.object({
    name: z
      .string()
      .min(1, "Platform name is required")
      .max(50, "Platform name too long"),
  })


export const updatePlatformSchema = z.object({

    name: z
      .string()
      .min(1, "Platform name cannot be empty")
      .max(50)
      .optional(),
  })


export const platformValidation = {
  createPlatformSchema,
  updatePlatformSchema,
};