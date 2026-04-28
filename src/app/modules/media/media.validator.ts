import { z } from "zod";

export const createMediaZodSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title is too long"),

  synopsis: z
    .string()
    .min(10, "Synopsis must be at least 10 characters"),

  releaseYear: z
    .number()
    .int("Release year must be an integer")
    .min(1888, "Invalid year") // first film history
    .max(new Date().getFullYear() + 2, "Year too far in future"),

  director: z
    .string()
    .min(1, "Director name is required"),

  cast: z
    .array(z.string().min(1))
    .min(1, "At least one cast member is required"),

  duration: z
    .number()
    .int("Duration must be an integer")
    .min(1, "Duration must be at least 1 minute"),

  language: z
    .string()
    .min(1, "Language is required"),

  country: z
    .string()
    .min(1, "Country is required"),

  pricing: z
    .enum(["FREE", "PREMIUM"])
    .optional(),

  youtubeLink: z
    .string()
    .optional(),

  // Relations
  genreIds: z
    .array(z.string("Invalid genre ID"))
    .optional(),

  platformIds: z
    .array(z.string("Invalid platform ID"))
    .optional(),
});

export const updateMediaZodSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title is too long")
    .optional(),

  synopsis: z
    .string()
    .min(10, "Synopsis must be at least 10 characters")
    .optional(),

  releaseYear: z
    .number()
    .int("Release year must be an integer")
    .min(1888, "Invalid year")
    .max(new Date().getFullYear() + 2, "Year too far in future")
    .optional(),

  director: z
    .string()
    .min(1, "Director name is required")
    .optional(),

  cast: z
    .array(z.string().min(1))
    .min(1, "At least one cast member is required")
    .optional(),

  duration: z
    .number()
    .int("Duration must be an integer")
    .min(1, "Duration must be at least 1 minute")
    .optional(),

  language: z
    .string()
    .min(1, "Language is required")
    .optional(),

  country: z
    .string()
    .min(1, "Country is required")
    .optional(),

  pricing: z
    .enum(["FREE", "PREMIUM"])
    .optional(),

  youtubeLink: z
    .string()
    .optional(),

  genreIds: z
    .array(z.string("Invalid genre ID"))
    .optional(),

  platformIds: z
    .array(z.string("Invalid platform ID"))
    .optional(),
});
