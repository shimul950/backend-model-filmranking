import { Router } from "express";
import { authRouters } from "../app/modules/auth/auth.routes";
import { userRoute } from "../app/modules/user/user.routes";
import { AdminRoutes } from "../app/modules/admin/admin.routes";
import { mediaRoutes } from "../app/modules/media/media.routes";
import { genreRoutes } from "../app/modules/genre/genre.routes";
import { platformRoutes } from "../app/modules/platform/platform.routes";

const router = Router()

router.use('/auth',authRouters)

router.use('/users', userRoute)

router.use('/admins', AdminRoutes)

router.use('/media', mediaRoutes)

router.use('/genre', genreRoutes)

router.use('/platform', platformRoutes)

export const indexRoutes = router