import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { adminController } from "./admin.controller";
import { updateAdminValidationSchema } from "./admin.validatior";


const router = Router();

router.get(
    "/", 
    checkAuth("ADMIN", "SUPER_ADMIN")
    ,adminController.getAllAdmins
)

router.get(
    "/:id",
    checkAuth("ADMIN", "SUPER_ADMIN"),
    adminController.getAdminById
)

router.patch(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  validateRequest(updateAdminValidationSchema),
  adminController.updateAdmin,
);

router.delete(
  "/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  adminController.softDeleteAdmin
);

router.patch(
  "/change-user-status/:id",
  checkAuth("ADMIN", "SUPER_ADMIN"),
  adminController.changeUserStatus
)

router.patch(
  "/change-user-role/:id",
  checkAuth( "SUPER_ADMIN"),
  adminController.changeUserRole
)
export const AdminRoutes = router