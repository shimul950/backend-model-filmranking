import { Router } from "express";
import { authControllers } from "./auth.controller";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router()

router.post("/register" , authControllers.register)
router.post("/login", authControllers.loginUser)
router.get("/getme", checkAuth("ADMIN","USER") ,authControllers.getme)
router.post("/refresh-token", authControllers.getNewToken)

router.post("/change-password", checkAuth("ADMIN","USER"), authControllers.changePassword)
router.post("/logout", checkAuth('ADMIN', "USER"), authControllers.logoutUser)

router.post("/forget-password", authControllers.forgetPassword)
router.post("/reset-password", authControllers.resetPassword)

router.post("/verify-email", authControllers.varifyEmail)

router.get("/login/google", authControllers.googleLogin);
router.get("/google/success", authControllers.googleLoginSuccess);
router.get("/oauth/error", authControllers.handleOAuthError)
export const authRouters = router;