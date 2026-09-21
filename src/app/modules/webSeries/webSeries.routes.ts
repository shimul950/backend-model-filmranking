import express from "express";
import { webSeriesController } from "./webSeries.controller";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createWebSeriesZodSchema,
  updateWebSeriesZodSchema,
  createSeasonZodSchema,
  createEpisodeZodSchema,
} from "./webSeries.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(createWebSeriesZodSchema),
  webSeriesController.createWebSeries
);

router.get("/", webSeriesController.getAllWebSeries);

router.get("/:id", webSeriesController.getSingleWebSeries);

router.patch(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(updateWebSeriesZodSchema),
  webSeriesController.updateWebSeries
);

router.delete(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  webSeriesController.deleteWebSeries
);

router.post(
  "/:id/seasons",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(createSeasonZodSchema),
  webSeriesController.addSeason
);

router.post(
  "/seasons/:seasonId/episodes",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(createEpisodeZodSchema),
  webSeriesController.addEpisode
);

export const webSeriesRoutes = router;
