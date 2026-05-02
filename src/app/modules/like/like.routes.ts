import { Router } from "express";
import { likeController } from "./like.controller";

const router = Router();

router.post('/like/:reviewId', likeController.toggleLike)

export const likeRoute = router