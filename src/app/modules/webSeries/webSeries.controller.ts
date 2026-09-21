import { Request, Response } from "express";
import status from "http-status";
import { webSeriesService } from "./webSeries.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

const createWebSeries = catchAsync(async (req: Request, res: Response) => {
  const result = await webSeriesService.createWebSeries(req.body);
  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Web series created successfully",
    data: result,
  });
});

const getAllWebSeries = catchAsync(async (_req: Request, res: Response) => {
  const result = await webSeriesService.getAllWebSeries();
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Web series retrieved successfully",
    data: result,
  });
});

const getSingleWebSeries = catchAsync(async (req: Request, res: Response) => {
  const result = await webSeriesService.getSingleWebSeries(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Web series retrieved successfully",
    data: result,
  });
});

const updateWebSeries = catchAsync(async (req: Request, res: Response) => {
  const result = await webSeriesService.updateWebSeries(req.params.id as string, req.body);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Web series updated successfully",
    data: result,
  });
});

const deleteWebSeries = catchAsync(async (req: Request, res: Response) => {
  const result = await webSeriesService.deleteWebSeries(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Web series deleted successfully",
    data: result,
  });
});

const addSeason = catchAsync(async (req: Request, res: Response) => {
  const result = await webSeriesService.addSeason(req.params.id as string, req.body);
  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Season added successfully",
    data: result,
  });
});

const addEpisode = catchAsync(async (req: Request, res: Response) => {
  const result = await webSeriesService.addEpisode(req.params.seasonId as string, req.body);
  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Episode added successfully",
    data: result,
  });
});

export const webSeriesController = {
  createWebSeries,
  getAllWebSeries,
  getSingleWebSeries,
  updateWebSeries,
  deleteWebSeries,
  addSeason,
  addEpisode,
};
