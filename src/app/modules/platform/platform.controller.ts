import { Request, Response } from "express";
import { platformService } from "./platform.service";

import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";


// ✅ CREATE
const createPlatform = catchAsync(async (req: Request, res: Response) => {
  const result = await platformService.createPlatform(req.body);

  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Platform created successfully",
    data: result,
  });
});

// ✅ GET ALL
const getAllPlatforms = catchAsync(async (req: Request, res: Response) => {
  const result = await platformService.getAllPlatforms();

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Platforms retrieved successfully",
    data: result,
  });
});

// ✅ GET SINGLE
const getSinglePlatform = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await platformService.getSinglePlatform(id as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Platform retrieved successfully",
    data: result,
  });
});

// ✅ UPDATE
const updatePlatform = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await platformService.updatePlatform(id as string, req.body);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Platform updated successfully",
    data: result,
  });
});

// ✅ DELETE
const deletePlatform = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await platformService.deletePlatform(id as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: result.message,
    data: null,
  });
});

export const platformController = {
  createPlatform,
  getAllPlatforms,
  getSinglePlatform,
  updatePlatform,
  deletePlatform,
};