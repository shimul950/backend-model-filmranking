// review.validation.ts
import { z } from "zod";

export const createReviewSchema = z.object({

    mediaId: z.string(),
    rating: z.number().int().min(1).max(5),
    content: z.string().min(5).max(1000),
    spoiler: z.boolean().optional(),
    tagIds: z.array(z.string()).optional()

});

export const updateReviewSchema = z.object({
    rating: z.number().int().min(1).max(5).optional(),
    content: z.string().min(5).max(1000).optional(),
    spoiler: z.boolean().optional(),
    tagIds: z.array(z.string()).optional()

});

export const updateStatusSchema = z.object({

    status: z.enum(["PENDING", "APPROVED", "REJECTED"])

});