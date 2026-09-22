import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { authServices } from "./auth.service";
import { sendResponce } from "../../../shared/sendResponce";
import status from "http-status";
import { tokenUtils } from "../../../utils/token";
import AppError from "../../errorHelpers/appError";
import { cookieUtils } from "../../../utils/cookie";
import { envVars } from "../../../config/env";
import { auth } from "../../lib/auth";
import { ISessionPayload } from "./auth.interface";
import { fromNodeHeaders } from "better-auth/node";



const register = catchAsync(
    async(req: Request, res:Response)=>{
        const payload = req.body;

        const result = await authServices.register(payload)
        
        const {accessToken, refreshToken, token, ...rest} = result

        tokenUtils.setAccesssTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, refreshToken);
        tokenUtils.setBeterAuthSessionCookie(res, token as string);

        sendResponce(res, {
            httpStatusCode:status.CREATED,
            success: true,
            message:"User registered successfully",
            data:{
                token,
                accessToken,
                refreshToken,
                ...rest
            }
        })
    }
)

const loginUser = catchAsync(
    async(req:Request, res:Response)=>{
        const payload = req.body;

        const result = await authServices.loginUser(payload);

        const {accessToken, refreshToken, token, ...rest} = result

        tokenUtils.setAccesssTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, refreshToken);
        tokenUtils.setBeterAuthSessionCookie(res, token);

        sendResponce(res, {
            httpStatusCode:status.OK,
            success: true,
            message:"User logged in successfully",
            data:{
                token,
                accessToken,
                refreshToken,
                ...rest
            }
        })

    }
)

const getme = catchAsync(async(req:Request, res:Response)=>{
    const user = req.user;
    const result = await authServices.getme(user)
    sendResponce(res,{
        httpStatusCode: status.OK,
        success: true,
        message: 'user profile fetched successfully',
        data: result
    })
})

const getNewToken = catchAsync(
    async(req: Request, res: Response) =>{
        const refreshToken = req.cookies.refreshToken;
        const betterAuthSessionToken = req.cookies["better-auth.session_token"];
        if(!refreshToken){
            throw new AppError(status.UNAUTHORIZED, "Refresh token is missing")
        }

        const result = await authServices.getNewToken(refreshToken, betterAuthSessionToken)

        const {accessToken, sessionToken, refreshToken: newRefreshToken} = result

        tokenUtils.setAccesssTokenCookie(res, accessToken);
        tokenUtils.setRefreshTokenCookie(res, newRefreshToken);
        tokenUtils.setBeterAuthSessionCookie(res, sessionToken)

        sendResponce(res,{
            httpStatusCode: status.OK,
            success: true,
            message:"Refresh token updated successfully",
            data:result
        })
    }
)

const changePassword = catchAsync(
    async(req:Request, res:Response) =>{
        const payload = req.body;

        const betterAuthSessionToken = req.cookies["better-auth.session_token"];
        
        const result = await authServices.changePassword(payload, betterAuthSessionToken);

        const {newAccessToken, newRefreshToken, token} = result
        
        tokenUtils.setAccesssTokenCookie(res, newAccessToken);
        tokenUtils.setRefreshTokenCookie(res, newRefreshToken);
        tokenUtils.setBeterAuthSessionCookie(res, token as string)

        sendResponce(res,{
            httpStatusCode: status.OK,
            success: true,
            message: "Password change successfully",
            data: result
        })
    }
)

const logoutUser = catchAsync(
    async(req: Request, res: Response)=>{
        const betterAuthSessiontoken = req.cookies["better-auth.session_token"];

        const result = await authServices.logoutUser(betterAuthSessiontoken);

        cookieUtils.clearCookie(res, 'accessToken', {
            httpOnly:true,
            secure: true,
            sameSite: 'none'
        })

        cookieUtils.clearCookie(res, 'refreshToken',{
            httpOnly:true,
            secure: true,
            sameSite: 'none'
        })

        cookieUtils.clearCookie(res, "better-auth.session_token", {
            httpOnly:true,
            secure: true,
            sameSite: 'none'
        })

        sendResponce(res,{
            httpStatusCode: status.OK,
            success: true,
            message: "User logged out successfully",
            data: result
        })
    }
)


const varifyEmail = catchAsync(
    async(req: Request, res: Response)=>{
        const {email, otp} = req.body;
        await authServices.verifyEmail(email, otp);

        sendResponce(res,{
            httpStatusCode: status.OK,
            success: true,
            message: "Email verified successfully",
            data: null
        })
    }
)
const forgetPassword = catchAsync(
    async(req: Request, res: Response)=>{
        const {email} = req.body;
        await authServices.forgetPassword(email);

        sendResponce(res,{
            httpStatusCode: status.OK,
            success: true,
            message: "Password reset OTP sent to email successfully",
            data: null
        })
    }
)
const resetPassword = catchAsync(
    async(req: Request, res: Response)=>{
        const {email, otp, newPassword} = req.body;
        await authServices.resetPassword(email, otp, newPassword);

        sendResponce(res,{
            httpStatusCode: status.OK,
            success: true,
            message: "Password reset successfully",
            data: null
        })
    }
)

