import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { statsService } from "./stats.service";
import { sendResponce } from "../../../shared/sendResponce";
import status from "http-status";

const getDashboardStatsData = catchAsync(async(req:Request, res: Response) =>{
    const user = req.user;
    const result = await statsService.getDashboardStatsData(user);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success:true,
        message:"Stats data retrieved successfully",
        data: result
    })
})

export const statsController ={
    getDashboardStatsData
}