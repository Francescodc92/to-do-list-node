import {Request, Response, NextFunction} from 'express';
import { ZodError } from 'zod';
import { ErrorCode, HttpException } from './_errors/error-root';
import { BadRequestException } from './_errors/bad-request';
import { InternalException } from './_errors/internal-exception';

export const errorHandler = (method:Function) => {
    return async(req:Request, res:Response, next:NextFunction) => {
        try {
           await method(req,res,next)
        } catch (error:any) {
            let exception:HttpException;
            if(error instanceof HttpException){
                exception = error
            }else{
                if(error instanceof ZodError){
                    exception = new BadRequestException('Unprocessable entity!', ErrorCode.UNPROCESSABLE_ENTITY, error)
                }else{
                    exception = new InternalException('Somethings went wrong', error, ErrorCode.INTERNAL_EXCEPTION)
                }
            }
            next(exception);
        }   

    }
}