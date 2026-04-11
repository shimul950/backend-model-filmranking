import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { adminController } from "./admin.controller";
import { updateAdminValidationSchema } from "./admin.validatior";


const router = Router();

router.get(
    "/", 
    checkAuth("ADMIN")
    ,adminController.getAllAdmins
)

router.get(
    "/:id",
    checkAuth("ADMIN"),
    adminController.getAdminById
)

router.patch(
  "/:id",
  checkAuth("ADMIN"),
  validateRequest(updateAdminValidationSchema),
  adminController.updateAdmin,
);

router.delete(
  "/:id",
  checkAuth( "ADMIN"),
  adminController.softDeleteAdmin
);

export const AdminRoutes = router