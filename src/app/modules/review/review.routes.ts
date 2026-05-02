// review.route.ts
import express from "express";

import {
  createReviewSchema,
  updateReviewSchema,
  updateStatusSchema
} from "./review.validator";
import { validateRequest } from "../../middleware/validateRequest";
import { ReviewController } from "./review.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/",
  checkAuth('ADMIN','USER'),
  validateRequest(createReviewSchema),
  ReviewController.createReview
);

router.get("/", ReviewController.getAllReviews);

router.get("/:id", ReviewController.getSingleReview);

router.patch(
  "/:id",
  checkAuth('ADMIN','USER'),
  validateRequest(updateReviewSchema),
  ReviewController.updateReview
);

router.patch(
  "/:id/status",
  checkAuth('ADMIN'),
  validateRequest(updateStatusSchema),
  ReviewController.updateReviewStatus
);

router.delete("/:id",checkAuth('ADMIN') ,ReviewController.deleteReview);

export const reviewRoutes = router;