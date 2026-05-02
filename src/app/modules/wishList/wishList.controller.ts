import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";
import status from "http-status";
import { wishListService } from "./wishList.service";

const toggleWishlist = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user.userId; // from auth middleware
    const { mediaId } = req.body;

    const result = await wishListService.toggleWishList(userId, mediaId);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: result.message || "Wishlist updated",
        data: result,
    });
});

const getWishlist = catchAsync (async(req: Request, res: Response) => {
    const userId = req.user.userId;

    const result = await wishListService.getWishList(userId);

    res.status(200).json({
        success: true,
        data: result,
    });
});

export  const wishlistController ={toggleWishlist, getWishlist}