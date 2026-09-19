import { Router } from "express";
import { likeController } from "./like.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

router.post('/like/:reviewId', checkAuth("ADMIN", "USER", "SUPER_ADMIN"), likeController.toggleLike);
router.get('/count/:reviewId', likeController.getLikeCount);

export const likeRoute = router;
