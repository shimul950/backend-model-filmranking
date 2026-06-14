import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { statsController } from "./stats.controller";

const router = Router()

router.get(
    '/',
    checkAuth(Role.ADMIN, Role.USER),
    statsController.getDashboardStatsData
)

export const statsRoute = router