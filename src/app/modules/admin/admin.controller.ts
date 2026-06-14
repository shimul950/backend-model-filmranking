import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import status from "http-status";
import { adminService } from "./admin.service";

const getAllAdmins = catchAsync(
    async (req: Request, res: Response) => {
        const result = await adminService.getAllAdmins()

        sendResponce(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Admins fetched successfully",
            data: result
        })
    }
)

const getAdminById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await adminService.getAdminById(id as string)

    sendResponce(res, {
        httpStatusCode: status.FOUND,
        success: true,
        message: "Admin received successfully",
        data: result
    })
})

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await adminService.updateAdmin(id as string, req.body)

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Admins updated successfully",
        data: result
    });
});

const softDeleteAdmin = catchAsync(async(req: Request, res:Response) =>{
    const {id} = req.params;
    const user = req.user
    const result = await adminService.softDeleteAdmin(id as string, user);

    sendResponce(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "Admin soft deleted successfully",
        data: result
    })
})

const changeUserStatus = catchAsync(async(req: Request, res:Response) =>{
    
    const result = await adminService.changeUserStatus();

    sendResponce(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "User status changed successfully",
        data: result
    })
})

const changeUserRole = catchAsync(async(req: Request, res:Response) =>{
    
    const result = await adminService.changeUserRole();

    sendResponce(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "User role changed successfully",
        data: result
    })
})

export const adminController = {
    getAdminById,
    getAllAdmins,
    updateAdmin,
    softDeleteAdmin,
    changeUserRole,
    changeUserStatus
}