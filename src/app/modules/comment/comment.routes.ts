import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { commentController } from "./comment.controller";
import { createCommentSchema, updateCommentSchema } from "./comment.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/",
  checkAuth("ADMIN", "USER"),
  validateRequest(createCommentSchema),
  commentController.createComment
);

router.get("/review/:reviewId", commentController.getCommentsByReview);
router.get("/:id", commentController.getSingleComment);

router.patch(
  "/:id",
  checkAuth("ADMIN", "USER"),
  validateRequest(updateCommentSchema),
  commentController.updateComment
);

router.delete(
  "/:id",
  checkAuth("ADMIN", "USER"),
  commentController.deleteComment
);

export const commentRoutes = router;
