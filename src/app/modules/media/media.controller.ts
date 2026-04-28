import { Request, Response } from "express";
import { mediaService } from "./media.service";

import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import { IQueryParams } from "../../interfaces/queryBuilder.interface";

const createMedia = catchAsync(async (req: Request, res: Response) => {
  const payload = {
    ...req.body,
    posterUrl : req.file?.path
  }

  const result = await mediaService.createMedia(payload);
  

  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Media created successfully",
    data: result,
  });
});

const getAllMedia = catchAsync(async (req: Request, res: Response) => {
  const result = await mediaService.getAllMedia(req.query as IQueryParams);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "All media retrieved successfully",
    data: result,
  });
});

const getMediaById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await mediaService.getMediaById(id as string);

  if (!result) {
    sendResponce(res, {
      httpStatusCode: status.NOT_FOUND,
      success: false,
      message: "Media not found",
      data: null,
    });
    return;
  }

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Media retrieved successfully",
    data: result,
  });
});

const updateMedia = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = {
    ...req.body,
    ...(req.file && { posterUrl: req.file.path }),
  };

  const result = await mediaService.updateMedia(id as string, payload);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Media updated successfully",
    data: result,
  });
});

const deleteMedia = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await mediaService.deleteMedia(id as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Media deleted successfully",
    data: result,
  });
});

export const mediaController = {
  createMedia,
  getAllMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
};