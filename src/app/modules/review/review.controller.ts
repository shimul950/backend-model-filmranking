// review.controller.ts
import { Request, Response } from "express";
import status from "http-status";

import { ReviewService } from "./review.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import { IQueryParams } from "../../interfaces/queryBuilder.interface";


const createReview = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;

  const result = await ReviewService.createReview(userId, req.body);

  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Review created successfully",
    data: result,
  });
});

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getAllReviews(
    req.query as IQueryParams
  );

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "All reviews retrieved successfully",
    data: result,
  });
});

const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ReviewService.getSingleReview(id as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Review retrieved successfully",
    data: result,
  });
});

const updateReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const result = await ReviewService.updateReview(
    id as string,
    userId,
    req.body
  );

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Review updated successfully",
    data: result,
  });
});

const updateReviewStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ReviewService.updateReviewStatus(
    id as string,
    req.body.status
  );

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Review status updated successfully",
    data: result,
  });
});

const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const result = await ReviewService.deleteReview(id as string, userId);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Review deleted successfully",
    data: result,
  });
});

export const ReviewController = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  updateReviewStatus,
  deleteReview,
};