import { z } from "zod";

export const createGenreZodSchema = z.object({
    name: z
        .string()
        .min(1, "Genre name is required")
        .max(50, "Genre name too long"),
});

export const updateGenreZodSchema = z.object({
    name: z
        .string()
        .min(1, "Genre name is required")
        .max(50)
        .optional(),
})
