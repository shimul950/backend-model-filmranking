import express from "express";
import { bannerController } from "./banner.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createBannerZodSchema, updateBannerZodSchema } from "./banner.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

// Public: Get active banners for public homepage
router.get("/active", bannerController.getActiveBanners);

// Protected: Admin / Super Admin can list all banners (including inactive)
router.get("/", bannerController.getAllBanners);

// Public / Protected: Get single banner
router.get("/:id", bannerController.getSingleBanner);

// Protected: Create banner (Admin & Super Admin)
router.post(
  "/",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(createBannerZodSchema),
  bannerController.createBanner
);

// Protected: Update banner (Admin & Super Admin)
router.patch(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(updateBannerZodSchema),
  bannerController.updateBanner
);

// Protected: Delete banner (Admin & Super Admin)
router.delete(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  bannerController.deleteBanner
);

export const bannerRoutes = router;
