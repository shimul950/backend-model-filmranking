import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { superAdminController } from "./superAdmin.controller";
import { updateSuperAdminValidationSchema } from "./superAdmin.validatior";

const router = Router();

router.get("/", checkAuth(Role.SUPER_ADMIN), superAdminController.getAllSuperAdmins);

router.get("/:id", checkAuth(Role.SUPER_ADMIN), superAdminController.getSuperAdminById);

router.patch(
  "/:id",
  checkAuth(Role.SUPER_ADMIN),
  validateRequest(updateSuperAdminValidationSchema),
  superAdminController.updateSuperAdmin,
);

router.delete(
  "/:id",
  checkAuth(Role.SUPER_ADMIN),
  superAdminController.softDeleteSuperAdmin,
);

export const SuperAdminRoutes = router;
