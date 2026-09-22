import { Request, Response } from "express";
import status from "http-status";
import { bannerService } from "./banner.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

const createBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await bannerService.createBanner(req.body);
  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Banner created successfully",
    data: result,
  });
});

const getAllBanners = catchAsync(async (req: Request, res: Response) => {
  const filters = {
    searchTerm: req.query.searchTerm as string,
    isActive: req.query.isActive as string,
    genre: req.query.genre as string,
  };
  const result = await bannerService.getAllBanners(filters);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Banners retrieved successfully",
    data: result,
  });
});

const getActiveBanners = catchAsync(async (_req: Request, res: Response) => {
  const result = await bannerService.getActiveBanners();
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Active banners retrieved successfully",
    data: result,
  });
});

const getSingleBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await bannerService.getSingleBanner(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Banner retrieved successfully",
    data: result,
  });
});

const updateBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await bannerService.updateBanner(req.params.id as string, req.body);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Banner updated successfully",
    data: result,
  });
});

const deleteBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await bannerService.deleteBanner(req.params.id as string);
  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Banner deleted successfully",
    data: result,
  });
});

export const bannerController = {
  createBanner,
  getAllBanners,
  getActiveBanners,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};
