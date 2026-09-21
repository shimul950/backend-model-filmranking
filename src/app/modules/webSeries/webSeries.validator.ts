import { z } from "zod";

export const createWebSeriesZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  synopsis: z.string().min(5, "Synopsis must be at least 5 characters"),
  posterUrl: z.string().optional(),
  releaseYear: z.coerce.number().int().min(1900),
  language: z.string().default("English"),
  country: z.string().default("USA"),
  pricing: z.enum(["FREE", "PREMIUM"]).default("FREE"),
  status: z.enum(["RELEASED", "UPCOMING", "ARCHIVED"]).default("RELEASED"),
});

export const updateWebSeriesZodSchema = createWebSeriesZodSchema.partial();

export const createSeasonZodSchema = z.object({
  seasonNumber: z.coerce.number().int().min(1),
  title: z.string().optional(),
  synopsis: z.string().optional(),
  posterUrl: z.string().optional(),
  youtubeTrailer: z.string().url().optional().or(z.literal("")),
  releaseDate: z.string().optional(),
});

export const createEpisodeZodSchema = z.object({
  episodeNumber: z.coerce.number().int().min(1),
  title: z.string().min(1, "Episode title is required"),
  synopsis: z.string().optional(),
  duration: z.coerce.number().optional(),
  stillUrl: z.string().optional(),
  videoUrl: z.string().optional(),
});
