import express from "express";
import { wishlistController } from "./wishList.controller";

const router = express.Router();

router.post("/toggle", wishlistController.toggleWishlist);
router.get("/", wishlistController.getWishlist);

export default router;