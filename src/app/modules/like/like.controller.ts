import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { likeService } from "./like.service";
import { sendResponce } from "../../../shared/sendResponce";
import status from "http-status";

const toggleLike = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user.userId;
    const { reviewId } = req.params

    const result = await likeService.toggleLike(userId, reviewId as string)

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: result.liked
            ? "Review liked successfully"
            : "Review unliked successfully",
        data: result,
    });
})

const getLikeCount = catchAsync(
  async (req: Request, res: Response) => {
    const { reviewId } = req.params;

    const result = await likeService.getLikeCount(reviewId as string);

    sendResponce(res, {
      httpStatusCode: status.OK,
      success: true,
      message: "Like count retrieved successfully",
      data: result, // { totalLikes: number }
    });
  }
);

export const likeController ={
    toggleLike,
    getLikeCount
}