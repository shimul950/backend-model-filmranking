import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import { superAdminService } from "./superAdmin.service";

const getAllSuperAdmins = catchAsync(async (_req: Request, res: Response) => {
  const result = await superAdminService.getAllSuperAdmins();

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Super admins fetched successfully",
    data: result,
  });
});

const getSuperAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await superAdminService.getSuperAdminById(id as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Super admin fetched successfully",
    data: result,
  });
});

const updateSuperAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await superAdminService.updateSuperAdmin(id as string, req.body);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Super admin updated successfully",
    data: result,
  });
});

const softDeleteSuperAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.user;
  const result = await superAdminService.softDeleteSuperAdmin(id as string, user);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Super admin soft deleted successfully",
    data: result,
  });
});

export const superAdminController = {
  getAllSuperAdmins,
  getSuperAdminById,
  updateSuperAdmin,
  softDeleteSuperAdmin,
};
