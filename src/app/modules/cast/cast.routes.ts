import express from "express";
import { castController } from "./cast.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createCastZodSchema, updateCastZodSchema } from "./cast.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(createCastZodSchema),
  castController.createCast
);

router.get("/", castController.getAllCasts);

router.get("/:id", castController.getSingleCast);

router.patch(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(updateCastZodSchema),
  castController.updateCast
);

router.delete(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  castController.deleteCast
);

export const castRoutes = router;
