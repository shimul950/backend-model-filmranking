import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import { userService } from "./user.service";
import { Request, Response } from "express";



const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createAdmin(req.body);

  sendResponce(res, {
    httpStatusCode:status.CREATED,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});



export const userController = {
    createAdmin
}