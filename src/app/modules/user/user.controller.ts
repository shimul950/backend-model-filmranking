import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import { userService } from "./user.service";
import { Request, Response } from "express";
import { IQueryParams } from "../../interfaces/queryBuilder.interface";



const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createAdmin(req.body);

  sendResponce(res, {
    httpStatusCode:status.CREATED,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});


const getAllUsers = catchAsync(async (req, res) => {
    const result = await userService.getAllUsers(req.query as IQueryParams);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Users retrieved successfully",
        data: result.data,
        meta: result.meta,
    });
});


export const userController = {
    createAdmin,
    getAllUsers,
}