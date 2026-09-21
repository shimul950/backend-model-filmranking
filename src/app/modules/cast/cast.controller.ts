import { Request, Response } from "express";
import status from "http-status";
import { castService } from "./cast.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

const createCast = catchAsync(async (req: Request, res: Response) => {
  const result = await castService.createCast(req.body);
  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Cast created successfully",
    data: result,
  });
});

const getAllCasts = catchAsync(async (_req: Request, res: Response) => {
  const result = await castService.getAllCasts();
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Casts retrieved successfully",
    data: result,
  });
});

const getSingleCast = catchAsync(async (req: Request, res: Response) => {
  const result = await castService.getSingleCast(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Cast retrieved successfully",
    data: result,
  });
});

const updateCast = catchAsync(async (req: Request, res: Response) => {
  const result = await castService.updateCast(req.params.id as string, req.body);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Cast updated successfully",
    data: result,
  });
});

const deleteCast = catchAsync(async (req: Request, res: Response) => {
  const result = await castService.deleteCast(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Cast deleted successfully",
    data: result,
  });
});

export const castController = {
  createCast,
  getAllCasts,
  getSingleCast,
  updateCast,
  deleteCast,
};
