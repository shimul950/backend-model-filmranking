import { z } from "zod";

export const createBannerZodSchema = z.object({
  body: z.object({
    title: z.string({
      error: "Title is required",
    }).min(1, "Title cannot be empty"),
    synopsis: z.string().optional(),
    imageUrl: z.string({
      error: "Banner image URL is required",
    }).url("Invalid banner image URL"),
    posterUrl: z.string().url("Invalid poster URL").optional().or(z.literal("")),
    rating: z.number().min(0).max(5).optional(),
    releaseYear: z.number().int().min(1888).max(2100).optional(),
    duration: z.number().int().min(0).optional(),
    genre: z.string().optional(),
    pricing: z.enum(["FREE", "PREMIUM"]).optional().default("FREE"),
    youtubeLink: z.string().url("Invalid YouTube URL").optional().or(z.literal("")),
    director: z.string().optional(),
    linkUrl: z.string().optional(),
    isActive: z.boolean().optional().default(true),
    order: z.number().int().optional().default(0),
  }),
});

export const updateBannerZodSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    synopsis: z.string().optional(),
    imageUrl: z.string().url("Invalid banner image URL").optional(),
    posterUrl: z.string().url("Invalid poster URL").optional().or(z.literal("")),
    rating: z.number().min(0).max(5).optional(),
    releaseYear: z.number().int().min(1888).max(2100).optional(),
    duration: z.number().int().min(0).optional(),
    genre: z.string().optional(),
    pricing: z.enum(["FREE", "PREMIUM"]).optional(),
    youtubeLink: z.string().url("Invalid YouTube URL").optional().or(z.literal("")),
    director: z.string().optional(),
    linkUrl: z.string().optional(),
    isActive: z.boolean().optional(),
    order: z.number().int().optional(),
  }),
});
