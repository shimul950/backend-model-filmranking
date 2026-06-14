import {  Router } from "express";
import { userController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createAdminValidationSchema} from "./user.validatior";
import { checkAuth } from "../../middleware/checkAuth";



const router = Router();


router.post(
    "/create-admin",
    checkAuth("ADMIN", "SUPER_ADMIN"),
    validateRequest(createAdminValidationSchema)
    , userController.createAdmin)


export const userRoute = router;