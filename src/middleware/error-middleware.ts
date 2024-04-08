import { NextFunction, Request, Response } from "express";
import { HttpException } from "../_errors/error-root";


const errorMiddleware = (error:HttpException, req:Request, res:Response, next:NextFunction) => {
    res.status(error.statusCode).json({
        message:error.message,
        errorCode:error.errorCode,
        errors:error.errors
    })
}

export default errorMiddleware