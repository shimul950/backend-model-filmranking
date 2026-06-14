import express from "express";
import { platformController } from "./platform.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { platformValidation } from "./platform.validator";
import { checkAuth } from "../../middleware/checkAuth";


// assume you have a validateRequest middleware


const router = express.Router();

router.post(
  "/",
  checkAuth('ADMIN', 'SUPER_ADMIN'),
  validateRequest(platformValidation.createPlatformSchema),
  platformController.createPlatform
);

router.get("/", checkAuth('ADMIN', 'SUPER_ADMIN'), platformController.getAllPlatforms);

router.get("/:id", checkAuth('ADMIN', 'SUPER_ADMIN'), platformController.getSinglePlatform);

router.patch(
  "/:id",
  checkAuth('ADMIN', 'SUPER_ADMIN'),
  validateRequest(platformValidation.updatePlatformSchema),
  platformController.updatePlatform
);

router.delete("/:id", checkAuth('ADMIN', 'SUPER_ADMIN'), platformController.deletePlatform);

export const platformRoutes = router;