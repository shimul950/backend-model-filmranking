import { z } from "zod";

export const createCommentSchema = z.object({
  reviewId: z.string(),
  content: z.string().min(1),
  parentId: z.string().optional(),
});

export const updateCommentSchema = z.object({
  content: z.string().min(1).optional(),
});
