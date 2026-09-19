import express from "express";
import { wishlistController } from "./wishList.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post("/toggle", checkAuth("ADMIN", "USER", "SUPER_ADMIN"), wishlistController.toggleWishlist);
router.get("/", checkAuth("ADMIN", "USER", "SUPER_ADMIN"), wishlistController.getWishlist);

export default router;
