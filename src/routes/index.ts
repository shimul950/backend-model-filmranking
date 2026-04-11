import { Router } from "express";
import { authRouters } from "../app/modules/auth/auth.routes";
import { userRoute } from "../app/modules/user/user.routes";
import { AdminRoutes } from "../app/modules/admin/admin.routes";

const router = Router()

router.use('/auth',authRouters)

router.use('/users', userRoute)

router.use('/admins', AdminRoutes)

export const indexRoutes = router