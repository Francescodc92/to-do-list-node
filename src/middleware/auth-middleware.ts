import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { UnauthorizedException } from "../_errors/unauthorized";
import { ErrorCode } from "../_errors/error-root";
import { prisma } from "../lib/prisma";
import { User } from "@prisma/client";

const authMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    
     const token = req.headers.authorization;
     
     if(!token){
         next(new UnauthorizedException('Unauthorized!', ErrorCode.UNAUTHORIZED_EXCEPTION))
     }
     if (typeof token !== 'string') {
         return next(new UnauthorizedException('Unauthorized!', ErrorCode.UNAUTHORIZED_EXCEPTION));
     }
    try {
     
     const payload = jwt.verify(token, process.env.JWT_SECRET!) as any
     
      
     const user = await prisma.user.findUnique({
         where:{
             id:payload.userId
         }
     })
 
     if(!user){
         next(new UnauthorizedException('Unauthorized!', ErrorCode.UNAUTHORIZED_EXCEPTION))  
     }
     
     req.user = user as User;
     next()
 
    } catch (error) {
     next(new UnauthorizedException('Unauthorized!', ErrorCode.UNAUTHORIZED_EXCEPTION))
    }
 
 }
 
 export {authMiddleware}