import express from "express";
import { tagController } from "./tag.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createTagZodSchema, updateTagZodSchema } from "./tag.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/", checkAuth('ADMIN', 'SUPER_ADMIN'),
  validateRequest(createTagZodSchema),
  tagController.createTag
);

router.get("/", checkAuth('ADMIN', 'SUPER_ADMIN'), tagController.getAllTags);

router.get("/:id", checkAuth('ADMIN', 'SUPER_ADMIN'), tagController.getSingleTag);

router.patch(
  "/:id",
  checkAuth('ADMIN', 'SUPER_ADMIN'),
  validateRequest(updateTagZodSchema),
  tagController.updateTag
);

router.delete("/:id", checkAuth('ADMIN', 'SUPER_ADMIN'), tagController.deleteTag);

export const tagRoutes = router;