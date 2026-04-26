import { Request, Response } from "express";

import status from "http-status";
import { genreService } from "./genre.service";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponce } from "../../../shared/sendResponce";

// CREATE
const createGenre = catchAsync(async (req: Request, res: Response) => {
    const result = await genreService.createGenre(req.body);

    sendResponce(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "Genre created successfully",
        data: result,
    });
});

// GET ALL
const getAllGenres = catchAsync(async (_req: Request, res: Response) => {
    const result = await genreService.getAllGenres();

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genres retrieved successfully",
        data: result,
    });
});

// GET SINGLE
const getSingleGenre = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await genreService.getSingleGenre(id as string);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre retrieved successfully",
        data: result,
    });
});

// UPDATE
const updateGenre = catchAsync(async (req: Request, res: Response) => {
    const result = await genreService.updateGenre(
        req.params.id as string,
        req.body
    );

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre updated successfully",
        data: result,
    });
});

// DELETE
const deleteGenre = catchAsync(async (req: Request, res: Response) => {
    const result = await genreService.deleteGenre(req.params.id as string);

    sendResponce(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre deleted successfully",
        data: result,
    });
});

export const genreController = {
    createGenre,
    getAllGenres,
    getSingleGenre,
    updateGenre,
    deleteGenre,
};