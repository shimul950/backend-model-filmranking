import { z } from "zod";

export const createTagZodSchema = z.object({
    name: z
        .string()
        .min(1, "Tag name is required")
        .max(50, "Tag name too long"),
});

export const updateTagZodSchema = z.object({
    name: z
        .string()
        .min(1, "Tag name is required")
        .max(50)
        .optional(),
})