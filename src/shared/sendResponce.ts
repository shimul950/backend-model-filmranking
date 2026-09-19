import { Response } from "express";

export interface ResponceData<T> {
    httpStatusCode: number;
    success: boolean;
    message: string;
    data: T;
    meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export const sendResponce = <T> (res: Response, responceData: ResponceData<T>) => {
    const {httpStatusCode, success, message, data} = responceData;

    res.status(httpStatusCode).json({
        success,
        message,
        data
    })
}