import express from "express";
import { genreController } from "./genre.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createGenreZodSchema, updateGenreZodSchema } from "./genre.validator";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
  "/", checkAuth('ADMIN', 'SUPER_ADMIN'),
  validateRequest(createGenreZodSchema),
  genreController.createGenre
);

router.get("/", checkAuth('ADMIN', 'SUPER_ADMIN'), genreController.getAllGenres);

router.get("/:id", checkAuth('ADMIN', 'SUPER_ADMIN'), genreController.getSingleGenre);

router.patch(
  "/:id",
  checkAuth('ADMIN', 'SUPER_ADMIN'),
  validateRequest(updateGenreZodSchema),
  genreController.updateGenre
);

router.delete("/:id", checkAuth('ADMIN', 'SUPER_ADMIN'), genreController.deleteGenre);

export const genreRoutes = router;