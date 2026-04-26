import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createMediaZodSchema } from "./media.validator";
import { mediaController } from "./media.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { multerUpload } from "../../../config/multer.config";

const router = Router()

router.post("/",
    // checkAuth('ADMIN'),
    multerUpload.single('file'),
    validateRequest(createMediaZodSchema),mediaController.createMedia )


export const mediaRoutes = router