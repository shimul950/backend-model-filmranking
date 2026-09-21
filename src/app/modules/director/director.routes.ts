import express from "express";
import { directorController } from "./director.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDirectorZodSchema, updateDirectorZodSchema } from "./director.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(createDirectorZodSchema),
  directorController.createDirector
);

router.get("/", directorController.getAllDirectors);

router.get("/:id", directorController.getSingleDirector);

router.patch(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(updateDirectorZodSchema),
  directorController.updateDirector
);

router.delete(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  directorController.deleteDirector
);

export const directorRoutes = router;
