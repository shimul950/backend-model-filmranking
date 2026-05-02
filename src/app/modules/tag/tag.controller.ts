import { Request, Response } from "express";

import status from "http-status";
import { tagService } from "./tag.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

// CREATE
const createTag = catchAsync(async (req: Request, res: Response) => {
    const result = await tagService.createTag(req.body);

    sendResponce(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "Tag created successfully",
        data: result,
    });
});

// GET ALL
const getAllTags = catchAsync(async (_req: Request, res: Response) => {
    const result = await tagService.getAllTags();

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Tags retrieved successfully",
        data: result,
    });
});

// GET SINGLE
const getSingleTag = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await tagService.getSingleTag(id as string);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Tag retrieved successfully",
        data: result,
    });
});

// UPDATE
const updateTag = catchAsync(async (req: Request, res: Response) => {
    const result = await tagService.updateTag(
        req.params.id as string,
        req.body
    );

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Tag updated successfully",
        data: result,
    });
});

// DELETE
const deleteTag = catchAsync(async (req: Request, res: Response) => {
    const result = await tagService.deleteTag(req.params.id as string);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Tag deleted successfully",
        data: result,
    });
});

export const tagController = {
    createTag,
    getAllTags,
    getSingleTag,
    updateTag,
    deleteTag,
};