import { Request, Response } from "express";
import { mediaService } from "./media.service";

import status from "http-status";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

const createMedia = catchAsync(async (req: Request, res: Response) => {
  // const result = await mediaService.createMedia(req.body);
  console.log(req.body);
  console.log(req.file);

  sendResponce(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Media created successfully",
    // data: result,
  });
});

export const mediaController = {
  createMedia,
};