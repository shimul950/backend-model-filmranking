import { Request, Response } from "express";
import status from "http-status";
import { commentService } from "./comment.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

const createComment = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const result = await commentService.createComment(userId, req.body);

  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Comment created successfully",
    data: result,
  });
});

const getCommentsByReview = catchAsync(async (req: Request, res: Response) => {
  const { reviewId } = req.params;
  const result = await commentService.getCommentsByReview(reviewId as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Comments retrieved successfully",
    data: result,
  });
});

const getSingleComment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await commentService.getCommentById(id as string);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Comment retrieved successfully",
    data: result,
  });
});

const updateComment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const result = await commentService.updateComment(id as string, userId, req.body);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Comment updated successfully",
    data: result,
  });
});

const deleteComment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const result = await commentService.deleteComment(id as string, userId);

  sendResponce(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Comment deleted successfully",
    data: result,
  });
});

export const commentController = {
  createComment,
  getCommentsByReview,
  getSingleComment,
  updateComment,
  deleteComment,
};
