import { Request, Response } from "express";
import status from "http-status";
import { directorService } from "./director.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

const createDirector = catchAsync(async (req: Request, res: Response) => {
  const result = await directorService.createDirector(req.body);
  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Director created successfully",
    data: result,
  });
});

const getAllDirectors = catchAsync(async (_req: Request, res: Response) => {
  const result = await directorService.getAllDirectors();
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Directors retrieved successfully",
    data: result,
  });
});

const getSingleDirector = catchAsync(async (req: Request, res: Response) => {
  const result = await directorService.getSingleDirector(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Director retrieved successfully",
    data: result,
  });
});

const updateDirector = catchAsync(async (req: Request, res: Response) => {
  const result = await directorService.updateDirector(req.params.id as string, req.body);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Director updated successfully",
    data: result,
  });
});

const deleteDirector = catchAsync(async (req: Request, res: Response) => {
  const result = await directorService.deleteDirector(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Director deleted successfully",
    data: result,
  });
});

export const directorController = {
  createDirector,
  getAllDirectors,
  getSingleDirector,
  updateDirector,
  deleteDirector,
};
