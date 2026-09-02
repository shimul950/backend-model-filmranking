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
            message: "Email verified successfully"
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
            message: "Password reset OTP sent to email successfully"
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
            message: "Password reset successfully"
        })
    }
)

//  /api/v1/auth/login/google?redirect=/profile
const googleLogin = catchAsync((req: Request, res: Response) =>{
    const redirectPath = req.query.redirect || "/dashboard";

    const encodedRedirectPath  = encodeURIComponent(redirectPath as string);

    const callbackUrl = `${envVars.BETTER_AUTH_URL}/api/v1/auth/google/success?redirect=${encodedRedirectPath}`

    res.render("googleRedirect",{
        callBackUrl: callbackUrl,
        betterAuthUrl: envVars.BETTER_AUTH_URL
    })
})
const googleLoginSuccess = catchAsync(async(req: Request, res: Response) =>{
    const redirectPath = req.query.redirect as string || "/dashboard";

    const sessionToken = req.cookies["better-auth.session_token"];

    if(!sessionToken){
        return res.redirect(`${envVars.FRONTEND_URL}/login?error=oauth_failed`)
    }

    const session = await auth.api.getSession({
        headers:{
            "Cookie" : `better-auth.session_token=${sessionToken}`
        }
    })

    if(!session){
        return res.redirect(`${envVars.FRONTEND_URL}/login?error=no_session_found`)
    }

    if(session && !session.user){
        return res.redirect(`${envVars.FRONTEND_URL}/login?error=no_user_found`)
    }

    const result = await authServices.googleLoginSuccess(session as ISessionPayload);

    const {accessToken, refreshToken} = result;

    tokenUtils.setAccesssTokenCookie(res, accessToken);
    tokenUtils.setRefreshTokenCookie(res, refreshToken);
    // redirect=//profile -> /profile
    const isValidRedirectPath = redirectPath.startsWith("/") && !redirectPath.startsWith("//");

    const finalRedirectPath = isValidRedirectPath ? redirectPath : "/dashboard";

    res.redirect(`${envVars.FRONTEND_URL}${finalRedirectPath}`)
})


const handleOAuthError = catchAsync((req: Request, res: Response) =>{
    const error = req.query.error as string || "oauth_failed";
    res.redirect(`${envVars.FRONTEND_URL}/login?error=${error}`)
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