//  /api/v1/auth/login/google?redirect=/dashboard&origin=http://localhost:3000
const googleLogin = catchAsync((req: Request, res: Response) => {
    const redirectPath = (req.query.redirect as string) || "/dashboard";
    const originQuery = (req.query.origin as string) || "";

    const proto = (req.headers["x-forwarded-proto"] as string) || req.protocol || "http";
    const host = (req.headers["x-forwarded-host"] as string) || req.get("host");
    const currentBackendOrigin = host ? `${proto}://${host}` : envVars.BETTER_AUTH_URL;

    // Target frontend URL for redirects and 'Back to Login' links
    const rawFrontend = originQuery || (req.get("origin") as string) || envVars.FRONTEND_URL || "http://localhost:3000";
    const safeFrontendUrl = rawFrontend.replace(/\/+$/, "");

    const encodedRedirectPath = encodeURIComponent(redirectPath);
    const encodedOrigin = encodeURIComponent(safeFrontendUrl);

    const callbackUrl = `${currentBackendOrigin}/api/v1/auth/google/success?redirect=${encodedRedirectPath}&origin=${encodedOrigin}`;

    res.render("googleRedirect", {
        callBackUrl: callbackUrl,
        betterAuthUrl: currentBackendOrigin,
        frontendUrl: safeFrontendUrl
    });
});
const googleLoginSuccess = catchAsync(async(req: Request, res: Response) =>{
    const redirectPath = (req.query.redirect as string) || (req.query['amp;redirect'] as string) || "/dashboard";
    const originQuery = (req.query.origin as string) || (req.query['amp;origin'] as string) || "";
    const targetFrontendUrl = (originQuery || envVars.FRONTEND_URL || "http://localhost:3000").replace(/\/+$/, "");

    const sessionToken = req.cookies["better-auth.session_token"] || cookieUtils.getCookie(req, "better-auth.session_token");

    if(!sessionToken){
        return res.redirect(`${targetFrontendUrl}/login?error=oauth_failed`);
    }

    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers)
    }) || await auth.api.getSession({
        headers: new Headers({
            "Cookie": `better-auth.session_token=${sessionToken}`
        })
    });

    if(!session){
        return res.redirect(`${targetFrontendUrl}/login?error=no_session_found`);
    }

    if(session && !session.user){
        return res.redirect(`${targetFrontendUrl}/login?error=no_user_found`);
    }

    const result = await authServices.googleLoginSuccess(session as ISessionPayload);

    const {accessToken, refreshToken} = result;

    // Set cookies on backend response as well (for direct API access with credentials: include)
    tokenUtils.setAccesssTokenCookie(res, accessToken);
    tokenUtils.setRefreshTokenCookie(res, refreshToken);
    tokenUtils.setBeterAuthSessionCookie(res, sessionToken);

    // Validate redirect path: must start with single '/'
    const isValidRedirectPath = redirectPath.startsWith("/") && !redirectPath.startsWith("//");
    const finalRedirectPath = isValidRedirectPath ? redirectPath : "/dashboard";

    // Redirect to frontend auth callback so the frontend sets all tokens on its domain
    const callbackTarget = `${targetFrontendUrl}/api/auth/callback?accessToken=${encodeURIComponent(accessToken)}&refreshToken=${encodeURIComponent(refreshToken)}&sessionToken=${encodeURIComponent(sessionToken)}&redirect=${encodeURIComponent(finalRedirectPath)}`;

    res.redirect(callbackTarget);
})


const handleOAuthError = catchAsync((req: Request, res: Response) =>{
    const error = (req.query.error as string) || "oauth_failed";
    const originQuery = (req.query.origin as string) || (req.query['amp;origin'] as string) || "";
    const targetFrontendUrl = (originQuery || envVars.FRONTEND_URL || "http://localhost:3000").replace(/\/+$/, "");
    res.redirect(`${targetFrontendUrl}/login?error=${encodeURIComponent(error)}`);
})


const updateProfile = catchAsync(async (req: Request, res: Response) => {
    const sessionToken = cookieUtils.getCookie(req, "better-auth.session_token");

    if (!sessionToken) {
        throw new AppError(status.UNAUTHORIZED, "Unauthorized access! No session token provided.")
    }

    const result = await authServices.updateProfile(
        req.body,
        sessionToken,
        req.file as Express.Multer.File | undefined
    );

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Profile updated successfully",
        data: result
    })
})


export const authControllers = {
    register,
    loginUser,
    getme,
    getNewToken,
    changePassword,
    logoutUser,
    varifyEmail,
    forgetPassword,
    resetPassword,
    googleLogin,
    googleLoginSuccess,
    handleOAuthError,
    updateProfile
}