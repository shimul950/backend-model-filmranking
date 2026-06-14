import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createMediaZodSchema, updateMediaZodSchema } from "./media.validator";
import { mediaController } from "./media.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { multerUpload } from "../../../config/multer.config";

const router = Router()

router.post("/",
    checkAuth('ADMIN', 'SUPER_ADMIN'),
    multerUpload.single('file'),
    validateRequest(createMediaZodSchema),
    mediaController.createMedia
);

router.get("/", mediaController.getAllMedia);

router.get("/:id", mediaController.getMediaById);

router.put("/:id",
    checkAuth('ADMIN', 'SUPER_ADMIN'),
    multerUpload.single('file'),
    validateRequest(updateMediaZodSchema),
    mediaController.updateMedia
);

router.delete("/:id",
    checkAuth('ADMIN', 'SUPER_ADMIN'),
    mediaController.deleteMedia
);

export const mediaRoutes = router;