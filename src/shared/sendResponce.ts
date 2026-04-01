import { Response } from "express";

interface ResponceData <T> {
    httpStatusCode: number;
    success:boolean;
    message:string;
    data?: T
}

export const sendResponce = <T> (res: Response, responceData: ResponceData<T>) => {
    const {httpStatusCode, success, message, data} = responceData;

    res.status(httpStatusCode).json({
        success,
        message,
        data
    })
}