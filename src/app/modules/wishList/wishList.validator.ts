import { z } from "zod";

export const addToWishListSchema = z.object({
  mediaId: z.string(),
});
